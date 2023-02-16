<script lang="ts">
  import { getContext, onMount, onDestroy } from "svelte";

  const { getMap } = getContext("map");
  let map = getMap();

  let source = "hover-basemap";
  let layer = "hover-basemap-layer";

  onMount(() => {
    map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });
    map.addLayer({
      id: layer,
      source: source,
      type: "fill",
      paint: {
        "fill-color": "red",
      },
    });
  });

  map.on("mousemove", (e) => {
    let gj = emptyGeojson();
    for (let feature of map.queryRenderedFeatures(e.point)) {
      if (feature.layer.id == "building-3d") {
        gj.features.push(feature);
      }
    }
    map.getSource(source).setData(gj);
  });

  onDestroy(() => {
    if (map.getLayer(layer)) {
      map.removeLayer(layer);
    }
    map.removeSource(source);
  });

  function emptyGeojson() {
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
</script>
