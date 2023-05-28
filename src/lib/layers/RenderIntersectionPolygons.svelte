<script lang="ts">
  import type { GeoJSON } from "geojson";
  import Layer from "../Layer.svelte";
  import { caseHelper, featureStateToggle } from "../../style";
  import { hoveredIntersection } from "../../store";

  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

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

<Layer
  source="intersection-polygons"
  {gj}
  {layerStyle}
  interactive
  bind:hoveredFeature={$hoveredIntersection}
  bind:show
  {downloadable}
/>
