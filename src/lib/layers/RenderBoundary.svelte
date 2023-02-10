<script lang="ts">
  import Layer from "../Layer.svelte";
  import type { Feature } from "geojson";

  export let gj: Feature;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };
</script>

<Layer source="boundary" {gj} {layerStyle} />
