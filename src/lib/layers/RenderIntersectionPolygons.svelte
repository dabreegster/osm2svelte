<script lang="ts">
  import type { GeoJSON } from "geojson";
  import InteractiveLayer from "../InteractiveLayer.svelte";
  import { caseHelper, featureStateToggle } from "../../style";
  import { hoveredIntersection } from "../../store";

  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

  // Just to not break InteractiveLayer. Doesn't do anything.
  let clickedFeature = null;

  let layerStyle = {
    type: "fill",
    filter: ["==", ["get", "type"], "intersection"],
    paint: {
      "fill-color": caseHelper(
        "intersection_kind",
        {
          Connection: "#666",
          Intersection: "#966",
          Terminus: "#999",
          MapEdge: "#696",
        },
        "#666"
      ),
      "fill-opacity": featureStateToggle("hover", 0.9, 0.4),
    },
  };
</script>

<InteractiveLayer
  source="intersection-polygons"
  {gj}
  {layerStyle}
  bind:clickedFeature
  bind:hoveredFeature={$hoveredIntersection}
  bind:show
  {downloadable}
/>
