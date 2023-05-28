<script lang="ts">
  import { map } from "../store";

  let showRoads = true;
  let showBuildings = true;

  $: {
    if ($map) {
      let visible = showRoads ? "visible" : "none";
      for (let layer of $map.getStyle().layers) {
        if (layer.id.startsWith("road_")) {
          $map.setLayoutProperty(layer.id, "visibility", visible);
        }
      }
    }
  }

  $: {
    if ($map) {
      let visible = showBuildings ? "visible" : "none";
      $map.setLayoutProperty("building", "visibility", visible);
      $map.setLayoutProperty("building-3d", "visibility", visible);
    }
  }
</script>

<label>
  <input type="checkbox" bind:checked={showRoads} />
  Basemap roads
</label>
<br />
<label>
  <input type="checkbox" bind:checked={showBuildings} />
  Basemap buildings
</label>
