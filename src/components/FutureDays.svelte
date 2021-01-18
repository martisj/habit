<script>
  import dayjs from 'dayjs'

  const theFuture = (daysToShow) =>
    Array(daysToShow)
      .fill(Math.ceil(daysToShow / 2) * -1)
      .map((day, idx) =>
        dayjs()
          .add(idx + day, 'day')
          .format('DD MMM')
          .split(' ')
      )
</script>

<div>
  {#each theFuture(7) as day}
    <p>
      <span>{day[0]}</span>{day[1]}
    </p>
  {/each}
</div>

<style>
  div {
    text-align: center;
  }

  span {
    text-align: center;
    font-weight: bold;
    font-size: 1.1em;
    display: block;
    width: 100%;
    color: var(--cSand);
    background-color: var(--cBlack);
  }
</style>
