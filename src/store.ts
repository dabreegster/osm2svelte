import type { Feature, Polygon } from "geojson";
import type { Map } from "maplibre-gl";
import type { JsStreetNetwork } from "osm2streets-js";
import { writable, type Writable } from "svelte/store";

// A global singleton, containing a loaded map
export const map: Writable<Map | null> = writable(null);

export const clickedLane = writable(null);
export const hoveredLane = writable(null);
export const hoveredIntersection = writable(null);
export const network: Writable<JsStreetNetwork | null> = writable(null);
export const boundaryGJ: Writable<Feature<Polygon> | null> = writable(null);
