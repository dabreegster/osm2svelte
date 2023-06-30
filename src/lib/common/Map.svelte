<script lang="ts">
  import { MapLibre, NavigationControl, ScaleControl } from "svelte-maplibre";
  import { map } from "../../store";
</script>

<div style="position:relative; width: 100%; height: 100vh;">
  <MapLibre
    style="https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"
    bind:map={$map}
  >
    <NavigationControl position="bottom-right" />
    <ScaleControl />
    <slot />
  </MapLibre>
</div>
