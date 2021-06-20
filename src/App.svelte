<script lang="ts">
  import Habits from './components/Habits.svelte'
  import AppHeader from './components/AppHeader.svelte'
  import { onMount } from 'svelte'
  import type { Habit } from './types/Habit'

  let isLoading = false
  type Endpoints = 'vane' | 'vanes' | 'vane/log'
  const apiUrl = (url: Endpoints) => `http://localhost:3001/${url}`
  const destroyUrl = (id: string) => `${apiUrl('vane')}/${id}`

  let vanes: Habit[] = []
  async function fetchData() {
    const headers = {
      'Content-type': 'application/json',
    }
    const method = 'GET'
    isLoading = true
    const response = await fetch(apiUrl('vanes'), { method, headers })
    const json = await response.json()

    if (response.ok) {
      vanes = json.vanes
    }
    isLoading = false
  }

  onMount(fetchData)

  async function postVane(title: string) {
    isLoading = true
    const response = await fetch(apiUrl('vane'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ title }),
    })
    if (response.ok) {
      await fetchData()
    } else {
      throw new Error('Cannot post vane')
    }
    isLoading = false
  }

  async function destroyVane(id: string) {
    isLoading = true
    const response = await fetch(destroyUrl(id), {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      mode: 'cors',
      credentials: 'include',
    })
    if (response.ok) {
      await fetchData()
    } else {
      throw new Error('Cannot post vane')
    }
    isLoading = false
  }

  async function logVane(vaneId: string, day: string) {
    isLoading = true
    const response = await fetch(apiUrl('vane/log'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ vaneId, day }),
    })
    if (response.ok) {
      await fetchData()
    } else {
      throw new Error('Cannot log vane')
    }
    isLoading = false
  }

  let isEditing = false
  const toggleIsEditing = () => (isEditing = !isEditing)

</script>

<div class="pb-2 px-3 m-auto w-11/12 lg:w-8/12 lg:max-w-6xl">
  <AppHeader {postVane} />
  <div class="mt-4">
    <button
      on:click={toggleIsEditing}
      class="bg-orange-400 appearance-none text-orange-900 block py-1 px-2 font-bold uppercase text-xs"
      class:bg-emerald-500={isEditing}
      class:text-emerald-900={isEditing}
      >{isEditing ? '✓ Done' : '✎ Edit'}
    </button>
    {#if !isLoading}
      <Habits {vanes} {destroyVane} {isEditing} {logVane} />
    {:else}
      <span class="flex justify-center p-6 text-xl font-medium animate-pulse"
        >Loading&hellip;</span
      >
    {/if}
  </div>
</div>

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
