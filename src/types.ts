import type { Feature, GeoJSON, Polygon } from "geojson";
import type { JsStreetNetwork } from "osm2streets-js";
import type { ComponentType } from "svelte";

export interface LayerSpec {
  uuid: string;
  label: string;
  show: boolean;
  content: ComponentType;
  gj: GeoJSON;
}
