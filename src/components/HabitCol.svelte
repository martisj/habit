<script lang="ts">
  import type { Dayjs } from 'dayjs'
  import { DAY_FORMAT } from '../constants'
  import Box from './Box.svelte'

  import type { DayTuple } from '../types/DayTuple'
  import type { Habit } from '../types/Habit'
  import { isDoneForDay, isSameDay, toDayTuple } from '../utils'

  export let habit: Habit
  export let isEditing: boolean
  export let today: DayTuple
  export let days: Dayjs[]
  export let destroyVane: (id: string) => void
  export let logVane: (vaneId: string, day: string) => Promise<void>
  export let unlogVane: (vaneId: string, day: string) => Promise<void>
</script>

<div class="flex flex-col">
  <div class="py-3 px-1 relative whitespace-nowrap border-b-1 border-black">
    {#if isEditing}
      <button
        class="px-4 appearance-none absolute left-0 top-0 bottom-0 text-xl text-rose-500 font-medium leading-none"
        on:click={() => destroyVane(habit._id)}>&times;</button
      >
    {/if}
    <div class="transform -rotate-90 block origin-top-left center">
      <strong class="font-medium text-base">{habit.title}</strong>
    </div>
  </div>
  <div class="border-r-1 border-black">
    {#each days as day}
      <Box
        bg={isDoneForDay(habit, day)
          ? 'bg-emerald-300'
          : isSameDay(today, toDayTuple(day))
          ? 'bg-orange-400'
          : undefined}
      >
        <button
          type="button"
          class="text-2xl bg-transparent appearance-none border-0 w-full h-full"
          on:click={() => {
            const fun = isDoneForDay(habit, day) ? unlogVane : logVane
            fun(habit._id, day.format(DAY_FORMAT))
          }}>{isDoneForDay(habit, day) ? '\xa0' : '○'}</button
        >
      </Box>
    {/each}
  </div>
</div>
