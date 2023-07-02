<script lang="ts">
  import type { Map } from "maplibre-gl";
  import { MapLibre } from "svelte-maplibre";
  import Layout from "../lib/common/Layout.svelte";
  import BuiltInSelector from "../lib/common/osm_input/BuiltInSelector.svelte";
  import OverpassSelector from "../lib/common/osm_input/OverpassSelector.svelte";
  import type { OsmSelection } from "../lib/common/osm_input/types";

  let map: Map;

  // Hide basemap roads and some other features
  function onLoad() {
    for (let layer of map.getStyle().layers) {
      if (layer.id.startsWith("road_") || layer.id.startsWith("bridge_")) {
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
    }
  }

  function load(e: CustomEvent<OsmSelection>) {
    window.x = e;
    console.log(`got osm ${e.detail.osmXML.length}`);
  }

  function resetToNone(e: CustomEvent<void>) {
    console.log(`reset to nil`);
  }

  function error(e: CustomEvent<string>) {
    window.alert(`Something broke: ${e.detail.error}`);
  }
</script>

<Layout>
  <div slot="left">
    <h1>Maps for Cats</h1>
    <BuiltInSelector
      on:load={load}
      on:resetToNone={resetToNone}
      on:error={error}
    />
    {#if map}
      <OverpassSelector
        {map}
        on:load={load}
        on:resetToNone={resetToNone}
        on:error={error}
      />
    {/if}
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
