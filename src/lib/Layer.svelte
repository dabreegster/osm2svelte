<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { GeoJSON } from "geojson";
  import { map } from "../store";

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
    $map.addLayer({
      id: layer,
      source,
      ...layerStyle,
    });
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
