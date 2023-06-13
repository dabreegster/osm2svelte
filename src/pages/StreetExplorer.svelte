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
  import LayerGroup from "../lib/common/LayerGroup.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import Map from "../lib/common/Map.svelte";
  import SequentialLayerGroup from "../lib/common/SequentialLayerGroup.svelte";
  import BuiltinImporter from "../lib/import/BuiltinImporter.svelte";
  import ImportControls from "../lib/import/ImportControls.svelte";
  import Osm2streetsSettings from "../lib/import/Osm2streetsSettings.svelte";
  import SelectImportArea from "../lib/import/SelectImportArea.svelte";
  import InfoMode from "../lib/modes/InfoMode.svelte";
  import RouteProfileMode from "../lib/modes/RouteProfileMode.svelte";
  import Tabs from "../lib/Tabs.svelte";
  import { boundaryGJ, network } from "../store";
  import type { LayerSpec } from "../types";

  let imported: Imported = { kind: "nothing" };
  let settings: Settings;
  let layers: LayerSpec[] = [];
  let debugLayers: LayerSpec[] = [];

  let currentTabLabel: string;

  onMount(async () => {
    await init();
  });

  $: {
    if (imported.kind == "done") {
      network.set(imported.network);
      boundaryGJ.set(imported.boundaryGJ);

      layers = mainLayers(imported.network, imported.boundaryGJ).concat(
        interactiveLayers(imported.network)
      );
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets Street Explorer</h1>

    <Osm2streetsSettings bind:settings />
    <BuiltinImporter bind:imported {settings} />
    <ImportControls {imported} />

    <Tabs
      tabs={[
        { label: "Info", content: InfoMode },
        { label: "Route profiles", content: RouteProfileMode },
      ]}
      bind:currentTabLabel
    />
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea
        on:polygon={(e) => importPolygon(e, imported, settings)}
      />
      <LayerGroup {layers}>
        <SequentialLayerGroup layers={debugLayers} />
      </LayerGroup>
    </Map>
  </div>
</Layout>
