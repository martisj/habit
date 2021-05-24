<script lang="ts">
  import dayjs from 'dayjs'
  import HabitRow from './HabitRow.svelte'
  import type { Habit } from '../types/Habit'
  import { isSameDay, formatDdMmmArr, calculateDaysToShow } from '../utils'

  export let isEditing: boolean
  export let habits: Habit[]

  const daysToShow = 10
  const today = formatDdMmmArr(dayjs())
  const days = calculateDaysToShow(daysToShow)

</script>

<div
  class="table bg-dreamer text-sm border-collapse divide-y-reverse-1 divide-black divide-dotted"
>
  <div class="table-row bg-sepia divide-x-1 divide-black divide-dotted">
    <div
      class="table-cell align-bottom text-sm py-2 px-1 border-0 text-right"
    />
    <div class="table-cell align-bottom text-sm py-3 px-1 text-right">
      Stick it
    </div>

    {#each days as day}
      <div class="table-cell px-3 py-2" class:highlight={isSameDay(day, today)}>
        <span class="block text-center font-bold text-lg">{day[0]}</span
        >{day[1]}
      </div>
    {/each}
  </div>

  {#each habits as habit}
    <HabitRow {habit} {isEditing} {today} {days} />
  {:else}
    <div class="table-row text-center">
      <div
        colspan={days.length + 2}
        class="table-cell text-xl font-bold bg-sepia py-6"
      >
        😬 Your habit list is awfully empty, time to add one.
      </div>
    </div>
  {/each}
</div>
