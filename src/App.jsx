import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import dreamer from './assets/dreamer-plant.png';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const habitInput = useRef(null);
  console.log(habits);
  const addHabit = (e) => {
    e.preventDefault();
    if (habitInput.current) {
      setHabits([...habits, habitInput.current.value]);
      habitInput.current.value = '';
    }
  };

  useEffect(() => {
    if (habitInput.current) {
      habitInput.current.focus();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={dreamer} className="App-logo" alt="logo" />
        <h1 style={{ color: '#3c5bff' }}>HABID</h1>
        <p>a time for everything is a place to start</p>
        <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
          <label htmlFor="habit" style={{ marginBottom: 10 }}>
            What habit to track?
          </label>
          <form action="" onSubmit={addHabit}>
            <div style={{ display: 'flex' }}>
              <input
                className="Input"
                id="habit"
                ref={habitInput}
                placeholder="Run from a ZOMBIE️ 🧟‍♂️"
                style={{ flex: 1 }}
              />
              <button
                type="submit"
                style={{ justifySelf: 'flex-end' }}
                className="Button"
                onClick={addHabit}
              >
                TRACK IT!
              </button>
            </div>
          </form>
        </div>
      </header>
      <main>
        {habits.length > 0 && (
          <ul className="Habits">
            {habits.map((habit) => (
              <li className="Habit">{habit}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
