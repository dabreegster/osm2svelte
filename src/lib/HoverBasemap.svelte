<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import type { MapMouseEvent } from "maplibre-gl";
  import { onMount, onDestroy } from "svelte";
  import { emptyGeojson } from "../style";
  import { map } from "../store";

  let source = "hover-basemap";
  let layer = "hover-basemap-layer";

  onMount(() => {
    $map.addSource(source, {
      type: "geojson",
      data: emptyGeojson(),
    });
    $map.addLayer({
      id: layer,
      source: source,
      type: "fill",
      paint: {
        "fill-color": "red",
      },
    });
  });

  $map.on("mousemove", onMouseMove);

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);

    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    $map.removeSource(source);
  });

  function onMouseMove(e: MapMouseEvent) {
    let gj = emptyGeojson();
    for (let feature of $map.queryRenderedFeatures(e.point)) {
      if (feature.layer.id == "building-3d") {
        gj.features.push(feature);
      }
    }
    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }
</script>
