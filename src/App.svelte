<script lang="ts">
  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea />
    </Map>
  </div>
</Layout>
