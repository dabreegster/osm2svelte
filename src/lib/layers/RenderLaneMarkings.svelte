<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { network } from "../../store";
  import { caseHelper } from "../../style";
  import Layer from "../common/Layer.svelte";
  import LayerControls from "../common/LayerControls.svelte";

  let gj: GeoJSON | undefined = undefined;
  let show = true;
  $: if ($network) {
    gj = JSON.parse($network.toLaneMarkingsGeojson());
  }

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

{#if gj}
  <Layer source="lane-markings" {gj} {layerStyle} {show} />
{/if}
<LayerControls {gj} name="Lane markings " bind:show />
