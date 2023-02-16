<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Feature, Polygon } from "geojson";
  import { overpassQueryForPolygon } from "./overpass.js";
  import init, { JsStreetNetwork } from "osm2streets-js";
  import { onMount } from "svelte";

  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";
  import Osm2streetsSettings from "./lib/Osm2streetsSettings.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import VectorTileControls from "./lib/VectorTileControls.svelte";
  import HoverBasemap from "./lib/HoverBasemap.svelte";

  import RenderIntersectionPolygons from "./lib/layers/RenderIntersectionPolygons.svelte";
  import RenderIntersectionMarkings from "./lib/layers/RenderIntersectionMarkings.svelte";
  import RenderLanePolygons from "./lib/layers/RenderLanePolygons.svelte";
  import RenderLaneMarkings from "./lib/layers/RenderLaneMarkings.svelte";
  import RenderBoundary from "./lib/layers/RenderBoundary.svelte";

  import InfoMode from "./lib/modes/InfoMode.svelte";
  import ThickenRoadsMode from "./lib/modes/ThickenRoadsMode.svelte";
  import EditLanesMode from "./lib/modes/EditLanesMode.svelte";

  import sampleOsmInputUrl from "../assets/input.osm?url";
  import sampleBoundaryGeojson from "../assets/boundary.json?raw";

  type Imported =
    | { kind: "nothing" }
    | { kind: "LoadingOverpass"; polygon: Polygon }
    | { kind: "error"; msg: string }
    | {
        kind: "osm2streets import";
        boundaryPolygon: Polygon;
        osmInput: string;
      }
    | {
        kind: "done";
        boundaryGJ: Feature;
        network: JsStreetNetwork;
      };

  let imported: Imported = { kind: "nothing" };

  // TODO When these change, should we automatically re-import?
  let settings;

  onMount(async () => {
    await init();
  });

  async function handlePolygon(e: CustomEvent<Polygon>) {
    let polygon = e.detail;
    imported = { kind: "LoadingOverpass", polygon };

    try {
      let resp = await fetch(overpassQueryForPolygon(polygon));
      let osmInput = await resp.text();
      imported = {
        kind: "osm2streets import",
        // TODO Maybe we don't need to plumb this here
        boundaryPolygon: polygon,
        osmInput,
      };

      let [network, boundaryGJ] = importOSM(polygon, osmInput);
      imported = {
        kind: "done",
        boundaryGJ,
        network,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }

  function importOSM(
    boundaryPolygon: Polygon,
    osmXML: string
  ): [JsStreetNetwork, Feature] {
    let gj = {
      type: "Feature",
      geometry: boundaryPolygon,
      properties: {},
    };
    return [new JsStreetNetwork(osmXML, JSON.stringify(gj), settings), gj];
  }

  async function importSampleArea() {
    let polygon = JSON.parse(sampleBoundaryGeojson);

    // TODO Go through all the same states?
    try {
      let resp = await fetch(sampleOsmInputUrl);
      let osmInput = await resp.text();
      let [network, boundaryGJ] = importOSM(polygon, osmInput);

      imported = {
        kind: "done",
        boundaryGJ,
        network,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>osm2streets + Svelte</h1>

    <Osm2streetsSettings bind:settings />
    <button type="button" on:click={importSampleArea}
      >Import built-in sample area</button
    >
    {#if imported.kind === "nothing"}
      <p>Use the polygon tool to select an area to import</p>
    {:else if imported.kind === "LoadingOverpass"}
      <p>Loading from Overpass...</p>
    {:else if imported.kind === "error"}
      <p>Error: {imported.msg}</p>
    {:else if imported.kind === "osm2streets import"}
      <p>Importing with osm2streets...</p>
    {:else if imported.kind === "done"}
      <p>Success!</p>
    {/if}

    <Tabs
      tabs={[
        { label: "Info", content: InfoMode },
        { label: "Thicken roads", content: ThickenRoadsMode },
        { label: "Edit lanes", content: EditLanesMode },
      ]}
    />

    <VectorTileControls />
  </div>
  <div slot="main">
    <Map>
      <SelectImportArea on:polygon={handlePolygon} />
      {#if imported.kind === "done"}
        <RenderBoundary gj={imported.boundaryGJ} />

        <RenderIntersectionPolygons network={imported.network} />
        <RenderIntersectionMarkings network={imported.network} />

        <RenderLanePolygons network={imported.network} />
        <RenderLaneMarkings network={imported.network} />
      {/if}
      <HoverBasemap />
    </Map>
  </div>
</Layout>
