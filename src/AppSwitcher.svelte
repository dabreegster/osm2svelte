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
    <option value="index.html">Route profile tool</option>
    <option value="thicken_roads.html">Road width tool</option>
    <option value="cats.html">Maps for Cats</option>
  </select>
</div>
