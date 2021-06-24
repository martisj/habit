<script lang="ts">
  import dayjs from 'dayjs'
  import HabitCol from './HabitCol.svelte'
  import Box from './Box.svelte'
  import type { Habit } from '../types/Habit'
  import {
    isSameDay,
    toDayTuple,
    calculateDaysToShow,
    rawCalculateDaysToShow,
  } from '../utils'

  export let isEditing: boolean
  export let vanes: Habit[]
  export let destroyVane: (id: string) => Promise<void>
  export let logVane: (vaneId: string, day: string) => Promise<void>
  export let unlogVane: (vaneId: string, day: string) => Promise<void>

  const daysToShow = 10
  const today = toDayTuple(dayjs())
  const days = calculateDaysToShow(daysToShow)
  const rawDays = rawCalculateDaysToShow(daysToShow)
</script>

<div class="flex text-sm">
  <div class="flex flex-col">
    <div class="bg-sepia">
      <span class="text-lg uppercase text-right">{days[0][1]}</span>
    </div>
    {#each days as day}
      <Box bg={isSameDay(today, day) ? 'bg-orange-400' : undefined}>
        <span class="font-bold text-lg">{day[0]}</span>
      </Box>
    {/each}
  </div>

  {#each vanes as habit}
    <HabitCol
      {habit}
      {today}
      days={rawDays}
      {isEditing}
      {logVane}
      {unlogVane}
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
