<script>
  import HabitInput from './HabitInput.svelte'
  import AddDummies from './AddDummies.svelte'
  import ResetHabits from './ResetHabits.svelte'
</script>

<div>
  <header>
    <h1>HABID</h1>
    <p>a time for everything is a place to start</p>
  </header>
  <HabitInput />
  <AddDummies />
  <ResetHabits />
</div>

<style>
  header {
    display: flex;
    align-items: center;
    font-size: calc(6px + 1vmin);
  }

  h1 {
    font-size: 18px;
    margin-right: 6px;
    font-weight: normal;
  }
</style>
