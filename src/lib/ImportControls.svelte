<script lang="ts">
  import type { Imported } from "./types";
  import { map } from "../store";
  import { downloadGeneratedFile } from "../utils";
  import { bbox } from "../style";

  export let imported: Imported;

  function download() {
    // This type-check is always true; the button only appears sometimes
    if (imported.kind === "done") {
      // TODO If we have a name for the imported area, use that
      downloadGeneratedFile("osm.xml", imported.osmInput);
    }
  }

  function resetView() {
    if (imported.kind === "done") {
      $map!.fitBounds(bbox(imported.boundaryGJ), {
        animate: false,
        padding: 10,
      });
    }
  }
</script>

{#if imported.kind === "nothing"}
  <p>Use the polygon tool to select an area to import</p>
{:else if imported.kind === "LoadingOverpass"}
  <p>Loading from Overpass...</p>
{:else if imported.kind === "error"}
  <p>Error: {imported.msg}</p>
{:else if imported.kind === "osm2streets import"}
  <p>Importing with osm2streets...</p>
{:else if imported.kind === "done"}
  <div>
    <button type="button" on:click={download}>Download osm.xml</button>
    <button type="button" on:click={resetView}>Reset view</button>
  </div>
{/if}
