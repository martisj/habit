<script>
  import dayjs from 'dayjs'
  import { habits } from './store/habits'
  import { habitPoints } from './store/habitPoints'
  import Habits from './views/Habits.svelte'

  let inputHabit = ''
  const clearInputHabit = () => (inputHabit = '')
</script>

<div class="App">
  <header class="App-header">
    <img src="/assets/dreamer-plant.png" alt="logo" class="App-logo" />
    <h1 style="color: #3c5bff">HABID</h1>
    <p>a time for everything is a place to start</p>
    <div style="display: flex; flex-direction: column; width: 60%;">
      <form
        action=""
        on:submit|preventDefault={() => {
          habits.add(inputHabit)
          clearInputHabit()
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
    {#each $habitPoints as point}
      <div class="HabitPoint">
        {point.habitId}
        {dayjs(point.timestamp).format('MMM D YYYY')}
      </div>
    {/each}
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .container {
    width: 90vw;
    margin: 30px auto;
  }

  .App-header {
    background-color: #ffffff;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #0a0a0a;
    text-align: center;
  }

  .Button {
    background-color: #3c5bff;
    appearance: none;
    color: #ffffff;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    line-height: 1;
    display: block;
    padding: 11px 18px;
    font-weight: bold;
    font-size: 14px;
  }

  .Input {
    line-height: 1;
    padding: 11px 18px;
    font-size: 20px;
    display: block;
    border: 2px solid #3c5bff;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-weight: bold;
  }

  .Input:focus {
    outline-offset: -2px;
    outline-style: solid;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .App-logo {
    height: 30vmin;
    pointer-events: none;
    margin-bottom: 2rem;
    animation: App-logo-breathe infinite 2.2s ease-in-out alternate;
  }

  .HabitPoint:hover {
    color: red;
  }

  @keyframes App-logo-breathe {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
</style>
