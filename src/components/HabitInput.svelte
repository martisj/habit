<script>
  import { addHabit } from '../store/habits'
  let inputHabit = ''
  const clearInputHabit = () => (inputHabit = '')
</script>

<div>
  <form
    action=""
    on:submit|preventDefault={() => {
      addHabit(inputHabit)
      clearInputHabit()
    }}
  >
    <label for="habit">add habits you want to track</label>
    <div class="flex">
      <input
        bind:value={inputHabit}
        type="text"
        id="habit"
        placeholder="1 pushup a day keeps the doctor at bay"
      />
      <button type="submit">add</button>
    </div>
  </form>
</div>

<style>
  .flex {
    display: flex;
    width: 50%;
    min-width: 260px;
  }

  button {
    background-color: var(--cSand);
    appearance: none;
    color: var(--cBlack);
    border: none;
    border-bottom: 2px solid var(--cChino);
    line-height: 1;
    display: block;
    padding: 11px 18px;
    font-weight: bold;
    font-size: var(--fz-default);
    font-family: var(--ff-system);
    justify-self: flex-end;
  }

  input {
    flex: 1;
    line-height: 1;
    padding: 11px 18px;
    font-size: var(--fz-large);
    display: block;
    background-color: var(--cSepia);
    border: none;
    border-bottom: 2px solid var(--cChino);
    font-family: var(--ff-system);
  }

  input:focus {
    outline-offset: -2px;
    outline-style: solid;
    outline-color: var(--cChino);
  }

  label {
    margin-bottom: 10px;
    font-size: var(--fz-small);
  }
</style>
