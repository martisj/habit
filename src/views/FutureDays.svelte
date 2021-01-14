<script lang="ts">
  import dayjs from 'dayjs';

  const theFuture = (daysToShow: number) =>
    Array(daysToShow)
      .fill(Math.ceil(daysToShow / 2) * -1)
      .map((day, idx) =>
        dayjs()
          .add(idx + day, 'day')
          .format('DD. MMM')
      );
</script>

<div class="FutureDays">
  {#each theFuture(7) as day}
    <div>{day}</div>
  {/each}
</div>

<style>
  .FutureDays {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>
