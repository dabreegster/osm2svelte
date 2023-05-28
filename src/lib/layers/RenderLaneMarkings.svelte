<script lang="ts">
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style";
  import { network } from "../../store";

  export let show: boolean;
  export let downloadable: boolean;

  let gj = JSON.parse($network.toLaneMarkingsGeojson());
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

<Layer source="lane-markings" {gj} {layerStyle} bind:show {downloadable} />
