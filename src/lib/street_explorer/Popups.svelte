<script lang="ts">
  import { Popup } from "maplibre-gl";
  import { onDestroy } from "svelte";
  import { clickedIntersection, clickedLane, map } from "../../store";
  import IntersectionPopup from "./IntersectionPopup.svelte";
  import LanePopup from "./LanePopup.svelte";

  let popup = new Popup({
    closeButton: false,
    closeOnClick: false,
    maxWidth: "none",
  });

  onDestroy(() => {
    popup.remove();
  });

  $: {
    // TODO Not sure if we can get the DOM contents of a component by doing this
    if ($clickedLane) {
      // TODO Not sure what point to base the popup at. Use turf centroid at least, maybe
      let center = $clickedLane.geometry.coordinates[0][0];
      popup
        .setLngLat(center)
        .setDOMContent(new LanePopup({ lane: $clickedLane }))
        .addTo($map);
    } else if ($clickedIntersection) {
      let center = $clickedIntersection.geometry.coordinates[0][0];
      popup
        .setLngLat(center)
        .setDOMContent(
          new IntersectionPopup({ intersection: $clickedIntersection })
        )
        .addTo($map);
    } else {
      popup.remove();
    }
  }
</script>
