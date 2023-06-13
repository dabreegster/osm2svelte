<script lang="ts">
  import init from "osm2streets-js";
  import { onMount } from "svelte";
  import { importPolygon, mainLayers, type Imported } from "../import";
  import BuiltinImporter from "../lib/BuiltinImporter.svelte";
  import ImportControls from "../lib/ImportControls.svelte";
  import LayerGroup from "../lib/LayerGroup.svelte";
  import Layout from "../lib/Layout.svelte";
  import Map from "../lib/Map.svelte";
  import SelectImportArea from "../lib/SelectImportArea.svelte";
  import { boundaryGJ, network } from "../store";
  import type { LayerSpec } from "../types";

  let settings = {
    debug_each_step: false,
    dual_carriageway_experiment: false,
    sidepath_zipping_experiment: false,
    inferred_sidewalks: false,
    osm2lanes: false,
  };

  let imported: Imported = { kind: "nothing" };
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
    <h1>osm2streets lane editor</h1>

    <BuiltinImporter bind:imported {settings} />
    <ImportControls {imported} />

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
      <SelectImportArea
        on:polygon={(e) => importPolygon(e, imported, settings)}
      />
      <LayerGroup {layers} showControls={false} />
    </Map>
  </div>
</Layout>
