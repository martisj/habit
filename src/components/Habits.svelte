<script>
  import dayjs from 'dayjs'
  import DaysRow from './DaysRow.svelte'
  import Habit from './Habit.svelte'
  import { formatDdMmmArr, calculateDaysToShow } from '../utils'

  import { habits } from '../store/habits'

  export let isEditing

  const daysToShow = 10
  const today = formatDdMmmArr(dayjs())
  const days = calculateDaysToShow(daysToShow)
</script>

<table>
  <tr class="habit">
    <th style="border: none" />
    <th>Stick it</th>
    <DaysRow {days} {today} />
  </tr>
  <tr />

  {#await $habits then habits}
    {#each habits as habit}
      <Habit {habit} {isEditing} {today} {days} />
    {:else}
      <div class="empty">
        Your habit list is awfully empty, time to add one.
      </div>
    {/each}
  {/await}
</table>

<style>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: var(--fz-small);
    background-image: url('/assets/dreamer-hand-plant.png');
  }

  th {
    border: none;
    border-bottom: 1px dotted var(--cBlack);
    text-align: right;
    border-right: 1px dotted var(--cBlack);
    vertical-align: bottom;
    padding: 9px 6px;
    background-color: var(--cSepia);
  }

  .empty {
    text-align: center;
  }
</style>
