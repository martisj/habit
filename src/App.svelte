<script>
  import { habitPoints } from './store/habitPoints'
  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import Container from './components/Container.svelte'
  import HabitPoint from './components/HabitPoint.svelte'
</script>

<div class="App">
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
