<script lang="ts">
  import type { JsStreetNetwork } from "osm2streets-js";
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style";

  export let network: JsStreetNetwork;

  let gj = JSON.parse(network.toLaneMarkingsGeojson());
  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": caseHelper(
        "type",
        {
          "center line": "yellow",
          "lane separator": "white",
          "lane arrow": "white",
          "buffer edge": "white",
          "buffer stripe": "white",
          "vehicle stop line": "white",
          "bike stop line": "green",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="lane-markings" {gj} {layerStyle} />
