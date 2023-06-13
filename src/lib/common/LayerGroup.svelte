<script lang="ts">
  import type { LayerSpec } from "../../types";

  export let layers: LayerSpec[];
  export let showControls = true;

  // TODO Some of the components don't take gj or downloadable props. It shows
  // up as a runtime warning only.
</script>

<div style:display={showControls ? "block" : "none"}>
  {#each layers as layer (layer.uuid)}
    <label>
      <input type="checkbox" bind:checked={layer.show} />
      {layer.label}
      <svelte:component
        this={layer.content}
        gj={layer.gj}
        bind:show={layer.show}
        downloadable
      />
    </label>
    <br />
  {/each}

  {#if layers.length}
    <hr />
  {/if}
  <slot />
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
