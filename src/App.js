import m from 'mithril';
import dayjs from 'dayjs';
import { Habit } from '@models/Habit';
import { HabitPoint } from '@models/HabitPoint';
import { Habits } from '@views/Habits';
import dreamer from './assets/dreamer-plant.png';
import './App.css';

export const App = {
  view: function () {
    console.log(HabitPoint.history);
    return m('App', [
      m('header.App-header', [
        m('img.App-logo[alt=logo]', { src: dreamer }),
        m('h1', { style: { color: '#3c5bff' } }, 'HABID'),
        m('p', 'a time for everything is a place to start'),
        m(
          'div',
          {
            style: {
              display: 'flex',
              'flex-direction': 'column',
              width: '60%',
            },
          },
          [
            m(
              'label',
              { for: 'habit', style: { 'margin-bottom': 10 } },
              'What habit to track?',
            ),
            m(
              'form',
              {
                action: '',
                onsubmit: (e) => {
                  e.preventDefault();
                  Habit.add();
                  Habit.clear();
                },
              },
              [
                m('.flex', [
                  m('input.Input#habit[placeholder=Run from a ZOMBIE️ 🧟‍♂️]', {
                    style: { flex: 1 },
                    oninput: (e) => (Habit.current = e.target.value),
                    value: Habit.current,
                    autofocus: 'autofocus',
                  }),
                  m(
                    'button.Button[type=submit]',
                    {
                      style: { 'justify-self': 'flex-end' },
                    },
                    'TRACK IT!',
                  ),
                ]),
              ],
            ),
          ],
        ),
        m(
          'button',
          {
            style: { marginTop: 10 },
            onclick: () => Habit.addDummies(),
          },
          'Populate with dummies',
        ),
      ]),
      m('main.container', m(Habits)),
      m('.container', [
        HabitPoint.history.map((point) =>
          m(
            '.HabitPoint',
            `${point.habitId} ${dayjs(point.timestamp).format('MMM D YYYY')}`,
          ),
        ),
      ]),
    ]);
  },
};
