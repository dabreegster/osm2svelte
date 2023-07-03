<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type { OsmSelection } from "./types";

  const dispatch = createEventDispatcher<{
    load: OsmSelection;
    resetToNone: void;
    error: string;
  }>();

  let choice = "none";
  let list: string[] = [];

  onMount(async () => {
    // TODO Hardcodes the base path from vite config -- OK?
    let resp = await fetch("/osm2svelte/tests.json");
    list = await resp.json();
  });

  async function reload() {
    if (choice == "none") {
      dispatch("resetToNone");
      return;
    }

    try {
      let polygonResp = await fetch(
        `/osm2svelte/tests/${choice}/boundary.json`
      );
      let polygon = await polygonResp.json();
      // Test input is always a FeatureCollection with one object. For uniformity...
      let boundaryGj = polygon.features[0];

      let osmResp = await fetch(`/osm2svelte/tests/${choice}/input.osm`);
      let osmXml = await osmResp.text();

      dispatch("load", {
        testCase: choice,
        boundaryGj,
        osmXml,
      });
    } catch (err) {
      dispatch("error", err.toString());
    }
  }
</script>

<select bind:value={choice} on:change={reload}>
  <option value="none">None</option>
  {#each list as x}
    <option value={x}>{x}</option>
  {/each}
</select>
