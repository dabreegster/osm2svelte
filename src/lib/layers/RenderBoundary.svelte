<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { map } from "../../store";
  import { bbox } from "../../style";
  import Layer from "../common/Layer.svelte";

  // TODO Is there a way to plumb a bunch of generic Layer props like this?
  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

  let layerStyle = {
    type: "line",
    paint: {
      "line-color": "blue",
      "line-width": 4,
    },
  };

  // Initially zoom to fit the imported boundary
  $map.fitBounds(bbox(gj), { animate: false, padding: 10 });
</script>

<Layer source="boundary" {gj} {layerStyle} bind:show {downloadable} />
