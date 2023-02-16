<script lang="ts">
  import { getContext } from "svelte";

  const { getMap } = getContext("map");
  let map = getMap();

  let showRoads = true;
  let showBuildings = true;

  $: {
    let visible = showRoads ? "visible" : "none";
    for (let layer of map.getStyle().layers) {
      if (layer.id.startsWith("road_")) {
        map.setLayoutProperty(layer.id, "visibility", visible);
      }
    }
  }

  $: {
    let visible = showBuildings ? "visible" : "none";
    map.setLayoutProperty("building", "visibility", visible);
    map.setLayoutProperty("building-3d", "visibility", visible);
  }

  // TODO I want the controls to be in the sidebar, not a div, but I guess then we need to nest things differently or use a store
</script>

<div>
  <input type="checkbox" bind:checked={showRoads} />Show/hide roads
  <input type="checkbox" bind:checked={showBuildings} />Show/hide buildings
</div>

<style>
  div {
    z-index: 1;
    position: absolute;
    bottom: 40px;
    right: 10px;
    background: white;
    padding: 10px;
  }
</style>
