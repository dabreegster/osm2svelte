<script lang="ts">
  import type { LayerSpec } from "./types";

  export let layers: LayerSpec[];
</script>

<div>
  {#each layers as layer}
    <label>
      <input type="checkbox" bind:checked={layer.show} />
      Show {layer.label}
      <svelte:component
        this={layer.content}
        bind:show={layer.show}
        downloadable
      />
    </label>
    <br />
  {/each}
</div>

<style>
  div {
    position: absolute;
    left: 10px;
    top: 60px;
    background-color: white;
    padding: 16px;
  }
</style>
