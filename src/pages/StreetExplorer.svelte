<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { type Imported } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import TopLeftPanel from "../lib/common/TopLeftPanel.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import InteractiveLayers from "../lib/layers/InteractiveLayers.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
  import Popups from "../lib/street_explorer/Popups.svelte";
  import { boundaryGJ, network } from "../store";

  let imported: Imported = { kind: "nothing" };

  onMount(async () => {
    await init();
  });

  $: {
    if (imported.kind == "done") {
      network.set(imported.network);
      boundaryGJ.set(imported.boundaryGJ);
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets Street Explorer</h1>
    <AppSwitcher />
    <hr />

    <ImportControls bind:imported />
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
