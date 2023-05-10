<script lang="ts">
  import type { Map, GeoJSONSource } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { clickedFeatureStore, mapStore } from "../../store.js";
  import { emptyGeojson } from "../../style";

  let source = "building-hitboxes";
  let layer = `${source}-layer`;
  let gj = emptyGeojson();

  let map: Map;
  mapStore.subscribe((m) => {
    map = m;

    map.addSource(source, {
      type: "geojson",
      data: gj,
    });
    map.addLayer({
      id: layer,
      source: source,
      type: "fill",
      paint: {
        "fill-color": "blue",
      },
    });
  });

  $: {
    gj = emptyGeojson();
    if ($clickedFeatureStore) {
      // Everything onscreen
      for (let feature of map.queryRenderedFeatures()) {
        if (feature.layer.id == "building-3d") {
          gj.features.push(feature);
        }
      }
    }
    (map.getSource(source) as GeoJSONSource).setData(gj);
  }

  onDestroy(() => {
    if (map) {
      if (map.getLayer(layer)) {
        map.removeLayer(layer);
      }
      map.removeSource(source);
    }
  });
</script>

{#if $clickedFeatureStore}
  <p>{gj.features.length} buildings onscreen</p>
{:else}
  <p>Click a road</p>
{/if}
