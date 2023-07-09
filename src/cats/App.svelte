<script lang="ts">
  import type { Map } from "maplibre-gl";
  import { MapLibre } from "svelte-maplibre";
  import Layout from "../osm2streets-svelte/Layout.svelte";
  import BuiltInSelector from "../osm2streets-svelte/osm_input/BuiltInSelector.svelte";
  import OverpassSelector from "../osm2streets-svelte/osm_input/OverpassSelector.svelte";
  import type { OsmSelection } from "../osm2streets-svelte/osm_input/types";

  let map: Map;
  let testCase = "none";

  // Hide basemap roads and some other features
  function onLoad() {
    for (let layer of map.getStyle().layers) {
      if (layer.id.startsWith("road_") || layer.id.startsWith("bridge_")) {
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
    }
  }

  function load(e: CustomEvent<OsmSelection>) {
    console.log(`got osm ${e.detail.osmXml.length}`);
  }

  function resetToNone(e: CustomEvent<void>) {
    console.log(`reset to nil`);
  }

  function error(e: CustomEvent<string>) {
    window.alert(`Something broke: ${e.detail}`);
  }
</script>

<Layout>
  <div slot="left">
    <h1>Maps for Cats</h1>
    <BuiltInSelector
      bind:testCase
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
