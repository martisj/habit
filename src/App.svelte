<script lang="ts">
  import dayjs from 'dayjs';
  import { Habit } from './models/Habit';
  import { HabitPoint } from './models/HabitPoint';
  import Habits from './views/Habits.svelte';
  import dreamer from '../public/assets/dreamer-plant.png';

  $: console.log(Habit.current);
</script>

<div class="App">
  <div class="App">
    <header class="App-header">
      <img src={dreamer} alt="logo" class="App-logo" />
      <h1 style="color: '#3c5bff'">HABID</h1>
      <p>a time for everything is a place to start</p>
      <div style="display: 'flex'; flexDirection: 'column'; width: '60%';">
        <form
          action=""
          on:submit={(e) => {
            e.preventDefault();
            Habit.add();
            Habit.clear();
          }}
        >
          <label for="habit" style="marginBottom: 10">
            What habit to track?
          </label>
          <div class="flex">
            <input
              bind:value={Habit.current}
              style="flex: 1"
              type="text"
              class="Input"
              id="habit"
              placeholder="Run from a ZOMBIE️ 🧟‍♂️"
            />
            <button
              style="justifySelf: 'flex-end'"
              class="Button"
              type="submit"> TRACK IT! </button>
          </div>
        </form>
      </div>
      <button style="marginTop: 10" onclick={() => Habit.addDummies()}>
        Populate with dummies
      </button>
    </header>
    <main class="container">
      <Habits />
    </main>
    <div class="container">
      {#each HabitPoint.history as point}
        <div class="HabitPoint">
          {point.habitId}
          {dayjs(point.timestamp).format('MMM D YYYY')}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* css will go here */
</style>
