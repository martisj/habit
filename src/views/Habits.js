import m from 'mithril';
import dayjs from 'dayjs';
import { Habit } from '@models/Habit';
import { HabitPoint } from '@models/HabitPoint';
import Lol from './Lol';

const FutureDays = {
  view: () => {
    m(
      '.Future',
      Array(7)
        .fill(-3)
        .map((day, idx) =>
          m('.Day', `ioijo ${day} ${dayjs().add(idx + day, 'day')}`),
        ),
    );
  },
};

export const Habits = {
  view: () =>
    Habit.list.length > 0
      ? m(
          '.Habits',
          Habit.list.map(({ title, _id }) =>
            m('.Habit', [
              m('button.Track', { onclick: () => HabitPoint.add(_id) }, '🏋️‍♂️'),
              m('span', title),
              m('.hoh', FutureDays),
            ]),
          ),
        )
      : m(Lol),
};
