<script lang="ts">
  import init from "osm2streets-js";
  import ImportControls from "osm2streets-svelte/src/import/ImportControls.svelte";
  import MainLayers from "osm2streets-svelte/src/layers/MainLayers.svelte";
  import Layout from "osm2streets-svelte/src/Layout.svelte";
  import Map from "osm2streets-svelte/src/Map.svelte";
  import { network } from "osm2streets-svelte/src/store";
  import TopLeftPanel from "osm2streets-svelte/src/TopLeftPanel.svelte";
  import { onMount } from "svelte";
  import AppSwitcher from "../AppSwitcher.svelte";
  import Logic from "./Logic.svelte";

  onMount(async () => {
    await init();
  });
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets route profile tool</h1>
    <AppSwitcher />
    <hr />

    <ImportControls />
    <hr />

    {#if $network}
      <Logic />
    {/if}
  </div>
  <div slot="main">
    <Map>
      <TopLeftPanel>
        <MainLayers />
      </TopLeftPanel>
    </Map>
  </div>
</Layout>
