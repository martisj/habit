<script lang="ts">
  import { history } from '../store/history'
  import type { DayTuple } from '../types/DayTuple'
  import type { Habit } from '../types/Habit'
  import { isSameDay, isDoneForDay } from '../utils'

  export let habit: Habit
  export let isEditing: boolean
  export let today: DayTuple
  export let days: DayTuple[]

</script>

<div
  class="table-row divide-x-1 divide-y-1 divide-y-reverse last:divide-y-0 divide-chino"
>
  <div class="table-cell bg-sepia p-0">
    <button
      class={isEditing ? 'visible' : 'invisible'}
      on:click={() => console.log('TODO: destroy endpoint', habit._id)}
      >&times;</button
    >
  </div>
  <div class="table-cell bg-sepia py-3 px-1 text-right">
    {habit.title}
  </div>
  {#each days as day}
    <div
      class="table-cell align-middle p-0 {isDoneForDay(habit._id, day, $history)
        ? 'bg-transparent'
        : 'bg-sepia'}"
      class:highlight={isSameDay(day, today)}
    >
      <button
        class="text-2xl bg-transparent appearance-none border-0 w-full h-5 inline-block cursor-pointer"
        on:click={() => history.add(habit._id, day)}
        disabled={isDoneForDay(habit._id, day, $history)}
        >{isDoneForDay(habit._id, day, $history) ? '' : '•'}</button
      >
    </div>
  {/each}
</div>
