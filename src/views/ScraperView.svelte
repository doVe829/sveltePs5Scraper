<script>
    import { onMount } from "svelte";
    import ScraperData from "../components/ScraperData.svelte";
    // define the data holding variable
    let scraperDataArr;
    let reRunScrapper = setInterval(()=>{
      scrapeData();
    }, 40000);
    $: {
      reRunScrapper;
    }

    async function scrapeData(){
      await fetch(`/runscraper`)
      .then(r => r.json())
      .then(data => {
        scraperDataArr = data;
      }).catch(()=>{
        const dummy = [{STORE: 'DUMMY STORE', URL: 'DUMMY URL'}, {STORE: 'DUMMY STORE', URL: 'DUMMY URL'}, {STORE: 'DUMMY STORE', URL: 'DUMMY URL'}, {STORE: 'DUMMY STORE', URL: 'DUMMY URL'}];
        scraperDataArr = dummy;

      })
    }
    onMount(async () => {
      scrapeData();
  });
</script>
{#if scraperDataArr}
  {#if scraperDataArr.length > 0}
    {#each scraperDataArr as scraperData }
      <ScraperData {scraperData} />
    {/each}
  {:else}
    <p>No news yet :(</p>
  {/if}
{:else}
  <p class="loading">loading...</p>
{/if}

<style>
    .loading {
      opacity: 0;
      animation: 0.4s 0.8s forwards fade-in;
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>