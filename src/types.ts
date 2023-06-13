import type { GeoJSON } from "geojson";
import type { ComponentType } from "svelte";

export interface LayerSpec {
  uuid: string;
  label: string;
  show: boolean;
  content: ComponentType;
  gj: GeoJSON;
}
