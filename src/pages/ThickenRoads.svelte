<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import {
    importPolygon,
    mainLayers,
    type Imported,
    type Settings,
  } from "../import";
  import BuiltinImporter from "../lib/BuiltinImporter.svelte";
  import ImportControls from "../lib/ImportControls.svelte";
  import LayerGroup from "../lib/LayerGroup.svelte";
  import Layout from "../lib/Layout.svelte";
  import Map from "../lib/Map.svelte";
  import Osm2streetsSettings from "../lib/Osm2streetsSettings.svelte";
  import SelectImportArea from "../lib/SelectImportArea.svelte";
  import ThickenRoadsMode from "../lib/ThickenRoadsMode.svelte";
  import VectorTileControls from "../lib/VectorTileControls.svelte";
  import { boundaryGJ, map, network } from "../store";
  import type { LayerSpec } from "../types";

  let imported: Imported = { kind: "nothing" };
  let settings: Settings;
  let layers: LayerSpec[] = [];

  onMount(async () => {
    await init();
  });

  $: {
    if (imported.kind == "done") {
      network.set(imported.network);
      boundaryGJ.set(imported.boundaryGJ);

      layers = mainLayers(imported.network, imported.boundaryGJ);
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets road width tool</h1>

    <Osm2streetsSettings bind:settings />
    <BuiltinImporter bind:imported {settings} />
    <ImportControls {imported} />

    {#if $map}
      <ThickenRoadsMode />
    {/if}
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea
        on:polygon={(e) => importPolygon(e, imported, settings)}
      />
      <LayerGroup {layers}>
        <VectorTileControls />
      </LayerGroup>
    </Map>
  </div>
</Layout>
