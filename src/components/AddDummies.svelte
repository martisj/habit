<script>
  import { addDummyHabits } from '../store/habits'
</script>

<button on:click={addDummyHabits}>Populate with dummies</button>

<style>
  button {
    margin-top: 10px;
  }
</style>
