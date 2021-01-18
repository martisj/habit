<script>
  import { habits } from '../store/habits'
</script>

<button on:click={habits.addDummies}>Populate with dummies</button>

<style>
  button {
    margin-top: 10px;
  }
</style>
