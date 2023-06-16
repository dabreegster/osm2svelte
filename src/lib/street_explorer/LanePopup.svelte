<script lang="ts">
  import type { Feature } from "geojson";
  import { network } from "../../store";

  export let lane: Feature;

  let props = structuredClone(lane.properties);
  delete props.osm_way_ids;

  function collapse() {
    $network.collapseShortRoad(lane.properties.rod);
    // TODO Rerender
  }

  function zip() {
    $network.zipSidepath(lane.properties.rod);
    // TODO Rerender
  }
</script>

<pre>{JSON.stringify(props, null, "  ")}</pre>

<div>
  OSM ways:
  {#each lane.properties.osm_way_ids as id}
    <a href="https://www.openstreetmap.org/way/{id}" target="_blank">{id}</a>,
  {/each}
</div>

<div>
  <button type="button" on:click={collapse}>Collapse short road</button>
  <button type="button" on:click={zip}>Zip side-path</button>
</div>
