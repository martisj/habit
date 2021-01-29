<script>
  import { resetHabits } from '../store/habits'
</script>

<button on:click={resetHabits}>Reset Habits</button>

<style>
  button {
    margin-top: 10px;
  }
</style>
