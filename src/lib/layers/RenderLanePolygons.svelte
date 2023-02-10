<script lang="ts">
  import type { JsStreetNetwork } from "osm2streets-js";
  import Layer from "../Layer.svelte";
  import { caseHelper } from "../../style.js";

  export let network: JsStreetNetwork;

  let gj = JSON.parse(network.toLanePolygonsGeojson());
  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": caseHelper(
        "type",
        // TODO Could we be type-safe here?!
        {
          Driving: "black",
          Parking: "#333333",
          Sidewalk: "#CCCCCC",
          Shoulder: "#CCCCCC",
          Biking: "#0F7D4B",
          Bus: "#BE4A4C",
          SharedLeftTurn: "black",
          Construction: "#FF6D00",
          LightRail: "#844204",
          Footway: "#DDDDE8",
          SharedUse: "#E5E1BB",
          // This is the only type used currently
          "Buffer(Planters)": "#555555",
        },
        "red"
      ),
      "fill-opacity": 0.9,
    },
  };
</script>

<Layer source="lane-polygons" {gj} {layerStyle} />
