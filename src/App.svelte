<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  let count = 0;
  onMount(() => {
    const i = setInterval(() => count++, 1000);
    return () => {
      clearInterval(i);
    };
  });
</script>

<div class="App">
  <header class="App-header">
    <img src="/assets/dreamer-plant.png" class="App-logo" alt="logo" />
    <a
      class="App-link"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"> Learn Svelte the hard way please</a
    >
  </header>
  <p>You have been on this page for <code>{count}</code> seconds</p>
  <p>That's actually pretty nice</p>
  thank youuuuuu I can work with this
</div>

<style>
  /* css will go here */
</style>
