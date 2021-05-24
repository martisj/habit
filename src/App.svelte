<script lang="ts">
  import { onMount } from 'svelte'
  import sanityClient from '@sanity/client'
  import groq from 'groq'

  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import Container from './components/Container.svelte'
  import type { Habit } from './types/Habit'

  const sanity = sanityClient({
    apiVersion: 'v2021-03-25',
    projectId: 'k4ho43fa',
    dataset: 'production',
    token:
      'skrCjwqOk1vmzzjVhdHkaEjdr9IoBLlkOf1qY0BICw0MtIEFHBLpfq4FVJR1JnCwD4JuCJgA2sziVqCJe0vAYgk2SgkVqUAQFvWOhoKr0XFhbh9nikijXfoxskhHzth5LwbFSM2mC2YhW6uqJz90gHfx0BWyI84lk8yx5cuS82UUh5goMXPQ',
    useCdn: false,
  })

  let isEditing = false
  let habits: Habit[] = []
  async function fetchHabits() {
    const query = groq`*[_type == 'habit' ] {_id, title, description }`
    habits = await sanity.fetch(query)
  }

  onMount(fetchHabits)

</script>

<div class="py-2 px-3 m-auto w-11/12 lg:w-8/12 lg:max-w-6xl">
  <AppHeader />
  <Container>
    <button on:click={() => (isEditing = !isEditing)}
      >{isEditing ? 'Done' : 'Edit'}</button
    >
    <Habits {habits} {isEditing} />
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
    --logo-color: var(--cTeal);
    --fz-small: calc((12 / 16) * 1rem);
    --fz-default: calc((14 / 16) * 1rem);
    --fz-large: calc((17 / 16) * 1rem);
    --fz-h1: calc((21 / 16) * 1rem);
    --ff-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(body) {
    margin: 0;
    font-family: var(--ff-system);
    font-feature-settings: 'case', 'ss01', 'ss02';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--cSepia);
    color: var(--cBlack);
  }

</style>
