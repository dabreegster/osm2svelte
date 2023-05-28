<script lang="ts">
  import type { LayerSpec } from "./types";

  // TODO Can we have a UUID per layer? We need a keyed each block, but the
  // entire GJ is expensive memory-wise to store?
  export let layers: LayerSpec[];
</script>

<div>
  {#each layers as layer (JSON.stringify(layer.gj))}
    <label>
      <input type="checkbox" bind:checked={layer.show} />
      Show {layer.label}
      <svelte:component
        this={layer.content}
        gj={layer.gj}
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
