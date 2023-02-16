import { writable } from "svelte/store";

export const mapStore = writable(null);

// Plumbing props is hard because of the Tabs indirection
export const clickedFeatureStore = writable(null);
