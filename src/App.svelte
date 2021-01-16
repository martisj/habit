<script lang="ts">
  import dayjs from 'dayjs'
  import { habits } from './store/habits'
  import type { HabitPoint } from './store/HabitPoint'
  import Habits from './views/Habits.svelte'
  import dreamer from '../public/assets/dreamer-plant.png'

  let inputHabit = ''
</script>

<div class="App">
  <header class="App-header">
    <img src={dreamer} alt="logo" class="App-logo" />
    <h1 style="color: #3c5bff">HABID</h1>
    <p>a time for everything is a place to start</p>
    <div style="display: flex; flex-direction: column; width: 60%;">
      <form
        action=""
        on:submit={(e) => {
          e.preventDefault()
          habits.add()
        }}
      >
        <label for="habit" style="margin-bottom: 10px">
          What habit to track?
        </label>
        <div class="flex">
          <input
            bind:value={inputHabit}
            style="flex: 1"
            type="text"
            class="Input"
            id="habit"
            placeholder="Run from a ZOMBIE️ 🧟‍♂️"
          />
          <button style="justify-self: flex-end" class="Button" type="submit">
            TRACK IT!
          </button>
        </div>
      </form>
    </div>
    <button style="margin-top: 10px" on:click={habits.addDummies}>
      Populate with dummies
    </button>
    <button style="margin-top: 10px" on:click={habits.reset}>
      Reset the list
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

<style>
  /* css will go here */
</style>
