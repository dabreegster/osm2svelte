<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import AppSwitcher from "../AppSwitcher.svelte";
  import ImportControls from "../osm2streets-svelte/import/ImportControls.svelte";
  import MainLayers from "../osm2streets-svelte/layers/MainLayers.svelte";
  import Layout from "../osm2streets-svelte/Layout.svelte";
  import Map from "../osm2streets-svelte/Map.svelte";
  import { map } from "../osm2streets-svelte/store";
  import TopLeftPanel from "../osm2streets-svelte/TopLeftPanel.svelte";
  import Logic from "./Logic.svelte";
  import VectorTileControls from "./VectorTileControls.svelte";

  onMount(async () => {
    await init();
  });
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets road width tool</h1>
    <AppSwitcher />
    <hr />

    <ImportControls />
    <hr />

    {#if $map}
      <Logic />
    {/if}
  </div>
  <div slot="main">
    <Map>
      <TopLeftPanel>
        <MainLayers />
        <hr />
        <VectorTileControls />
      </TopLeftPanel>
    </Map>
  </div>
</Layout>
