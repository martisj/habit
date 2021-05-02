<script>
  import dayjs from 'dayjs'
  import { history } from '../store/history'
  export let entry
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
