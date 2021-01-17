<script>
  import dayjs from 'dayjs'
  export let point
</script>

<div>
  {point.habitId}
  {dayjs(point.timestamp).format('MMM D YYYY')}
</div>

<style>
  div:hover {
    color: red;
  }
</style>
