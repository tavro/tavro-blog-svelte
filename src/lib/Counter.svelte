<script>
  export let maxCount
  export let count = 1
  const increment = () => {
    if(count < maxCount) {
      count += 1
    }
  }
  const decrease = () => {
    if(count > 1) {
      count -= 1
    }
  }
</script>

<div class="nav-container">
  <div class="left-button">
    <button on:click={decrease}>
      «
    </button>
  </div>
  <div class="page-nr">
    <p>{count}</p>
  </div>
  <div class="right-button">
    <button on:click={increment}>
      »
    </button>
  </div>
</div>

<style>
  .nav-container {
    width: 144px;
    margin: auto;
  }

  .page-nr {
    width: 48px;
    display: table-cell;
  }

  .left-button {
    width: 48px;
    display:table-cell;
  }

  .right-button {
    width: 48px;
    display:table-cell;
  }
</style>