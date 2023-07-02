<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { network } from "../../store";
  import { caseHelper } from "../../style";
  import Layer from "../common/Layer.svelte";
  import LayerControls from "../common/LayerControls.svelte";

  let gj: GeoJSON | undefined = undefined;
  let show = true;
  $: if ($network) {
    gj = JSON.parse($network.toIntersectionMarkingsGeojson());
  }

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

{#if gj}
  <Layer source="intersection-markings" {gj} {layerStyle} {show} />
{/if}
<LayerControls {gj} name="Intersection markings" bind:show />
