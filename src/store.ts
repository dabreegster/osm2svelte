import { writable, type Writable } from "svelte/store";
import type { Map } from "maplibre-gl";

// A global singleton, containing a loaded map
export const map: Writable<Map | null> = writable(null);

// Plumbing props is hard because of the Tabs indirection
export const clickedFeatureStore = writable(null);
