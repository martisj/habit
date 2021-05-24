<script lang="ts">
  import { HabitStore } from '../store/habits'
  let inputHabit = ''
  const clearInputHabit = (): void => {
    inputHabit = ''
  }

</script>

<div>
  <form
    action=""
    on:submit|preventDefault={async () => {
      HabitStore.add(inputHabit)
      clearInputHabit()
    }}
  >
    <label for="habit" class="uppercase text-xs tracking-wide font-semibold"
      >add the habit you want to do</label
    >
    <div class="flex w-auto border-0 border-bottom-2 border-chino">
      <input
        bind:value={inputHabit}
        type="text"
        id="habit"
        placeholder="1 pushup a day keeps the doctor at bay"
        class="bg-white flex-1 py-3 px-4 text-size-lg block bg-sepia focus:outline-none focus:ring-2 focus:ring-chino"
      />
      <button
        class="bg-sand appearance-none color-black block py-3 px-4 font-bold justify-self-end"
        type="submit">add</button
      >
    </div>
  </form>
</div>
