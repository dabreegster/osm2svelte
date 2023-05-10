<script lang="ts">
  import type { GeoJSONSource } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { clickedFeatureStore, map, streetNetwork } from "../../store";
  import { emptyGeojson } from "../../style";

  let source = "road-weights";
  let layer = `${source}-layer`;

  $map.addSource(source, {
    type: "geojson",
    data: emptyGeojson(),
  });
  $map.addLayer({
    id: layer,
    source,
    type: "fill",
    paint: {
      "fill-color": "red",
    },
  });
  setupRoadWeights();

  function setupRoadWeights() {
    let gj = emptyGeojson();

    let network = JSON.parse($streetNetwork.toJson());
    for (let [_, road] of network.roads) {
      console.log(road.highway_type);
      console.log(JSON.stringify(road.lane_specs_ltr));
      if (road.osm_ids.length == 1) {
        let tags = JSON.parse(
          $streetNetwork.getOsmTagsForWay(BigInt(road.osm_ids[0]))
        );
        console.log(JSON.stringify(tags));
      }
    }

    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  onDestroy(() => {
    if ($map) {
      if ($map.getLayer(layer)) {
        $map.removeLayer(layer);
      }
      $map.removeSource(source);
    }
  });
</script>

<p>Click a road to see its details</p>
