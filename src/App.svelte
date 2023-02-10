<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Polygon } from "geojson";
  import { overpassQueryForPolygon } from "./overpass.js";
  import init, { JsStreetNetwork } from "osm2streets-js";
  import { onMount } from "svelte";

  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";

  import sampleOsmInputUrl from "../assets/input.osm?url";
  import sampleBoundaryGeojson from "../assets/boundary.json?raw";

  type Imported =
    | "nothing"
    | { kind: "LoadingOverpass"; polygon: Polygon }
    | { kind: "error"; msg: string }
    | {
        kind: "osm2streets import";
        boundaryPolygon: Polygon;
        osmInput: string;
      }
    | {
        kind: "done";
        boundaryPolygon: Polygon;
        network: JsStreetNetwork;
      };

  let imported: Imported = "nothing";

  onMount(async () => {
    await init();
  });

  async function handlePolygon(e: CustomEvent<Polygon>) {
    let polygon = e.detail;
    imported = { kind: "LoadingOverpass", polygon };

    try {
      let resp = await fetch(overpassQueryForPolygon(polygon));
      let osmInput = await resp.text();
      imported = {
        kind: "osm2streets import",
        // TODO Maybe we don't need to plumb this here
        boundaryPolygon: polygon,
        osmInput,
      };

      let network = importOSM(polygon, osmInput);
      imported = {
        kind: "done",
        boundaryPolygon: polygon,
        network,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }

  function importOSM(
    boundaryPolygon: Polygon,
    osmXML: string
  ): JsStreetNetwork {
    let gj = {
      type: "Feature",
      geometry: boundaryPolygon,
      properties: {},
    };
    return new JsStreetNetwork(osmXML, JSON.stringify(gj), {
      debug_each_step: false,
      dual_carriageway_experiment: false,
      cycletrack_snapping_experiment: false,
      inferred_sidewalks: false,
      osm2lanes: false,
    });
  }

  async function importSampleArea() {
    let polygon = JSON.parse(sampleBoundaryGeojson);

    // TODO Go through all the same states?
    try {
      let resp = await fetch(sampleOsmInputUrl);
      let osmInput = await resp.text();
      let network = importOSM(polygon, osmInput);

      imported = {
        kind: "done",
        boundaryPolygon: polygon,
        network,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>
    <button type="button" on:click={importSampleArea}
      >Import built-in sample area</button
    >
    {#if imported === "nothing"}
      <p>Use the polygon tool to select an area to import</p>
    {:else if imported.kind === "LoadingOverpass"}
      <p>{JSON.stringify(imported)}</p>
      <p>Grab URL: {overpassQueryForPolygon(imported.polygon)}</p>
    {:else if imported.kind === "error"}
      <p>Error: {imported.msg}</p>
    {:else if imported.kind === "osm2streets import"}
      <p>got XML back! length {imported.osmInput.length}</p>
    {:else if imported.kind === "done"}
      <p>Got the network! {imported.network.toGeojsonPlain()}</p>
    {/if}
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea on:polygon={handlePolygon} />
    </Map>
  </div>
</Layout>
