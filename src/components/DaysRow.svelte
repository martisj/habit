<script>
  import { isSameDay } from '../utils'
  export let days
  export let today
</script>

{#each days as day}
  <th class:highlight={isSameDay(day, today)}>
    <span>{day[0]}</span>{day[1]}
  </th>
{/each}

<style>
  span {
    text-align: center;
    font-weight: bold;
    font-size: var(--fz-large);
    display: block;
  }

  th {
    padding: 7px 11px;
    border-bottom: 1px dotted var(--cBlack);
    border-right: 1px dotted var(--cBlack);
    background-color: var(--cSand);
  }

  :global(.highlight) {
    background-color: var(--cDarkSepia);
  }

  th:last-child {
    border-right: none;
  }
</style>
