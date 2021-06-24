<script lang="ts">
  type Bg = 'bg-transparent' | 'bg-emerald-300' | 'bg-sepia' | 'bg-orange-400'
  export let bg: Bg = 'bg-transparent'
</script>

<div
  class={`w-16 h-10 flex justify-center items-center border-b-1 border-black ${bg}`}
>
  <slot />
</div>
