<script lang="ts">
  let origPage = window.location.pathname.split("/").pop() || "index.html";
  let page = origPage;

  function gotoPage() {
    if (page != origPage) {
      // TODO Preserve the camera and query parameters, at least
      window.location.href = page;
    }
  }
</script>

<div>
  App:
  <select bind:value={page} on:change={gotoPage}>
    <option value="index.html">Street Explorer</option>
    <option value="lane_editor.html">Lane editor</option>
    <option value="route_profile.html">Route profile tool</option>
    <option value="thicken_roads.html">Road width tool</option>
  </select>
</div>
