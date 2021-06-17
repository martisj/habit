<script lang="ts">
  import HabitInput from './HabitInput.svelte'

  export let postVane: (title: string) => Promise<void>

</script>

<div>
  <header class="mb-2 text-size-sm flex items-end">
    <h1
      class="text-size-xl text-orange-900 bg-orange-400 align-text-bottom pt-3 px-1 mr-2 rounded"
    >
      Vane
    </h1>
    <figure class="flex">
      <blockquote class="font-serif italic mr-2">
        <p>A jug fills drop by drop</p>
      </blockquote>
      <figcaption class="text-right">&mdash; Buddha</figcaption>
    </figure>
  </header>
  <HabitInput {postVane} />
</div>
