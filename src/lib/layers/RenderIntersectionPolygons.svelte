<script lang="ts">
  import type { JsStreetNetwork } from "osm2streets-js";
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style";

  export let network: JsStreetNetwork;
  export let show: boolean;
  export let downloadable: boolean;

  let gj = JSON.parse(network.toGeojsonPlain());
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
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer
  source="intersection-polygons"
  {gj}
  {layerStyle}
  bind:show
  {downloadable}
/>
