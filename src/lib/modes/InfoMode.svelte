<script lang="ts">
  import { clickedFeatureStore } from "../../store";
</script>

{#if $clickedFeatureStore}
  <pre>{JSON.stringify($clickedFeatureStore.properties)}</pre>
{:else}
  <p>Click something</p>
{/if}
