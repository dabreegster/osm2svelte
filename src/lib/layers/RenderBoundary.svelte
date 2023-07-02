<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { boundaryGJ, map } from "../../store";
  import { bbox } from "../../style";
  import Layer from "../common/Layer.svelte";
  import LayerControls from "../common/LayerControls.svelte";

  let gj: GeoJSON | undefined = undefined;
  let show = true;
  $: if ($boundaryGJ) {
    gj = structuredClone($boundaryGJ);

    // Initially zoom to fit the imported boundary
    $map.fitBounds(bbox(gj), { animate: false, padding: 10 });
  }

  let layerStyle = {
    type: "line",
    paint: {
      "line-color": "blue",
      "line-width": 4,
    },
  };
</script>

{#if gj}
  <Layer source="boundary" {gj} {layerStyle} {show} />
{/if}
<LayerControls {gj} name="Boundary" bind:show />
