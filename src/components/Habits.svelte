<script>
  import { habits } from '../store/habits'
  import { habitPoints } from '../store/habitPoints'
  import FutureDays from './FutureDays.svelte'
</script>

{#if $habits.length > 0}
  <div class="Habits">
    <FutureDays />
    {#each $habits as habit}
      <div class="Habit">
        <button class="Track" on:click={() => habitPoints.add(habit._id)}>
          🏋️‍♂️
        </button>
        <span>{habit.title}</span>
      </div>
    {/each}
  </div>
{:else}
  <div class="Empty">
    🥵 your habit list is awfully empty, time to get cracking
  </div>
{/if}

<style>
  .Habits {
    display: grid;
    flex-direction: column;
    align-items: flex-start;
  }

  .Habit {
    border-bottom: 1px dotted var(--cDarkSepia);
    padding: 22px 36px;
    text-align: right;
  }

  .Habit:last-child {
    border-bottom: 0;
  }

  .Track {
    background-color: transparent;
    appearance: none;
    border: none;
    text-decoration: underline;
  }

  .Empty {
    text-align: center;
  }
</style>
