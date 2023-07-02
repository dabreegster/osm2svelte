<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import TopLeftPanel from "../lib/common/TopLeftPanel.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import InteractiveLayers from "../lib/layers/InteractiveLayers.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
  import Popups from "../lib/street_explorer/Popups.svelte";

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
