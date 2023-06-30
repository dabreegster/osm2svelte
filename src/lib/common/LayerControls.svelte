<script lang="ts">
  import { downloadGeneratedFile } from "../../utils";

  export let gj: GeoJSON;
  export let downloadable;

  function download() {
    // TODO Plumb down a name/label for this layer?
    downloadGeneratedFile("layer.geojson", JSON.stringify(gj));
  }
</script>

{#if downloadable}
  <button type="button" on:click={download}>Download</button>
{/if}
