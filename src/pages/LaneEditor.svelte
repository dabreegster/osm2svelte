<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { type Imported } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import EditWayControls from "../lib/lane_editor/EditWayControls.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
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
    <h1>osm2streets lane editor</h1>
    <AppSwitcher />
    <hr />

    <ImportControls bind:imported />
    <hr />

    <EditWayControls />

    <div>
      <strong>Warnings:</strong>
      <ul>
        <li><strong>This tool is an early experiment</strong></li>
        <li>Don't use this tool without understanding OSM tagging</li>
        <li>Be careful around sidepaths, footways, and dual carriageways</li>
        <li>Don't edit a way that's partly clipped</li>
      </ul>
    </div>
  </div>
  <div slot="main">
    <Map>
      <div style:display="none"><MainLayers /></div>
    </Map>
  </div>
</Layout>
