<script lang="ts">
  import type { Map } from "maplibre-gl";
  import { mapStore } from "../store.js";

  // TODO Ew, this is horrible too, need to wait for it be loaded
  let map: Map;
  mapStore.subscribe((m) => {
    map = m;
  });

  let showRoads = true;
  let showBuildings = true;

  $: {
    if (map) {
      let visible = showRoads ? "visible" : "none";
      for (let layer of map.getStyle().layers) {
        if (layer.id.startsWith("road_")) {
          map.setLayoutProperty(layer.id, "visibility", visible);
        }
      }
    }
  }

  $: {
    if (map) {
      let visible = showBuildings ? "visible" : "none";
      map.setLayoutProperty("building", "visibility", visible);
      map.setLayoutProperty("building-3d", "visibility", visible);
    }
  }
</script>

<div>
  <input type="checkbox" bind:checked={showRoads} />Show/hide roads
  <input type="checkbox" bind:checked={showBuildings} />Show/hide buildings
</div>
