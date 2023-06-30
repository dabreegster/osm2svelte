<script lang="ts">
  import type { GeoJSON } from "geojson";
  import { map } from "../../store";
  import { bbox } from "../../style";
  import { GeoJSON, FillLayer, LineLayer } from "svelte-maplibre";
  import LayerControls from "../common/LayerControls.svelte";

  // TODO Is there a way to plumb a bunch of generic Layer props like this?
  export let gj: GeoJSON;
  export let show: boolean;
  export let downloadable: boolean;

  // Initially zoom to fit the imported boundary
  $map.fitBounds(bbox(gj), { animate: false, padding: 10 });
</script>

<GeoJSON id="boundary" data={gj}>
  {#if show}
    <FillLayer paint={{"fill-color": "blue", "fill-opacity": 0.3}} />
    <LineLayer paint={{"line-color": "blue", "line-width": 4}} />
  {/if}
</GeoJSON>

<LayerControls {gj} {downloadable} />
