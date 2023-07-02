<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { mainLayers, type Imported } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  // TODO This is really for controls; should we even use this?
  import LayerGroup from "../lib/common/LayerGroup.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import EditWayControls from "../lib/lane_editor/EditWayControls.svelte";
  import { boundaryGJ, network } from "../store";
  import type { LayerSpec } from "../types";

  let imported: Imported = { kind: "nothing" };
  let layers: LayerSpec[] = [];

  onMount(async () => {
    await init();
  });

  $: {
    if (imported.kind == "done") {
      network.set(imported.network);
      boundaryGJ.set(imported.boundaryGJ);
    }
  }

  $: {
    if ($network && $boundaryGJ) {
      layers = mainLayers($network, $boundaryGJ);
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets lane editor</h1>
    <AppSwitcher />

    <ImportControls bind:imported />

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
      <LayerGroup {layers} showControls={false} />
    </Map>
  </div>
</Layout>
