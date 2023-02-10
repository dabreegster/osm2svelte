<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Polygon } from "geojson";
  import { overpassQueryForPolygon } from "./overpass.js";

  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";

  type Imported = "nothing" | LoadingOverpass;
  type LoadingOverpass = {
    kind: "LoadingOverpass";
    polygon: Polygon;
  };

  let imported: Imported = "nothing";

  function handlePolygon(e: CustomEvent<Polygon>) {
    imported = { kind: "LoadingOverpass", polygon: e.detail };
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
    {/if}
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea on:polygon={handlePolygon} />
    </Map>
  </div>
</Layout>
