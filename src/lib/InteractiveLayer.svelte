<script lang="ts">
  // TODO Maybe combine with Layer and make hoverable/clickable optional. For
  // now, simpler to experiment separately.
  import { onMount, onDestroy } from "svelte";
  import type { GeoJSON, Feature } from "geojson";
  import type { MapMouseEvent, MapLayerMouseEvent } from "maplibre-gl";
  import { map } from "../store";

  // Input
  export let source: string;
  export let show = true;
  export let gj: GeoJSON;
  // The caller should do something with ["feature-state", "hover"] and ["feature-state", "clicked"]
  export let layerStyle;
  export let downloadable: boolean;

  // Output
  // Per https://maplibre.org/maplibre-gl-js-docs/api/map/#map#queryrenderedfeatures, array and object properties don't work
  export let hoveredFeature: Feature | undefined;
  export let clickedFeature: Feature | undefined;

  // An ID assigned by MapLibre
  let hoverId: number | undefined;
  let clickedId: number | undefined;

  let layer = `${source}-layer`;

  onMount(() => {
    $map.addSource(source, {
      type: "geojson",
      data: gj,
      generateId: true,
    });
    $map.addLayer({
      id: layer,
      source,
      ...layerStyle,
    });
    // We may need to hide initially
    if (!show) {
      $map.setLayoutProperty(layer, "visibility", "none");
    }

    // Configure hovering
    $map.on("mousemove", layer, onMouseMove);
    $map.on("mouseleave", layer, onMouseLeave);
    // Configure clicking
    $map.on("click", onClick);
  });

  onDestroy(() => {
    $map.off("mousemove", onMouseMove);
    $map.off("mouseleave", onMouseLeave);
    $map.off("click", onClick);

    unhover();
    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    $map.removeSource(source);
  });

  function onMouseMove(e: MapLayerMouseEvent) {
    if (e.features.length > 0 && hoverId != e.features[0].id) {
      unhover();
      hoveredFeature = e.features[0];
      hoverId = e.features[0].id;
      $map.setFeatureState({ source, id: hoverId }, { hover: true });
    }
  }

  function onMouseLeave() {
    unhover();
    hoveredFeature = undefined;
    hoverId = undefined;
  }

  function onClick(e: MapMouseEvent) {
    if (clickedFeature !== undefined) {
      $map.setFeatureState({ source, id: clickedId }, { clicked: false });
    }

    let features = $map.queryRenderedFeatures(e.point, { layers: [layer] });
    if (features.length == 1) {
      clickedFeature = features[0];
      clickedId = features[0].id;
      $map.setFeatureState({ source, id: clickedId }, { clicked: true });
    } else {
      clickedFeature = undefined;
      clickedId = undefined;
    }
  }

  // Show/hide
  $: {
    if ($map.getLayer(layer)) {
      $map.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
    }
  }

  function unhover() {
    if (hoverId !== undefined) {
      $map.setFeatureState({ source, id: hoverId }, { hover: false });
    }
  }

  function download() {
    // TODO Plumb down a name/label for this layer?
    downloadGeneratedFile("layer.geojson", JSON.stringify(gj));
  }

  // TODO Why can't I find an NPM package to do this?
  function downloadGeneratedFile(filename: string, textInput: string) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8, " + encodeURIComponent(textInput)
    );
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
</script>

{#if downloadable}
  <button type="button" on:click={download}>Download</button>
{/if}
