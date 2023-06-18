<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import {
    importPolygon,
    interactiveLayers,
    mainLayers,
    type Imported,
    type Settings,
  } from "../import";
  import AppSwitcher from "../lib/common/AppSwitcher.svelte";
  import LayerGroup from "../lib/common/LayerGroup.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import SequentialLayerGroup from "../lib/common/SequentialLayerGroup.svelte";
  import BuiltinImporter from "../lib/import/BuiltinImporter.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import Osm2streetsSettings from "../lib/import/Osm2streetsSettings.svelte";
  import SelectImportArea from "../lib/import/SelectImportArea.svelte";
  import Popups from "../lib/street_explorer/Popups.svelte";
  import { boundaryGJ, network } from "../store";
  import type { LayerSpec } from "../types";

  let imported: Imported = { kind: "nothing" };
  let settings: Settings;
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
      layers = mainLayers($network, $boundaryGJ).concat(
        interactiveLayers($network)
      );
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets Street Explorer</h1>
    <AppSwitcher />

    <Osm2streetsSettings bind:settings />
    <BuiltinImporter bind:imported {settings} />
    <ImportControls {imported} />
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea
        on:polygon={(e) => importPolygon(e, imported, settings)}
      />
      <LayerGroup {layers}>
        <SequentialLayerGroup layers={debugLayers} />
      </LayerGroup>
      <Popups />
    </Map>
  </div>
</Layout>
