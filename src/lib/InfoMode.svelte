<script lang="ts">
  import { clickedLane } from "../store";

  // TODO Tooltips, actually
</script>

{#if $clickedLane}
  <pre>{JSON.stringify($clickedLane.properties)}</pre>
{:else}
  <p>Click something</p>
{/if}
