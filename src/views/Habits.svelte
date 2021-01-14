<script lang="ts">
  import { Habit } from '../models/Habit';
  import { HabitPoint } from '../models/HabitPoint';
  import FutureDays from './FutureDays.svelte';
</script>

{#if Habit.list.length > 0}
  <div class="Habits">
    <FutureDays />
    {#each Habit.list as { title, _id }}
      <div class="Habit">
        <button class="Track" on:click={() => HabitPoint.add(_id)}> 🏋️‍♂️ </button>
        <span>{title}</span>
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
  }

  .Habit {
    border-right: 2px solid #3c5bff;
    border-bottom: 2px solid #3c5bff;
    padding: 22px 36px;
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
