<script>
  import dayjs from 'dayjs'
  import { historyUndo } from '../store/history'
  export let entry
</script>

<div on:click={() => historyUndo(entry._id)}>
  {entry.habitId}.
  {entry.dateSlug.join('. ')} @ {dayjs(entry.timestamp).format(
    'hh:mm on MMM D YYYY'
  )}
</div>

<style>
  div:hover {
    color: red;
    cursor: pointer;
  }
</style>
