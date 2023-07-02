<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { hoveredLane, network } from "../../store";
  import Layer from "../common/Layer.svelte";
  import LayerControls from "../common/LayerControls.svelte";

  let gj: GeoJSON | undefined = undefined;
  let show = true;
  $: if ($network && $hoveredLane) {
    let props = $hoveredLane.properties;
    gj = JSON.parse(
      $network!.debugMovementsFromLaneGeojson(props.road, props.index)
    );
  } else {
    gj = undefined;
  }

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };
</script>

{#if gj}
  <Layer source="movements" {gj} {layerStyle} {show} />
  <LayerControls {gj} name="Movement arrows" bind:show downloadable={false} />
{/if}
