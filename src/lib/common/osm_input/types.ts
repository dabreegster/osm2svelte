import type { Feature, Polygon } from "geojson";

// This component provides osm.xml data and a boundary GeoJSON, either from //
// Overpass or a built-in file.
export interface OsmSelection {
  // Undefined for boundaries from Overpass
  testCase: string | undefined;
  boundaryGj: Feature<Polygon>;
  osmXml: string;
}
