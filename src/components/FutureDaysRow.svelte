<script>
  import dayjs from 'dayjs'
  export let component = 'div'

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

{#each theFuture(7) as day}
  <svelte:component this={component}>
    <span>{day[0]}</span>{day[1]}
  </svelte:component>
{/each}

<style>
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
