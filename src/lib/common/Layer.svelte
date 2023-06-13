<script lang="ts">
  import type { Feature, GeoJSON } from "geojson";
  import type { MapLayerMouseEvent, MapMouseEvent } from "maplibre-gl";
  import { onDestroy, onMount } from "svelte";
  import { map } from "../../store";
  import { getLayerZorder } from "../../style";
  import { downloadGeneratedFile } from "../../utils";

  // Input
  export let source: string;
  export let show = true;
  export let gj: GeoJSON;
  // TODO LayerSpecification doesn't work
  export let layerStyle: any;
  export let downloadable = false;
  // Make objects hoverable and clickable. The caller should do something with
  // ["feature-state", "hover"] and ["feature-state", "clicked"]
  export let interactive = false;

  // Output
  // Per https://maplibre.org/maplibre-gl-js-docs/api/map/#map#queryrenderedfeatures, array and object properties don't work
  export let hoveredFeature: Feature | null = null;
  export let clickedFeature: Feature | null = null;

  // An ID assigned by MapLibre
  let hoverId: number | undefined;
  let clickedId: number | undefined;

  let layer = `${source}-layer`;

  onMount(() => {
    $map!.addSource(source, {
      type: "geojson",
      data: gj,
      generateId: true,
    });
    $map!.addLayer(
      {
        id: layer,
        source,
        ...layerStyle,
      },
      getLayerZorder(layer)
    );
    // We may need to hide initially
    if (!show) {
      $map!.setLayoutProperty(layer, "visibility", "none");
    }

    if (interactive) {
      // Configure hovering
      $map!.on("mousemove", layer, onMouseMove);
      $map!.on("mouseleave", layer, onMouseLeave);
      // Configure clicking
      $map!.on("click", onClick);
    }
  });

  onDestroy(() => {
    if (interactive) {
      $map!.off("mousemove", onMouseMove);
      $map!.off("mouseleave", onMouseLeave);
      $map!.off("click", onClick);
      unhover();
    }

    if ($map!.getLayer(layer)) {
      $map!.removeLayer(layer);
    }
    $map!.removeSource(source);
  });

  function onMouseMove(e: MapLayerMouseEvent) {
    if (e.features.length > 0 && hoverId != e.features[0].id) {
      unhover();
      hoveredFeature = e.features[0];
      // generateId means this'll be a number
      hoverId = e.features[0].id as number;
      $map!.setFeatureState({ source, id: hoverId }, { hover: true });
    }
  }

  function onMouseLeave() {
    unhover();
    hoveredFeature = null;
    hoverId = undefined;
  }

  function onClick(e: MapMouseEvent) {
    if (clickedFeature !== null) {
      $map!.setFeatureState({ source, id: clickedId }, { clicked: false });
    }

    let features = $map!.queryRenderedFeatures(e.point, { layers: [layer] });
    if (features.length == 1) {
      clickedFeature = features[0];
      clickedId = features[0].id as number;
      $map!.setFeatureState({ source, id: clickedId }, { clicked: true });
    } else {
      clickedFeature = null;
      clickedId = undefined;
    }
  }

  // Show/hide
  $: {
    if ($map!.getLayer(layer)) {
      $map!.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
    }
  }

  function unhover() {
    if (hoverId !== undefined) {
      $map!.setFeatureState({ source, id: hoverId }, { hover: false });
    }
  }

  function download() {
    // TODO Plumb down a name/label for this layer?
    downloadGeneratedFile("layer.geojson", JSON.stringify(gj));
  }
</script>

{#if downloadable}
  <button type="button" on:click={download}>Download</button>
{/if}
