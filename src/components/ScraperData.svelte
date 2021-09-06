<script>
    // create a prop
    export let scraperData;
</script>

<article class="row">
    <div class="col-2 offset-1 "> <strong>Store:</strong> {scraperData.STORE}</div>
    <div class="col-6 text-truncate">
      <strong> URL </strong> <a class=""href={scraperData.URL} target='_blank'>{scraperData.URL}</a>
    </div>
</article>

<style>
    article {
      margin: 0 0 1em 0;
    }
  </style>