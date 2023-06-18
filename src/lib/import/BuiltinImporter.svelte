<script lang="ts">
  import type { Feature, Polygon } from "geojson";
  import { JsStreetNetwork } from "osm2streets-js";
  import { onMount } from "svelte";
  import type { Imported, Settings } from "../../import";

  export let imported: Imported;
  export let settings: Settings;

  let choice = "none";
  let list: string[] = [];

  onMount(async () => {
    // TODO Hardcodes the base path from vite config -- OK?
    let resp = await fetch("/osm2svelte/tests.json");
    list = await resp.json();
  });

  async function reload() {
    if (choice == "none") {
      // TODO Reset to empty
      return;
    }

    // TODO Go through all the same states?
    try {
      let polygonResp = await fetch(
        `/osm2svelte/tests/${choice}/boundary.json`
      );
      let polygon = await polygonResp.json();
      // Test input is always a FeatureCollection with one object. For uniformity...
      let boundaryGJ = polygon.features[0];

      let resp = await fetch(`/osm2svelte/tests/${choice}/input.osm`);
      let osmInput = await resp.text();
      let network = importOSM(boundaryGJ, osmInput);

      imported = {
        kind: "done",
        boundaryGJ,
        network,
        osmInput,
      };
    } catch (err) {
      imported = { kind: "error", msg: err.toString() };
    }
  }

  // TODO Refactor
  function importOSM(
    boundaryGJ: Feature<Polygon>,
    osmXML: string
  ): JsStreetNetwork {
    return new JsStreetNetwork(osmXML, JSON.stringify(boundaryGJ), settings);
  }
</script>

<div>
  Test case:
  <select bind:value={choice} on:change={reload}>
    <option value="none">None</option>
    {#each list as x}
      <option value={x}>{x}</option>
    {/each}
  </select>
</div>
