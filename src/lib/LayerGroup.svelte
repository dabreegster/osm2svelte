<script lang="ts">
  import type { JsStreetNetwork } from "osm2streets-js";

  export let network: JsStreetNetwork;
  export let layers;
</script>

<div>
  {#each layers as layer}
    <svelte:component this={layer.content} {network} bind:show={layer.show} />
    <label>
      <input type="checkbox" bind:checked={layer.show} />
      Show {layer.label}
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
