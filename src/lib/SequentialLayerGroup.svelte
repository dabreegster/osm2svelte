<script lang="ts">
  import type { LayerSpec } from "../types";

  // TODO Should be a LayerGroup, that's lazy
  export let layers: LayerSpec[];

  let current = 0;

  $: currentLayer = layers[current];
</script>

{#if layers.length > 0}
  <div>
    <button type="button" on:click={() => current--} disabled={current == 0}
      >Previous</button
    >
    {current + 1} / {layers.length}
    <button
      type="button"
      on:click={() => current++}
      disabled={current == layers.length - 1}>Next</button
    >
  </div>

  <div>
    <select bind:value={current}>
      {#each layers as layer, idx}
        <option value={idx}>{layer.label}</option>
      {/each}
    </select>
  </div>

  <div>
    <input type="checkbox" bind:checked={currentLayer.show} />
    <svelte:component
      this={currentLayer.content}
      gj={currentLayer.gj}
      bind:show={currentLayer.show}
      downloadable
    />
  </div>
{/if}
