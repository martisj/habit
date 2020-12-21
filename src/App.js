import m from 'mithril';
import { Habit } from '@models/Habit';
import {Habits} from '@views/Habits';
import dreamer from './assets/dreamer-plant.png';
import './App.css';

export default {
  oninit: Habit.loadList,
  view: function () {
    // const habitInput = useRef(null);
    // const addHabit = (value) => {
    //   setHabits([...habits, ...value]);
    // };

    // useEffect(() => {
    //   if (habitInput.current) {
    //     habitInput.current.focus();
    //   }
    // });
    let input = '';

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
                  console.log(e);
                  e.preventDefault();
                  // Habit.add(habitInput.current && [habitInput.current.value]);
                  // habitInput.current.value = '';
                },
              },
              [
                m('.flex', [
                  m('input.input#habit[placeholder=Run from a ZOMBIE️ 🧟‍♂️]', {
                    style: { flex: 1 },
                    oninput: (e) => {
                      input = e.target.value;
                      console.log(input);
                    },
                  }),
                  m(
                    'button.Button[type=submit]',
                    {
                      style: { 'justify-self': 'flex-end' },
                      onClick: () => {
                        addHabit(
                          habitInput.current && [habitInput.current.value],
                        );
                        habitInput.current.value = '';
                      },
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
            onClick: () =>
              addHabit([
                'Lift some weights',
                'get some air',
                'run flat out for 60 seconds',
              ]),
          },
          'Populate with dummies',
        ),
      ]),
      m('main.container', m(Habits)),
    ]);
  },
};
