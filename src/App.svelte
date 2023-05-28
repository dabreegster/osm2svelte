<script lang="ts">
  // TODO I never added this to package.json, it's a transitive dep!
  import type { Feature, Polygon } from "geojson";
  import { overpassQueryForPolygon } from "./overpass";
  import init, { JsStreetNetwork } from "osm2streets-js";
  import { onMount } from "svelte";
  import { network, boundaryGJ } from "./store";
  import { emptyGeojson } from "./style";
  import type { Imported, LayerSpec } from "./lib/types";
  import { v4 as uuidv4 } from "uuid";

  import Layout from "./lib/Layout.svelte";
  import Map from "./lib/Map.svelte";
  import SelectImportArea from "./lib/SelectImportArea.svelte";
  import Osm2streetsSettings from "./lib/Osm2streetsSettings.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import VectorTileControls from "./lib/VectorTileControls.svelte";
  import LayerGroup from "./lib/LayerGroup.svelte";
  import ImportControls from "./lib/ImportControls.svelte";
  import BuiltinImporter from "./lib/BuiltinImporter.svelte";

  import RenderIntersectionPolygons from "./lib/layers/RenderIntersectionPolygons.svelte";
  import RenderIntersectionMarkings from "./lib/layers/RenderIntersectionMarkings.svelte";
  import RenderLanePolygons from "./lib/layers/RenderLanePolygons.svelte";
  import RenderLaneMarkings from "./lib/layers/RenderLaneMarkings.svelte";
  import RenderBoundary from "./lib/layers/RenderBoundary.svelte";
  import DynamicMovementArrows from "./lib/layers/DynamicMovementArrows.svelte";
  import DynamicConnectedRoads from "./lib/layers/DynamicConnectedRoads.svelte";

  import InfoMode from "./lib/modes/InfoMode.svelte";
  import ThickenRoadsMode from "./lib/modes/ThickenRoadsMode.svelte";
  import RouteProfileMode from "./lib/modes/RouteProfileMode.svelte";

  let imported: Imported = { kind: "nothing" };
  let currentTabLabel: string;

  // TODO When these change, should we automatically re-import?
  let settings;

  let layers: LayerSpec[] = [];

  onMount(async () => {
    await init();
  });

  $: {
    if (imported.kind == "done") {
      network.set(imported.network);
      boundaryGJ.set(imported.boundaryGJ);

      // Set layers
      layers = [
        {
          uuid: uuidv4(),
          label: "Boundary",
          show: true,
          content: RenderBoundary,
          gj: $boundaryGJ,
        },
        {
          uuid: uuidv4(),
          label: "Intersection polygons",
          show: true,
          content: RenderIntersectionPolygons,
          gj: JSON.parse($network.toGeojsonPlain()),
        },
        {
          uuid: uuidv4(),
          label: "Intersection markings",
          show: true,
          content: RenderIntersectionMarkings,
          gj: JSON.parse($network.toIntersectionMarkingsGeojson()),
        },
        {
          uuid: uuidv4(),
          label: "Lane polygons",
          show: true,
          content: RenderLanePolygons,
          gj: JSON.parse($network.toLanePolygonsGeojson()),
        },
        {
          uuid: uuidv4(),
          label: "Lane markings",
          show: true,
          content: RenderLaneMarkings,
          gj: JSON.parse($network.toLaneMarkingsGeojson()),
        },
        {
          uuid: uuidv4(),
          label: "Movement arrows",
          show: true,
          content: DynamicMovementArrows,
          gj: emptyGeojson(),
        },
        {
          uuid: uuidv4(),
          label: "Roads connected to intersection",
          show: true,
          content: DynamicConnectedRoads,
          gj: emptyGeojson(),
        },
      ];
    }
  }

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
        osmInput,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }

  function importOSM(
    boundaryPolygon: Polygon,
    osmXML: string
  ): [JsStreetNetwork, Feature<Polygon>] {
    let gj = {
      type: "Feature",
      geometry: boundaryPolygon,
      properties: {},
    };
    return [new JsStreetNetwork(osmXML, JSON.stringify(gj), settings), gj];
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
      <SelectImportArea on:polygon={handlePolygon} />
      <LayerGroup {layers}>
        <VectorTileControls />
      </LayerGroup>
    </Map>
  </div>
</Layout>
