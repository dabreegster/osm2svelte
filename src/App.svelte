<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Polygon } from "geojson";
  import { overpassQueryForPolygon } from "./overpass.js";

  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";

  type Imported =
    | "nothing"
    | { kind: "LoadingOverpass"; polygon: Polygon }
    | { kind: "error"; msg: string }
    | {
        kind: "osm2streets import";
        boundaryPolygon: Polygon;
        osmInput: string;
      };

  let imported: Imported = "nothing";

  async function handlePolygon(e: CustomEvent<Polygon>) {
    let polygon = e.detail;
    imported = { kind: "LoadingOverpass", polygon };

    try {
      let resp = await fetch(overpassQueryForPolygon(polygon));
      let osmInput = await resp.text();
      imported = {
        kind: "osm2streets import",
        boundaryPolygon: polygon,
        osmInput,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>
    {#if imported === "nothing"}
      <p>Use the polygon tool to select an area to import</p>
    {:else if imported.kind === "LoadingOverpass"}
      <p>{JSON.stringify(imported)}</p>
      <p>Grab URL: {overpassQueryForPolygon(imported.polygon)}</p>
    {:else if imported.kind === "error"}
      <p>Error: {imported.msg}</p>
    {:else if imported.kind === "osm2streets import"}
      <p>got XML back! length {imported.osmInput.length}</p>
    {/if}
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea on:polygon={handlePolygon} />
    </Map>
  </div>
</Layout>
