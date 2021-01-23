<script>
  import dayjs from 'dayjs'
  import { habits } from '../store/habits'
  import { habitPoints } from '../store/habitPoints'
  const today = dayjs().format('DD MMM').split(' ')
</script>

{#if $habits.length > 0}
  <table class="habits">
    <tr class="habit">
      <th />
      <th><time datetime={new Date()}>{today[0]} {today[1]}</time></th>
    </tr>

    {#each $habits as habit}
      <tr class="habit">
        <td class="title">{habit.title}</td>
        <td class="today">
          <button class="Track" on:click={() => habitPoints.add(habit._id)}>
            &check;
          </button>
          <button on:click={() => habits.remove(habit._id)}>&times;</button>
        </td>
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
  }

  td {
    border: 1px dotted var(--cBlack);
    padding: 9px 6px;
  }

  .today {
    text-align: center;
  }
  .title {
    text-align: right;
  }

  .habit:last-child {
    border-bottom: 0;
  }

  .Track {
    background-color: transparent;
    appearance: none;
    border: 1px solid var(--cBlack);
    border-radius: 3px;
  }

  .empty {
    text-align: center;
  }
</style>
