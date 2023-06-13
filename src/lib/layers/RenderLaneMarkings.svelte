<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { caseHelper } from "../../style";
  import Layer from "../common/Layer.svelte";

  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

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
