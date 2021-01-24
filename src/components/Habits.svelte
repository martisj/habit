<script>
  import dayjs from 'dayjs'
  import DaysRow from './DaysRow.svelte'
  import { habits } from '../store/habits'
  import { habitPoints } from '../store/habitPoints'
  import { formatDdMmmArr, calculateDaysToShow, isSameDay } from '../utils'

  export let isEditing

  const daysToShow = 10
  const today = formatDdMmmArr(dayjs())
  const days = calculateDaysToShow(daysToShow)
</script>

{#if $habits.length > 0}
  <table>
    <tr class="habit">
      <th style="border: none" />
      <th>Stick it</th>
      <DaysRow {days} {today} />
    </tr>
    <tr />

    {#each $habits as habit}
      <tr class="habit">
        <td class="track invisible" class:visible={isEditing}>
          <button on:click={() => habits.remove(habit._id)}>&times;</button>
        </td>
        <td class="title">{habit.title}</td>
        {#each days as day}
          <td class="track" class:highlight={isSameDay(day, today)}>
            <button on:click={() => habitPoints.add(habit._id, day)}>•</button>
          </td>
        {/each}
      </tr>
    {/each}
  </table>
{:else}
  <div class="empty">Your habit list is awfully empty, time to add one.</div>
{/if}

<style>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: var(--cSand);
    font-size: var(--fz-small);
  }

  .invisible {
    visibility: hidden;
  }

  .invisible.visible {
    visibility: visible;
  }

  th {
    border: none;
    border-bottom: 1px dotted var(--cBlack);
    text-align: right;
    border-right: 1px dotted var(--cBlack);
    vertical-align: bottom;
    padding: 9px 6px;
  }

  td {
    border: none;
    border-bottom: 1px dotted var(--cBlack);
    border-right: 1px dotted var(--cBlack);
    padding: 9px 6px;
    font-family: 'Latin Modern Mono Caps', serif;
    font-size: var(--fz-default);
  }
  td:last-child {
    border-right: none;
  }

  .title {
    text-align: right;
  }

  .habit:last-child {
    border-bottom: 0;
  }

  .track button {
    background-color: transparent;
    appearance: none;
    border: none;
    width: 100%;
    height: 20px;
    display: inline-block;
    cursor: pointer;
  }

  .track {
    padding: 0;
  }

  .empty {
    text-align: center;
  }
</style>
