<script lang="ts">
  export let tabs = [];
  export let currentTabLabel: string;

  let activeTab = 0;

  $: currentTabLabel = tabs[activeTab].label;
</script>

{#each tabs as tab, idx}
  <button
    class="tab"
    class:active={idx == activeTab}
    on:click={() => (activeTab = idx)}
  >
    {tab.label}
  </button>
{/each}

{#each tabs as tab, idx}
  {#if idx == activeTab}
    <svelte:component this={tab.content} />
  {/if}
{/each}

<style>
  .tab {
    background-color: #f4f4f5;
    padding: 1rem;
  }
  .tab.active {
    background-color: #e4e4e7;
  }
</style>
