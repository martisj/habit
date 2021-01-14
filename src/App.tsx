import m from 'mithril';
import dayjs from 'dayjs';
import { Habit } from './models/Habit';
import { HabitPoint } from './models/HabitPoint';
import { Habits } from './views/Habits';
import dreamer from './assets/dreamer-plant.png';
import './App.css';

export const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dreamer} alt="logo" className="App-logo" />
        <h1 style={{ color: '#3c5bff' }}>HABID</h1>
        <p>a time for everything is a place to start</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
          }}
        >
          <form
            action=""
            onsubmit={(e: Event) => {
              e.preventDefault();
              Habit.add();
              Habit.clear();
            }}
          >
            <label htmlFor="habit" style={{ marginBottom: 10 }}>
              What habit to track?
            </label>
            <div className="flex">
              <input
                oninput={(e: { target: HTMLInputElement }) =>
                  (Habit.current = e.target.value)
                }
                style={{ flex: 1 }}
                type="text"
                className="Input"
                id="habit"
                placeholder="Run from a ZOMBIE️ 🧟‍♂️"
                autofocus="autofocus"
                value={Habit.current}
              />
              <button
                style={{ justifySelf: 'flex-end' }}
                className="Button"
                type="submit"
              >
                TRACK IT!
              </button>
            </div>
          </form>
        </div>
        <button style={{ marginTop: 10 }} onclick={() => Habit.addDummies()}>
          Populate with dummies
        </button>
      </header>
      <main className="container">
        <Habits />
      </main>
      <div className="container">
        {HabitPoint.history.map((point) => (
          <div className="HabitPoint">
            {`${point.habitId} ${dayjs(point.timestamp).format('MMM D YYYY')}`}
          </div>
        ))}
      </div>
    </div>
  );
};
