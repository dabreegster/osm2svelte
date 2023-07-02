<script lang="ts">
  import type { Feature, Polygon } from "geojson";
  import { JsStreetNetwork } from "osm2streets-js";
  import {
    boundaryGJ as boundaryGjStore,
    map,
    network as networkStore,
  } from "../../store";
  import { bbox } from "../../style";
  import { downloadGeneratedFile } from "../../utils";
  import BuiltInSelector from "../common/osm_input/BuiltInSelector.svelte";
  import OverpassSelector from "../common/osm_input/OverpassSelector.svelte";
  import type { OsmSelection } from "../common/osm_input/types";
  import Osm2streetsSettings from "./Osm2streetsSettings.svelte";

  // This component sets the global network and boundaryGj stores

  interface Settings {
    debug_each_step: boolean;
    dual_carriageway_experiment: boolean;
    sidepath_zipping_experiment: boolean;
    inferred_sidewalks: boolean;
    osm2lanes: boolean;
  }

  type Imported =
    | { kind: "nothing" }
    | { kind: "error"; msg: string }
    | {
        kind: "done";
        boundaryGJ: Feature<Polygon>;
        osmInput: string;
        network: JsStreetNetwork;
      };

  let imported: Imported = { kind: "nothing" };

  let settings: Settings;
  let overpassSelector;

  function download() {
    // This type-check is always true; the button only appears sometimes
    if (imported.kind === "done") {
      // TODO If we have a name for the imported area, use that
      downloadGeneratedFile("osm.xml", imported.osmInput);
    }
  }

  async function update() {
    if (imported.kind === "done") {
      overpassSelector.importPolygon(imported.boundaryGJ);
    }
  }

  function resetView() {
    if (imported.kind === "done") {
      $map!.fitBounds(bbox(imported.boundaryGJ), {
        animate: false,
        padding: 10,
      });
    }
  }

  function load(e: CustomEvent<OsmSelection>) {
    try {
      let network = new JsStreetNetwork(
        e.detail.osmXML,
        JSON.stringify(e.detail.boundaryGj),
        settings
      );
      imported = {
        kind: "done",
        boundaryGJ: e.detail.boundaryGj,
        osmInput: e.detail.osmXML,
        network,
      };

      networkStore.set(imported.network);
      boundaryGjStore.set(imported.boundaryGJ);
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }

  function resetToNone(e: CustomEvent<void>) {
    imported = { kind: "nothing" };
  }

  function error(e: CustomEvent<string>) {
    imported = { kind: "error", msg: e.detail };
  }
</script>

<OverpassSelector
  bind:this={overpassSelector}
  map={$map}
  on:load={load}
  on:resetToNone={resetToNone}
  on:error={error}
/>
<fieldset>
  <legend>
    <BuiltInSelector
      on:load={load}
      on:resetToNone={resetToNone}
      on:error={error}
    />
  </legend>

  {#if imported.kind === "nothing"}
    <p>Use the polygon tool to select an area to import</p>
  {:else if imported.kind === "error"}
    <p>Error: {imported.msg}</p>
  {:else if imported.kind === "done"}
    <div>
      <button type="button" on:click={update}>Update OSM data</button>
      <button type="button" on:click={download}>Download osm.xml</button>
      <button type="button" on:click={resetView}>Reset view</button>
    </div>
  {/if}
</fieldset>

<Osm2streetsSettings bind:settings />
