<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { clickedLane, hoveredLane, network } from "../../store";
  import { caseHelper, featureStateToggle } from "../../style";
  import Layer from "../common/Layer.svelte";
  import LayerControls from "../common/LayerControls.svelte";

  let gj: GeoJSON | undefined = undefined;
  let show = true;
  $: if ($network) {
    gj = JSON.parse($network.toLanePolygonsGeojson());
  }

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

{#if gj}
  <Layer
    source="lane-polygons"
    {gj}
    {layerStyle}
    interactive
    bind:clickedFeature={$clickedLane}
    bind:hoveredFeature={$hoveredLane}
    {show}
  />
{/if}
<LayerControls {gj} name="Lane polygons" bind:show />
