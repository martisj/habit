<script>
  import dayjs from 'dayjs'
  import { habitPoints } from '../store/habitPoints'
  export let point
</script>

<div on:click={() => habitPoints.undo(point._id)}>
  {point.habitId}.
  {point.dateSlug.join('. ')} @ {dayjs(point.timestamp).format(
    'hh:mm on MMM D YYYY'
  )}
</div>

<style>
  div:hover {
    color: red;
    cursor: pointer;
  }
</style>
