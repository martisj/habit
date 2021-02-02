<script>
  import { habits } from '../store/habits'
</script>

<button on:click={habits.reset}>Reset Habits</button>

<style>
  button {
    margin-top: 10px;
  }
</style>
