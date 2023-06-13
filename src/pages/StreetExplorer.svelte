<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Feature, Polygon } from "geojson";
  import init, { JsStreetNetwork } from "osm2streets-js";
  import { onMount } from "svelte";
  import { network, boundaryGJ } from "../store";
  import type { Imported, LayerSpec, Settings } from "../lib/types";

  import { allLayers, importPolygon } from "../import";
  import Layout from "../lib/Layout.svelte";
  import Map from "../lib/Map.svelte";
  import SelectImportArea from "../lib/SelectImportArea.svelte";
  import Osm2streetsSettings from "../lib/Osm2streetsSettings.svelte";
  import Tabs from "../lib/Tabs.svelte";
  import VectorTileControls from "../lib/VectorTileControls.svelte";
  import LayerGroup from "../lib/LayerGroup.svelte";
  import SequentialLayerGroup from "../lib/SequentialLayerGroup.svelte";
  import ImportControls from "../lib/ImportControls.svelte";
  import BuiltinImporter from "../lib/BuiltinImporter.svelte";

  import InfoMode from "../lib/modes/InfoMode.svelte";
  import ThickenRoadsMode from "../lib/modes/ThickenRoadsMode.svelte";
  import RouteProfileMode from "../lib/modes/RouteProfileMode.svelte";

  let imported: Imported = { kind: "nothing" };
  let currentTabLabel: string;

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

      layers = allLayers(imported.network, imported.boundaryGJ);
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>

    <Osm2streetsSettings bind:settings />
    <BuiltinImporter bind:imported {settings} />
    <ImportControls {imported} />

    <Tabs
      tabs={[
        { label: "Info", content: InfoMode },
        { label: "Thicken roads", content: ThickenRoadsMode },
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
        <VectorTileControls />
      </LayerGroup>
    </Map>
  </div>
</Layout>
