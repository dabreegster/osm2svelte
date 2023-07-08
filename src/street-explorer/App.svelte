<script lang="ts">
  import init from "osm2streets-js";
  import ImportControls from "osm2streets-svelte/src/import/ImportControls.svelte";
  import InteractiveLayers from "osm2streets-svelte/src/layers/InteractiveLayers.svelte";
  import MainLayers from "osm2streets-svelte/src/layers/MainLayers.svelte";
  import Layout from "osm2streets-svelte/src/Layout.svelte";
  import Map from "osm2streets-svelte/src/Map.svelte";
  import TopLeftPanel from "osm2streets-svelte/src/TopLeftPanel.svelte";
  import { onMount } from "svelte";
  import AppSwitcher from "../AppSwitcher.svelte";
  import Popups from "./Popups.svelte";

  onMount(async () => {
    await init();
  });
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets Street Explorer</h1>
    <AppSwitcher />
    <hr />

    <ImportControls />
  </div>
  <div slot="main">
    <Map>
      <TopLeftPanel>
        <MainLayers />
        <hr />
        <InteractiveLayers />
      </TopLeftPanel>
      <Popups />
    </Map>
  </div>
</Layout>
