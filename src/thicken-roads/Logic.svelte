<script lang="ts">
  import Layer from "osm2streets-web/src/osm2streets-svelte/Layer.svelte";
  import {
    clickedLane,
    map,
  } from "osm2streets-web/src/osm2streets-svelte/store";
  import { emptyGeojson } from "osm2streets-web/src/osm2streets-svelte/utils";

  let gj = emptyGeojson();
  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
    },
  };

  $: {
    gj = emptyGeojson();
    if ($clickedLane) {
      // Everything onscreen
      for (let feature of $map.queryRenderedFeatures()) {
        if (feature.layer.id == "building-3d") {
          gj.features.push(feature);
        }
      }
    }
    gj = gj;
  }
</script>

{#if $clickedLane}
  <p>{gj.features.length} buildings onscreen</p>
{:else}
  <p>Click a road</p>
{/if}

<Layer source="building-hitboxes" {gj} {layerStyle} />
