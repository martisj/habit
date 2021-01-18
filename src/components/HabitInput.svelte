<script>
  import { habits } from '../store/habits'
  let inputHabit = ''
  const clearInputHabit = () => (inputHabit = '')
</script>

<div>
  <form
    action=""
    on:submit|preventDefault={() => {
      habits.add(inputHabit)
      clearInputHabit()
    }}
  >
    <label for="habit">What gets measured gets managed -- Peter Drucker</label>
    <div class="flex">
      <input
        bind:value={inputHabit}
        type="text"
        id="habit"
        placeholder="Run from a ZOMBIE️ 🧟‍♂️"
      />
      <button type="submit">TRACK IT!</button>
    </div>
  </form>
</div>

<style>
  .flex {
    display: flex;
  }

  button {
    background-color: var(--cBlack);
    appearance: none;
    color: var(--cSand);
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    line-height: 1;
    display: block;
    padding: 11px 18px;
    font-weight: bold;
    font-size: 14px;
    justify-self: flex-end;
  }

  input {
    flex: 1;
    line-height: 1;
    padding: 11px 18px;
    font-size: 20px;
    display: block;
    border: 2px solid var(--cBlack);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-weight: bold;
  }

  input:focus {
    outline-offset: -2px;
    outline-style: solid;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  label {
    margin-bottom: 10px;
  }
</style>
