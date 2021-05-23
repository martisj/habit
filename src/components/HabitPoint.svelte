<script lang="ts">
  import dayjs from 'dayjs'
  import { history } from '../store/history'
  export let entry: {
    _id: any
    habitId: any
    dateSlug: any[]
    timestamp: dayjs.Dayjs
  }

</script>

<div
  class="hover:color-red-500 hover:cursor-pointer"
  on:click={() => history.undo(entry._id)}
>
  {entry.habitId}.
  {entry.dateSlug.join('. ')} @ {dayjs(entry.timestamp).format(
    'hh:mm on MMM D YYYY'
  )}
</div>
