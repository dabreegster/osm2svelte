<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { hoveredLane, network } from "../../store";
  import { emptyGeojson } from "../../style";
  import Layer from "../common/Layer.svelte";

  export let show: boolean;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };

  let gj: FeatureCollection = emptyGeojson();

  $: {
    // TODO Layer can't update GJ data; we have to forcibly recreate the whole Layer
    gj = emptyGeojson();
    if ($hoveredLane) {
      let props = $hoveredLane.properties;
      gj = JSON.parse(
        $network!.debugMovementsFromLaneGeojson(props.road, props.index)
      );
    }
  }
</script>

{#if gj.features.length}
  <Layer source="movements" {gj} {layerStyle} bind:show />
{/if}
