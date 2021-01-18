<script>
  import { habitPoints } from './store/habitPoints'
  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import Container from './components/Container.svelte'
  import HabitPoint from './components/HabitPoint.svelte'
</script>

<div>
  <AppHeader />
  <Container>
    <Habits />
  </Container>
  <Container>
    {#each $habitPoints as point}
      <HabitPoint {point} />
    {/each}
  </Container>
</div>

<style>
  :root {
    --cSepia: hsl(48, 87%, 88%);
    --cDarkSepia: hsl(48, 66%, 66%);
    --cBlack: hsl(0, 13%, 8%);
    --cSand: hsl(48, 87%, 91%);
    --cTeal: hsl(187, 69%, 55%);
    --bg-color: var(--cSepia);
    --logo-color: var(--cTeal);
  }

  :global(body) {
    margin: 0;
    font-family: 'Space Mono', 'Anonymous Pro', 'IBM Plex Mono', 'Courier',
      monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--cSepia);
    color: var(--cBlack);
  }
</style>
