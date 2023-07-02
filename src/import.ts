// TODO I never added this to package.json, it's a transitive dep!
import type { Feature, Polygon } from "geojson";
import { JsStreetNetwork } from "osm2streets-js";
import { v4 as uuidv4 } from "uuid";
import DynamicConnectedRoads from "./lib/layers/DynamicConnectedRoads.svelte";
import DynamicMovementArrows from "./lib/layers/DynamicMovementArrows.svelte";
import DynamicRoadOrdering from "./lib/layers/DynamicRoadOrdering.svelte";
import RenderBoundary from "./lib/layers/RenderBoundary.svelte";
import RenderIntersectionMarkings from "./lib/layers/RenderIntersectionMarkings.svelte";
import RenderIntersectionPolygons from "./lib/layers/RenderIntersectionPolygons.svelte";
import RenderLaneMarkings from "./lib/layers/RenderLaneMarkings.svelte";
import RenderLanePolygons from "./lib/layers/RenderLanePolygons.svelte";
import { emptyGeojson } from "./style";
import type { LayerSpec } from "./types";

// TODO Maybe this is what's in the store? Right now, derived stuff is in there
export type Imported =
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
      boundaryGJ: Feature<Polygon>;
      osmInput: string;
      network: JsStreetNetwork;
    };

export interface Settings {
  debug_each_step: boolean;
  dual_carriageway_experiment: boolean;
  sidepath_zipping_experiment: boolean;
  inferred_sidewalks: boolean;
  osm2lanes: boolean;
}

export function mainLayers(
  network: JsStreetNetwork,
  boundaryGJ: Feature<Polygon>
): LayerSpec[] {
  return [
    {
      uuid: uuidv4(),
      label: "Boundary",
      show: true,
      content: RenderBoundary,
      gj: boundaryGJ,
    },
    {
      uuid: uuidv4(),
      label: "Intersection polygons",
      show: true,
      content: RenderIntersectionPolygons,
      gj: JSON.parse(network.toGeojsonPlain()),
    },
    {
      uuid: uuidv4(),
      label: "Intersection markings",
      show: true,
      content: RenderIntersectionMarkings,
      gj: JSON.parse(network.toIntersectionMarkingsGeojson()),
    },
    {
      uuid: uuidv4(),
      label: "Lane polygons",
      show: true,
      content: RenderLanePolygons,
      gj: JSON.parse(network.toLanePolygonsGeojson()),
    },
    {
      uuid: uuidv4(),
      label: "Lane markings",
      show: true,
      content: RenderLaneMarkings,
      gj: JSON.parse(network.toLaneMarkingsGeojson()),
    },
  ];

  // TODO Some bizarre syntax error
  /*debugLayers = debugSteps.map((step) => {
          uuid: uuidv4(),
          label: `${step.getLabel()}: Intersection polygons`,
          show: true,
          content: RenderIntersectionPolygons,
          gj: JSON.parse(step.getNetwork().toGeojsonPlain()),
      });
      debugLayers = [];
      for (let step of network.getDebugSteps()) {
        debugLayers.push({
          uuid: uuidv4(),
          label: `${step.getLabel()}: Intersection polygons`,
          show: true,
          content: RenderIntersectionPolygons,
          gj: JSON.parse(step.getNetwork().toGeojsonPlain()),
        });
      }*/
}

export function interactiveLayers(network: JsStreetNetwork): LayerSpec[] {
  return [
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
    {
      uuid: uuidv4(),
      label: "Clockwise ordering of roads",
      show: false,
      content: DynamicRoadOrdering,
      gj: emptyGeojson(),
    },
  ];
}

export async function importPolygon(
  e: CustomEvent<Polygon>,
  imported: Imported,
  settings: Settings
) {
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

    let [network, boundaryGJ] = importOSM(polygon, osmInput, settings);
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
  osmXML: string,
  settings: Settings
): [JsStreetNetwork, Feature<Polygon>] {
  let gj: Feature<Polygon> = {
    type: "Feature",
    geometry: boundaryPolygon,
    properties: {},
  };
  return [new JsStreetNetwork(osmXML, JSON.stringify(gj), settings), gj];
}
