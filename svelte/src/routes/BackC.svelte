<script>
    function connectSE() {
  const url = 'http://localhost:8000/';
  const response = fetch(url)
    .then(data => {
      console.log('Got data from API!', data)
    }).catch(err => {
      console.log('Something went wrong', err);
    });
}

connectSE()
</script>