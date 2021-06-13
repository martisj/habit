<script lang="ts">
  import { onMount } from 'svelte'
  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import type { Habit } from './types/Habit'
  import type { JSONResponse } from './types/JSONResponse'

  let isEditing = false
  let vanes: Habit[]

  onMount(async function fetchVanes() {
    const response = await fetch('http://localhost:3001/vanes', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
    const json: JSONResponse<Habit[]> = await response.json()
    if (response.ok) {
      if (json.vanes) {
        vanes = json.vanes
      }
    }
  })

</script>

{#if vanes}
  <div class="pb-2 px-3 m-auto w-11/12 lg:w-8/12 lg:max-w-6xl">
    <AppHeader />
    <div class="mt-4">
      <button on:click={() => (isEditing = !isEditing)}
        >{isEditing ? 'Done' : 'Edit'}</button
      >
      <Habits {vanes} />
    </div>
  </div>
{:else}
  <div>loading...</div>
{/if}

<style windi:preflights:global windi:safelist:global>
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
