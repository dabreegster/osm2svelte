<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import TopLeftPanel from "../lib/common/TopLeftPanel.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
  import RouteProfileMode from "../lib/RouteProfileMode.svelte";
  import { network } from "../store";

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
      <RouteProfileMode />
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
