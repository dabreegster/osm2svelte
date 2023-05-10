import type { GeoJSON, FeatureCollection } from "geojson";
import turfBbox from "@turf/bbox";

// Helper for https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#case based on one property
export function caseHelper(
  getKey: string,
  map: { [name: string]: string },
  backup: string
): any[] {
  let x: any[] = ["case"];
  for (let [key, value] of Object.entries(map)) {
    x.push(["==", ["get", getKey], key]);
    x.push(value);
  }
  x.push(backup);
  return x;
}

export function featureStateToggle(
  key: string,
  falseCase: number,
  trueCase: number
): any[] {
  return [
    "case",
    ["boolean", ["feature-state", key], false],
    trueCase,
    falseCase,
  ];
}

export function emptyGeojson(): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [],
  };
}

// Suitable for passing to map.fitBounds. Work around https://github.com/Turfjs/turf/issues/1807.
export function bbox(gj: GeoJSON): [number, number, number, number] {
  return turfBbox(gj) as [number, number, number, number];
}
