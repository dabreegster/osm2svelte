<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { type Imported } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import TopLeftPanel from "../lib/common/TopLeftPanel.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
  import ThickenRoadsMode from "../lib/ThickenRoadsMode.svelte";
  import VectorTileControls from "../lib/VectorTileControls.svelte";
  import { boundaryGJ, map, network } from "../store";

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
    <h1>osm2streets road width tool</h1>
    <AppSwitcher />
    <hr />

    <ImportControls bind:imported />
    <hr />

    {#if $map}
      <ThickenRoadsMode />
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
