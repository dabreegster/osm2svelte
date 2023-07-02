// TODO I never added this to package.json, it's a transitive dep!
import type { Feature, Polygon } from "geojson";
import { JsStreetNetwork } from "osm2streets-js";
import { v4 as uuidv4 } from "uuid";
import DynamicConnectedRoads from "./lib/layers/DynamicConnectedRoads.svelte";
import DynamicMovementArrows from "./lib/layers/DynamicMovementArrows.svelte";
import DynamicRoadOrdering from "./lib/layers/DynamicRoadOrdering.svelte";
import { emptyGeojson } from "./style";
import type { LayerSpec } from "./types";

// TODO Maybe this is what's in the store? Right now, derived stuff is in there
export type Imported =
  | { kind: "nothing" }
  | { kind: "error"; msg: string }
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
