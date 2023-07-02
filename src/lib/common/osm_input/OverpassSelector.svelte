<script lang="ts">
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import type { Polygon } from "geojson";
  import type { IControl, Map } from "maplibre-gl";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
  import type { OsmSelection } from "./types";

  export let map: Map;

  const dispatch = createEventDispatcher<{
    load: OsmSelection;
    resetToNone: void;
    error: string;
  }>();

  let drawControls: MapboxDraw;

  onMount(async () => {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
      },
    });
    // Hack around TS errors that don't matter at runtime
    map.addControl(drawControls as unknown as IControl);

    map.on("draw.create", async (e) => {
      let boundaryGj = e.features[0];
      drawControls.deleteAll();

      try {
        let resp = await fetch(overpassQueryForPolygon(boundaryGj));
        let osmXML = await resp.text();

        dispatch("load", {
          boundaryGj,
          osmXML,
        });
      } catch (err) {
        dispatch("error", err.toString());
      }
    });
  });

  onDestroy(() => {
    map.removeControl(drawControls as unknown as IControl);
  });

  function overpassQueryForPolygon(polygon: Polygon): string {
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
</script>

<style>
  /* TODO: These really do belong here, but getting a warning */

  :global(.mapboxgl-ctrl-group > button) {
    width: 60px;
    height: 60px;
  }

  :global(.mapbox-gl-draw_polygon) {
    background-size: 50px;
  }
</style>
