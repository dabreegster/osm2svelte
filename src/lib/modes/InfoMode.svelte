<script lang="ts">
  import type { Feature } from "geojson";

  export let clickedFeature: Feature | undefined;
</script>

{#if clickedFeature === undefined}
  <p>Click something</p>
{:else}
  <pre>{JSON.stringify(clickedFeature.properties)}</pre>
{/if}
