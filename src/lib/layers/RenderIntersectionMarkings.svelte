<script lang="ts">
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style";
  import { network } from "../../store";

  export let show: boolean;
  export let downloadable: boolean;

  let gj = JSON.parse($network.toIntersectionMarkingsGeojson());
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
