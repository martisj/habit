import m from 'mithril';
import { Habit } from '@models/Habit';
import { HabitPoint } from '@models/HabitPoint';

export const Habits = {
  view: () =>
    Habit.list.length > 0
      ? m(
          '.Habits',
          m(
            '.Dates',
            Habit.list.map(({ title, _id }) =>
              m('.Habit', { onclick: () => HabitPoint.add(_id) }, title),
            ),
          ),
        )
      : m(
          'div',
          { style: { 'text-align': 'center' } },
          '🥵 your habit list is awfully empty, time to get cracking',
        ),
};
