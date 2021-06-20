<script lang="ts">
  import dayjs from 'dayjs'
  import HabitRow from './HabitRow.svelte'
  import type { Habit } from '../types/Habit'
  import {
    isSameDay,
    formatDdMmmArr,
    calculateDaysToShow,
    rawCalculateDaysToShow,
  } from '../utils'

  export let isEditing: boolean
  export let vanes: Habit[]
  export let destroyVane: (id: string) => Promise<void>
  export let logVane: (vaneId: string, day: string) => Promise<void>

  const daysToShow = 4
  const today = formatDdMmmArr(dayjs())
  const days = calculateDaysToShow(daysToShow)
  const rawDays = rawCalculateDaysToShow(daysToShow)
  console.log(days.length + 1)

</script>

<div class="grid grid-cols-6 text-sm bg-pixie">
  <div class="bg-sepia" />
  {#each days as day}
    <div
      class="text-center px-3 py-2 bg-sepia"
      class:bg-white={isSameDay(day, today)}
    >
      <span class="block font-bold text-lg">{day[0]}</span><span>{day[1]}</span>
    </div>
  {/each}

  {#each vanes as habit}
    <HabitRow
      {habit}
      {today}
      {days}
      {rawDays}
      {isEditing}
      {logVane}
      {destroyVane}
    />
  {:else}
    <div
      colspan={days.length + 2}
      class="text-center text-xl font-bold bg-sepia py-6"
    >
      😬 Your habit list is awfully empty, time to add one.
    </div>
  {/each}
</div>
