<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { clickedLane, network } from "../../store";
  import Layer from "../common/Layer.svelte";

  let way: bigint | null;
  let gj: GeoJSON | null;

  // TODO Maybe move to another component
  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "red",
      "fill-opacity": 0.3,
    },
  };

  $: {
    way = null;
    gj = null;

    if ($clickedLane) {
      if ($clickedLane.properties.osm_way_ids.length != 1) {
        window.alert(
          "This road doesn't match up with one OSM way; you can't edit it"
        );
      } else {
        way = BigInt($clickedLane.properties.osm_way_ids[0]);
        gj = JSON.parse($network!.getGeometryForWay(way));
      }
    } else {
      way = null;
      gj = null;
    }
  }
</script>

{#if way}
  <a href="http://openstreetmap.org/way/{way}" target="_blank">Way {way}</a>

  <Layer source="current-way" {gj} {layerStyle} />
{:else}
  Click a road to edit
{/if}
