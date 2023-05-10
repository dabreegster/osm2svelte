<script lang="ts">
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import type DrawCreateEvent from "mapbox__mapbox-gl-draw";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { map } from "../store";

  import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

  let drawControls: MapboxDraw;

  let dispatch = createEventDispatcher();

  onMount(async () => {
    drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
      },
    });
    $map.addControl(drawControls);

    $map.on("draw.create", (e: DrawCreateEvent) => {
      const feature = e.features[0];
      drawControls.deleteAll();
      dispatch("polygon", feature.geometry);
    });
  });

  onDestroy(() => {
    $map.removeControl(drawControls);
  });
</script>

<style>
  /* TODO: These really do belong here, but getting a warning */

  :global(.mapboxgl-ctrl-group > button) {
    width: 60px;
    height: 60px;
  }

  :global(.mapbox-gl-draw_polygon) {
    background-size: 50px;
  }
</style>
