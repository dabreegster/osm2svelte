<script lang="ts">
  import Layer from "../Layer.svelte";
  import { bbox } from "../../style";
  import { map, boundaryGJ } from "../../store";

  // TODO Is there a way to plumb a bunch of generic Layer props like this?
  export let show: boolean;
  export let downloadable: boolean;

  let layerStyle = {
    type: "fill",
    paint: {
      "fill-color": "blue",
      "fill-opacity": 0.5,
    },
  };

  // Initially zoom to fit the imported boundary
  $map.fitBounds(bbox($boundaryGJ), { animate: false, padding: 200 });
</script>

<Layer
  source="boundary"
  gj={$boundaryGJ}
  {layerStyle}
  bind:show
  {downloadable}
/>
