<script>
  import HabitInput from './HabitInput.svelte'
</script>

<div>
  <header>
    <h1>HABID</h1>
    <p>a time for everything is a place to start</p>
  </header>
  <HabitInput />
</div>

<style>
  header {
    margin-bottom: 7px;
    font-size: var(--fz-small);
  }
  h1 {
    font-size: var(--fz-h1);
    margin: 0;
  }
  p {
    margin: 0;
  }
</style>
