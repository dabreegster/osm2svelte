<script lang="ts">
  import type { JsStreetNetwork } from "osm2streets-js";
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style.js";

  export let network: JsStreetNetwork;

  let gj = JSON.parse(network.toIntersectionMarkingsGeojson());
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

<Layer source="intersection-markings" {gj} {layerStyle} />
