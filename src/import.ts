// TODO I never added this to package.json, it's a transitive dep!
import type { Feature, Polygon } from "geojson";
import { JsStreetNetwork } from "osm2streets-js";

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
