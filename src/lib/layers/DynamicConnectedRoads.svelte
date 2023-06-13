<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { hoveredIntersection, network } from "../../store";
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
    if ($hoveredIntersection) {
      gj = JSON.parse(
        $network!.debugRoadsConnectedToIntersectionGeojson(
          $hoveredIntersection.properties.id
        )
      );
    }
  }
</script>

{#if gj.features.length}
  <Layer source="connected-roads" {gj} {layerStyle} bind:show />
{/if}
