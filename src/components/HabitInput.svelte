<script lang="ts">
  let inputHabit = ''
  const clearInputHabit = (): void => {
    inputHabit = ''
  }

  export let postVane: (title: string) => Promise<void>

</script>

<div>
  <form
    action=""
    on:submit|preventDefault={async () => {
      try {
        console.log(inputHabit)
        await postVane(inputHabit)
        clearInputHabit()
      } catch (error) {
        console.error(error)
      }
    }}
  >
    <label for="habit" class="uppercase text-xs tracking-wide font-semibold"
      >add the habit you want to nail</label
    >
    <div
      class="flex w-auto border-0 border-bottom-2 border-orange-500 relative"
    >
      <input
        bind:value={inputHabit}
        type="text"
        id="habit"
        placeholder="1 pushup a day keeps the doctor at bay"
        class="bg-white flex-1 py-3 px-4 text-size-lg block focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        class="bg-orange-400 appearance-none text-orange-900 block py-3 px-4 font-bold justify-self-end uppercase text-sm absolute right-0 top-0 bottom-0"
        type="submit">add</button
      >
    </div>
  </form>
</div>
