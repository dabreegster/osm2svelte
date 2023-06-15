import type { Feature, Polygon } from "geojson";
import type { Map } from "maplibre-gl";
import type { JsStreetNetwork } from "osm2streets-js";
import { writable, type Writable } from "svelte/store";

// Global singletons. If they're non-null, then they're loaded and ready to use
export const map: Writable<Map | null> = writable(null);
export const network: Writable<JsStreetNetwork | null> = writable(null);
export const boundaryGJ: Writable<Feature<Polygon> | null> = writable(null);

// Array and object properties won't show up here
export const clickedLane: Writable<Feature | null> = writable(null);
export const hoveredLane: Writable<Feature | null> = writable(null);
export const hoveredIntersection: Writable<Feature | null> = writable(null);
