<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { clickedLane, map } from "../../store";
  import { emptyGeojson } from "../../style";

  let source = "building-hitboxes";
  let layer = `${source}-layer`;
  let gj = emptyGeojson();

  $map.addSource(source, {
    type: "geojson",
    data: gj,
  });
  $map.addLayer({
    id: layer,
    source,
    type: "fill",
    paint: {
      "fill-color": "blue",
    },
  });

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
    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  onDestroy(() => {
    if ($map) {
      if ($map.getLayer(layer)) {
        $map.removeLayer(layer);
      }
      $map.removeSource(source);
    }
  });
</script>

{#if $clickedLane}
  <p>{gj.features.length} buildings onscreen</p>
{:else}
  <p>Click a road</p>
{/if}
