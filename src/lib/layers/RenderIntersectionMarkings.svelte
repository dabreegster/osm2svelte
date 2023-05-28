<script lang="ts">
  import type { GeoJSON } from "geojson";
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style";

  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": caseHelper(
        "type",
        {
          "sidewalk corner": "#CCCCCC",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer
  source="intersection-markings"
  {gj}
  {layerStyle}
  bind:show
  {downloadable}
/>
