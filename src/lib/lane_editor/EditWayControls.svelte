<script lang="ts">
  import { clickedLane } from "../../store";

  let way: number | null;

  $: {
    if ($clickedLane) {
      if ($clickedLane.properties.osm_way_ids.length != 1) {
        window.alert(
          "This road doesn't match up with one OSM way; you can't edit it"
        );
      } else {
        way = $clickedLane.properties.osm_way_ids[0];
      }
    } else {
      way = null;
    }
  }
</script>

{#if way}
  <a href="http://openstreetmap.org/way/{way}" target="_blank">Way {way}</a>
{:else}
  Click a road to edit
{/if}
