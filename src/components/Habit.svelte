<script lang="ts">
  import { habits } from '../store/habits'
  import { history } from '../store/history'
  import { isSameDay, isDoneForDay, DayTuple } from '../utils'
  export let habit: { _id: string; title: string }
  export let isEditing: boolean
  export let today: DayTuple
  export let days: DayTuple[]

</script>

<tr class="divide-x-1 divide-y-1 divide-black">
  <td class="bg-sepia p-0 border-0">
    <button
      class={isEditing ? 'visible' : 'invisible'}
      on:click={() => habits.remove(habit._id)}>&times;</button
    >
  </td>
  <td class="bg-sepia py-3 px-1 text-right">{habit.title}</td>
  {#each days as day}
    <td
      class="p-0 {isDoneForDay(habit._id, day, $history)
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
    </td>
  {/each}
</tr>
