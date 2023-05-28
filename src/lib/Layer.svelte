<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { GeoJSON } from "geojson";
  import { map } from "../store";
  import { getLayerZorder } from "../style";
  import { downloadGeneratedFile } from "../utils";

  // Input
  export let source: string;
  export let show = true;
  export let gj: GeoJSON;
  export let layerStyle;
  export let downloadable: boolean;

  let layer = `${source}-layer`;

  onMount(() => {
    $map.addSource(source, {
      type: "geojson",
      data: gj,
    });
    $map.addLayer(
      {
        id: layer,
        source,
        ...layerStyle,
      },
      getLayerZorder(layer)
    );
    // We may need to hide initially
    if (!show) {
      $map.setLayoutProperty(layer, "visibility", "none");
    }
  });

  onDestroy(() => {
    if ($map.getLayer(layer)) {
      $map.removeLayer(layer);
    }
    $map.removeSource(source);
  });

  $: {
    if ($map.getLayer(layer)) {
      $map.setLayoutProperty(layer, "visibility", show ? "visible" : "none");
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
