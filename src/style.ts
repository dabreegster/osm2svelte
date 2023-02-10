// Helper for https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#case based on one property
export function caseHelper(
  getKey: string,
  map: Map<string, string>,
  backup: string
): string[] {
  let x = ["case"];
  for (let [key, value] of Object.entries(map)) {
    x.push(["==", ["get", getKey], key]);
    x.push(value);
  }
  x.push(backup);
  return x;
}
