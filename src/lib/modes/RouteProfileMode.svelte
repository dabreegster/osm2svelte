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
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "weight"],
        0,
        "blue",
        0.1,
        "royalblue",
        0.3,
        "cyan",
        0.5,
        "lime",
        0.7,
        "yellow",
        1,
        "red",
      ],
    },
  });
  setupRoadWeights();

  interface Road {
    highway_type: string;
    osm_id?: number;
    // May be empty if there's not exactly 1 OSM way corresponding to the road
    osm_tags: { [name: string]: string };
    // TODO Can we generate TS types for these?
    lane_specs_ltr: any[];
  }

  function setupRoadWeights() {
    let gj = emptyGeojson();

    let polygons = JSON.parse($streetNetwork.toGeojsonPlain());
    let network = JSON.parse($streetNetwork.toJson());
    for (let [id, road] of network.roads) {
      let properties = {
        highway_type: road.highway_type,
        lane_specs_ltr: road.lane_specs_ltr,
        osm_id: undefined,
        osm_tags: {},
        weight: 0.0,
      };
      if (road.osm_ids.length == 1) {
        properties.osm_id = road.osm_ids[0];
        properties.osm_tags = JSON.parse(
          $streetNetwork.getOsmTagsForWay(BigInt(properties.osm_id))
        );
      }
      properties.weight = calculateWeight(properties);
      gj.features.push({
        type: "Feature",
        properties,
        geometry: polygons.features.find((f) => id == f.properties.id)!
          .geometry,
      });
    }

    ($map.getSource(source) as GeoJSONSource).setData(gj);
  }

  function calculateWeight(road: Road): number {
    if (road.highway_type == "primary") {
      return 0.8;
    }
    return 0.3;
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
