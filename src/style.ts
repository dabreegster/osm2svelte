import type { FeatureCollection } from "geojson";

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
