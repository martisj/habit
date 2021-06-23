<script lang="ts">
  import type { Dayjs } from 'dayjs'

  import { history } from '../store/history'
  import type { DayTuple } from '../types/DayTuple'
  import type { Habit } from '../types/Habit'
  import { isDoneForDay } from '../utils'

  export let habit: Habit
  export let isEditing: boolean
  export let today: DayTuple
  export let days: Dayjs[]
  export let destroyVane: (id: string) => void
  export let logVane: (vaneId: string, day: string) => Promise<void>
</script>

<div class="py-3 px-1 text-right bg-sepia relative">
  {#if isEditing}
    <button
      class="px-4 appearance-none absolute left-0 top-0 bottom-0 text-xl text-rose-500 font-medium leading-none"
      on:click={() => destroyVane(habit._id)}>&times;</button
    >
  {/if}
  <strong>{habit.title}</strong>
</div>
{#each days as day}
  <div class="p-0 {isDoneForDay(habit, day) ? 'bg-transparent' : 'bg-sepia'}">
    <button
      class="text-2xl bg-transparent appearance-none border-0 w-full h-5 inline-block cursor-pointer"
      on:click={() => logVane(habit._id, day.format('YYYY-MM-DD'))}
      disabled={isDoneForDay(habit, day)}
      >{isDoneForDay(habit, day) ? '' : '○'}</button
    >
  </div>
{/each}
