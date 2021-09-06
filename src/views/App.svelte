<script>
	import ScraperView from "./ScraperView.svelte";
	// let scraperData;
	let scraper;
  	// let continent;
  </script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <h1 class="col-12 headline">PS5 Scraper</h1> 
  <div class="container">
	<main>
		<ScraperView {scraper} />
	</main>
</div>

<style>
	.headline {
		color: #fff;
		background-color: #0172ce;
		height: 15%;
	}
</style> 