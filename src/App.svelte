<script lang="ts">
  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>
  </div>
  <div slot="main">
    <Map />
  </div>
</Layout>
