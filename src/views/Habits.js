import m from 'mithril';
export function Habits(habits) {
  return habits.length > 0
    ? m('.Habits', [
        m(
          'Dates',
          habits.map((habit) => m('Habit', habit)),
        ),
      ])
    : m('span', '🥵 your habit list is awfully empty, time to get cracking');
}
