<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { interactiveLayers, type Imported } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import LayerGroup from "../lib/common/LayerGroup.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import SequentialLayerGroup from "../lib/common/SequentialLayerGroup.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import MainLayers from "../lib/layers/MainLayers.svelte";
  import Popups from "../lib/street_explorer/Popups.svelte";
  import { boundaryGJ, network } from "../store";
  import type { LayerSpec } from "../types";

  let imported: Imported = { kind: "nothing" };
  let layers: LayerSpec[] = [];
  let debugLayers: LayerSpec[] = [];

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
      layers = interactiveLayers($network);
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
      <LayerGroup {layers}>
        <MainLayers />
        <SequentialLayerGroup layers={debugLayers} />
      </LayerGroup>
      <Popups />
    </Map>
  </div>
</Layout>
