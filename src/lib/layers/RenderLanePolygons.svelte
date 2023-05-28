<script lang="ts">
  import InteractiveLayer from "../InteractiveLayer.svelte";
  import { caseHelper, featureStateToggle } from "../../style";
  import { network, clickedFeatureStore } from "../../store";

  // Input
  export let show: boolean;
  export let downloadable: boolean;

  let clickedFeature;
  $: clickedFeatureStore.set(clickedFeature);

  let gj = JSON.parse($network.toLanePolygonsGeojson());
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
      "fill-opacity": featureStateToggle("hover", 0.9, 0.4),
    },
  };
</script>

<InteractiveLayer
  source="lane-polygons"
  {gj}
  {layerStyle}
  bind:clickedFeature
  bind:show
  {downloadable}
/>
