<script lang="ts">
  // TODO Maybe combine with Layer and make hoverable/clickable optional. For
  // now, simpler to experiment separately.
  import { getContext, onMount, onDestroy } from "svelte";
  import type { GeoJSON, Feature } from "geojson";
  import type { MapMouseEvent, MapLayerMouseEvent } from "maplibre-gl";

  const { getMap } = getContext("map");
  let map = getMap();

  // Input
  export let source: string;
  export let show = true;
  export let gj: GeoJSON;
  // The caller should do something with ["feature-state", "hover"] and ["feature-state", "clicked"]
  export let layerStyle;

  // Output
  export let hoveredFeature: Feature | undefined;
  export let clickedFeature: Feature | undefined;

  // An ID assigned by MapLibre
  let hoverId: number | undefined;
  let clickedId: number | undefined;

  let layer = `${source}-layer`;

  onMount(() => {
    map.addSource(source, {
      type: "geojson",
      data: gj,
      generateId: true,
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

    // Configure hovering
    map.on("mousemove", layer, (e: MapLayerMouseEvent) => {
      if (e.features.length > 0 && hoverId != e.features[0].id) {
        unhover();
        hoveredFeature = e.features[0];
        hoverId = e.features[0].id;
        map.setFeatureState({ source, id: hoverId }, { hover: true });
      }
    });
    map.on("mouseleave", layer, () => {
      unhover();
      hoveredFeature = undefined;
      hoverId = undefined;
    });

    // Configure clicking
    map.on("click", (e: MapMouseEvent) => {
      if (clickedFeature !== undefined) {
        map.setFeatureState({ source, id: clickedId }, { clicked: false });
      }

      let features = map.queryRenderedFeatures(e.point, { layers: [layer] });
      if (features.length == 1) {
        clickedFeature = features[0];
        clickedId = features[0].id;
        map.setFeatureState({ source, id: clickedId }, { clicked: true });
      } else {
        clickedFeature = undefined;
        clickedId = undefined;
      }
    });
  });

  onDestroy(() => {
    unhover();
    if (map.getLayer(layer)) {
      map.removeLayer(layer);
    }
    map.removeSource(source);
  });

  // Show/hide
  $: {
    if (map.getLayer(layer)) {
      map.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
    }
  }

  function unhover() {
    if (hoverId !== undefined) {
      map.setFeatureState({ source, id: hoverId }, { hover: false });
    }
  }
</script>
