<script lang="ts">
  // TODO When this mode is active, we want to hide some of the base layers!
  import type { Feature, FeatureCollection } from "geojson";
  import { network } from "../../store";
  import { emptyGeojson, featureStateToggle } from "../../style";
  import Layer from "../common/Layer.svelte";

  let clickedFeature: Feature | null;
  let hoveredFeature: Feature | null;

  let gj = setupRoadWeights();
  let layerStyle = {
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
      "fill-opacity": featureStateToggle("hover", 0.8, 0.4),
    },
  };

  interface Road {
    highway_type: string;
    osm_id?: number;
    // May be empty if there's not exactly 1 OSM way corresponding to the road
    osm_tags: { [name: string]: string };
    // TODO Can we generate TS types for these?
    lane_specs_ltr: any[];
  }

  function setupRoadWeights(): FeatureCollection {
    let gj = emptyGeojson();
    if (!$network) {
      return gj;
    }

    let polygons: FeatureCollection = JSON.parse($network.toGeojsonPlain());
    let jsonNetwork = JSON.parse($network.toJson());
    for (let [id, road] of jsonNetwork.roads) {
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
          $network.getOsmTagsForWay(BigInt(properties.osm_id))
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

    return gj;
  }

  function calculateWeight(road: Road): number {
    if (road.highway_type == "primary") {
      return 0.8;
    }
    return 0.3;
  }
</script>

<Layer
  source="road-weights"
  {gj}
  {layerStyle}
  interactive
  bind:clickedFeature
  bind:hoveredFeature
/>

{#if clickedFeature || hoveredFeature}
  {@const f = clickedFeature || hoveredFeature}
  <br />
  <a
    href={`http://openstreetmap.org/way/${f.properties.osm_id}`}
    target="_blank"
    rel="noreferrer">Open OSM way {f.properties.osm_id}</a
  >
  <br />
  Weight: {f.properties.weight}
  <br />
  Tags:
  <pre>{JSON.stringify(JSON.parse(f.properties.osm_tags), null, "  ")}</pre>
  Lanes:
  <pre>{JSON.stringify(
      JSON.parse(f.properties.lane_specs_ltr),
      null,
      "  "
    )}</pre>
{:else}
  <p>Hover on a road to see its details</p>
{/if}

<style>
  pre {
    white-space: pre-wrap;
  }
</style>
