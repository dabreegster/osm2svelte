<script lang="ts">
  import type { GeoJSON } from "geojson";
  import Layer from "../Layer.svelte";
  import { map, network, hoveredFeatureStore } from "../../store";
  import { emptyGeojson } from "../../style";

  // Ignore this, actually
  export let gj: GeoJSON;
  export let show: boolean;
  // Ignore
  export let downloadable: boolean;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };

  $: {
    // TODO Layer can't update GJ data; we have to forcibly recreate the whole Layer
    gj = emptyGeojson();
    if ($hoveredFeatureStore) {
      let props = $hoveredFeatureStore.properties;
      gj = JSON.parse(
        $network.debugMovementsFromLaneGeojson(props.road, props.index)
      );
    }
  }
</script>

{#if gj.features.length}
  <Layer source="movements" {gj} {layerStyle} bind:show downloadable={false} />
{/if}
