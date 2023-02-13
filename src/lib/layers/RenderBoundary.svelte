<script lang="ts">
  import { getContext } from "svelte";
  import Layer from "../Layer.svelte";
  import type { Feature } from "geojson";
  import bbox from "@turf/bbox";

  export let gj: Feature;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };

  // Initially zoom to fit the imported boundary
  const { getMap } = getContext("map");
  let map = getMap();
  map.fitBounds(bbox(gj), { animate: false, padding: 200 });
</script>

<Layer source="boundary" {gj} {layerStyle} />
