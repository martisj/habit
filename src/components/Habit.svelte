<script>
  import { removeHabit } from '../store/habits'
  import { history, historyAdd } from '../store/history'
  import { isSameDay, isDoneForDay } from '../utils'
  export let habit
  export let isEditing
  export let today
  export let days
</script>

<tr class="habit">
  <td class="track invisible" class:visible={isEditing}>
    <button on:click={() => removeHabit(habit._id)}>&times;</button>
  </td>
  <td class="title">{habit.title}</td>
  {#each days as day}
    <td
      class="track"
      class:highlight={isSameDay(day, today)}
      class:transparent={isDoneForDay(habit._id, day, $history)}
    >
      <button
        on:click={() => historyAdd(habit._id, day)}
        disabled={isDoneForDay(habit._id, day, $history)}
        >{isDoneForDay(habit._id, day, $history) ? '' : '•'}</button
      >
    </td>
  {/each}
</tr>

<style>
  .transparent {
    background-color: transparent !important;
  }

  .invisible {
    visibility: hidden;
  }

  .invisible.visible {
    visibility: visible;
  }

  .habit:last-child {
    border-bottom: 0;
  }

  td {
    border: none;
    border-bottom: 1px dotted var(--cBlack);
    border-right: 1px dotted var(--cBlack);
    padding: 9px 6px;
    font-family: 'Latin Modern Mono Caps', serif;
    font-size: var(--fz-default);
    background-color: var(--cSepia);
  }

  td:last-child {
    border-right: none;
  }

  .title {
    text-align: right;
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
</style>
