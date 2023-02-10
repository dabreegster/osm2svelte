import type { Polygon } from "geojson";

export function overpassQueryForPolygon(polygon: Polygon): string {
  // Construct a query to extract all XML data in the polygon clip. See
  // https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL
  let filter = 'poly:"';
  for (let [lng, lat] of polygon.coordinates[0]) {
    filter += `${lat} ${lng} `;
  }
  filter = filter.slice(0, -1) + '"';
  let query = `(nwr(${filter}); node(w)->.x; <;); out meta;`;
  return `https://overpass-api.de/api/interpreter?data=${query}`;
}
