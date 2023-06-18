import type { Feature, Polygon } from "geojson";
import type { Map } from "maplibre-gl";
import type { JsStreetNetwork } from "osm2streets-js";
import { writable, type Writable } from "svelte/store";

// Global singletons. If they're non-null, then they're loaded and ready to use
export const map: Writable<Map | null> = writable(null);
export const network: Writable<JsStreetNetwork | null> = writable(null);
export const boundaryGJ: Writable<Feature<Polygon> | null> = writable(null);

export const clickedLane: Writable<Feature<Polygon> | null> = writable(null);
export const hoveredLane: Writable<Feature<Polygon> | null> = writable(null);
export const hoveredIntersection: Writable<Feature<Polygon> | null> =
  writable(null);
export const clickedIntersection: Writable<Feature<Polygon> | null> =
  writable(null);

// TODO Need to unsubscribe
// Unset when the network changes
// TODO It depends how the network changes, though. Editing a road is fine, but changing maps isn't. Maybe have a "current test" identity and listen to that instead
network.subscribe((value) => {
  clickedLane.set(null);
  hoveredLane.set(null);
  hoveredIntersection.set(null);
  clickedIntersection.set(null);
});
