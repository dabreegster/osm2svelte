<script lang="ts">
  export let tabs = [];

  let activeTab = 0;
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
