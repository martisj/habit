import m from 'mithril';
import { Habit } from '../models/Habit';
import { HabitPoint } from '../models/HabitPoint';
import { FutureDays } from './FutureDays';

export const Habits = () =>
  Habit.list.length > 0 ? (
    <div className="Habits">
      <FutureDays />
      {Habit.list.map(({ title, _id }) => (
        <div className="Habit">
          <button className="Track" onclick={() => HabitPoint.add(_id)}>
            🏋️‍♂️
          </button>
          <span>{title}</span>
        </div>
      ))}
    </div>
  ) : (
    <div style={{ textAlign: 'center' }}>
      🥵 your habit list is awfully empty, time to get cracking
    </div>
  );
