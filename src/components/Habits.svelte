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

<table
  class="bg-dreamer text-sm border-collapse divide-y-reverse-1 divide-black divide-dotted"
>
  <tr class="bg-sepia divide-x-1 divide-black divide-dotted">
    <th class="align-bottom text-sm py-2 px-1 border-0 text-right" />
    <th class="align-bottom text-sm py-3 px-1 text-right">Stick it</th>

    {#each days as day}
      <th class="px-3 py-2" class:highlight={isSameDay(day, today)}>
        <span class="block text-center font-bold text-lg">{day[0]}</span
        >{day[1]}
      </th>
    {/each}
  </tr>

  {#each habits as habit}
    <HabitRow {habit} {isEditing} {today} {days} />
  {:else}
    <tr class="text-center"
      ><td colspan={days.length + 2} class="text-xl font-bold bg-sepia py-6"
        >😬 Your habit list is awfully empty, time to add one.</td
      ></tr
    >
  {/each}
</table>
