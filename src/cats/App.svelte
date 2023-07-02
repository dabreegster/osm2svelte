<script lang="ts">
  import type { Map } from "maplibre-gl";
  import { MapLibre } from "svelte-maplibre";
  import Layout from "../lib/common/Layout.svelte";

  let map: Map;

  // Hide basemap roads and some other features
  function onLoad() {
    for (let layer of map.getStyle().layers) {
      if (layer.id.startsWith("road_") || layer.id.startsWith("bridge_")) {
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
    }
  }
</script>

<Layout>
  <div slot="left">
    <h1>Maps for Cats</h1>
  </div>
  <div slot="main" style="position:relative; width: 100%; height: 100vh;">
    <MapLibre
      style="https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"
      center={[-0.1095, 51.5076]}
      zoom={13}
      bind:map
      on:load={onLoad}
    />
  </div>
</Layout>
