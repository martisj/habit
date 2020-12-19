import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import dreamer from './assets/dreamer-plant.png';
import './App.css';
import Habits from './components/Habits';

function App() {
  const [habits, setHabits] = useState([]);
  const habitInput = useRef(null);
  console.log(habits);
  const addHabit = (value) => {
    setHabits([...habits, ...value]);
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
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              addHabit(habitInput.current && [habitInput.current.value]);
              habitInput.current.value = '';
            }}
          >
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
                onClick={() => {
                  addHabit(habitInput.current && [habitInput.current.value]);
                  habitInput.current.value = '';
                }}
              >
                TRACK IT!
              </button>
            </div>
          </form>
        </div>
        <button
          style={{ marginTop: 10 }}
          onClick={() =>
            addHabit([
              'Lift some weights',
              'get some air',
              'run flat out for 60 seconds',
            ])
          }
        >
          Populate with dummies
        </button>
      </header>
      <main style={{ width: '90vw', margin: '30px auto' }}>
        <Habits habits={habits} />
      </main>
    </div>
  );
}

export default App;
