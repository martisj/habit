<script>
  import { habitPoints } from './store/habitPoints'
  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import Container from './components/Container.svelte'
  import HabitPoint from './components/HabitPoint.svelte'
  import localforage from 'localforage'
  localforage.config({
    name: 'Habid',
    description: 'Saving the world one habit at a time',
  })
  const l = localforage.getItem('habits').then(console.log)
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
    --cGrey: hsl(0, 9%, 76%);
    --cChino: hsl(41, 29%, 72%);
    --cSand: hsl(48, 87%, 91%);
    --cTeal: hsl(187, 69%, 55%);
    --bg-color: var(--cSepia);
    --logo-color: var(--cTeal);
    --font-size--small: calc((11 / 16) * 1rem);
    --font-size--default: calc((14 16) * 1rem);
    --font-size--large: calc((16 / 16) * 1rem);
  }

  :global(body) {
    margin: 0;
    font-family: 'Hoefler Text', Iosevka, 'Courier Prime Code', 'IBM Plex Mono',
      'Anonymous Pro', 'Space Mono', Courier, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--cSepia);
    color: var(--cBlack);
  }
</style>
