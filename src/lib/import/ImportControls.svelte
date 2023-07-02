<script lang="ts">
  import { JsStreetNetwork } from "osm2streets-js";
  import type { Imported, Settings } from "../../import";
  import { map } from "../../store";
  import { bbox } from "../../style";
  import { downloadGeneratedFile } from "../../utils";
  import BuiltInSelector from "../common/osm_input/BuiltInSelector.svelte";
  import OverpassSelector from "../common/osm_input/OverpassSelector.svelte";
  import type { OsmSelection } from "../common/osm_input/types";
  import Osm2streetsSettings from "./Osm2streetsSettings.svelte";

  export let imported: Imported;

  let settings: Settings;

  function download() {
    // This type-check is always true; the button only appears sometimes
    if (imported.kind === "done") {
      // TODO If we have a name for the imported area, use that
      downloadGeneratedFile("osm.xml", imported.osmInput);
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
  map={$map}
  on:load={load}
  on:resetToNone={resetToNone}
  on:error={error}
/>
<BuiltInSelector on:load={load} on:resetToNone={resetToNone} on:error={error} />

{#if imported.kind === "nothing"}
  <p>Use the polygon tool to select an area to import</p>
{:else if imported.kind === "error"}
  <p>Error: {imported.msg}</p>
{:else if imported.kind === "done"}
  <div>
    <button type="button" on:click={download}>Download osm.xml</button>
    <button type="button" on:click={resetView}>Reset view</button>
  </div>
{/if}

<Osm2streetsSettings bind:settings />
