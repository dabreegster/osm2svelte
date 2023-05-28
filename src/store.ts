import { writable, type Writable } from "svelte/store";
import type { Map } from "maplibre-gl";
import type { JsStreetNetwork } from "osm2streets-js";
import type { Feature, Polygon } from "geojson";

// A global singleton, containing a loaded map
export const map: Writable<Map | null> = writable(null);

export const clickedFeatureStore = writable(null);
export const network: Writable<JsStreetNetwork | null> = writable(null);
export const boundaryGJ: Writable<Feature<Polygon> | null> = writable(null);
