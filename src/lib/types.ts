import type { Feature, Polygon, GeoJSON } from "geojson";
import type { ComponentType } from "svelte";
import type { JsStreetNetwork } from "osm2streets-js";

export interface LayerSpec {
  label: string;
  show: boolean;
  content: ComponentType;
  gj: GeoJSON;
}

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
