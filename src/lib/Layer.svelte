<script lang="ts">
  import { getContext, onMount, onDestroy } from "svelte";
  import type { GeoJSON } from "geojson";

  const { getMap } = getContext("map");
  let map = getMap();

  // Input
  export let source: string;
  export let show = true;
  export let gj: GeoJSON;
  export let layerStyle;

  let layer = `${source}-layer`;

  onMount(() => {
    map.addSource(source, {
      type: "geojson",
      data: gj,
    });
    map.addLayer({
      id: layer,
      source,
      ...layerStyle,
    });
    // We may need to hide initially
    if (!show) {
      map.setLayoutProperty(layer, "visibility", "none");
    }
  });

  onDestroy(() => {
    if (map.getLayer(layer)) {
      map.removeLayer(layer);
    }
    map.removeSource(source);
  });

  $: {
    if (map.getLayer(layer)) {
      map.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
    }
  }
</script>
