import dayjs from 'dayjs';
// schema:
// type HabitPoint = {
//   history: {
//     timestamp: milliseconds since epoch,
//     habitId: id of habit
//   }
// }
export const HabitPoint = {
  history: [],
  current: '',
  add: (habitId) =>
    (HabitPoint.history = [
      ...HabitPoint.history,
      { habitId, timestamp: new Date() },
    ]),
  clear: () => (HabitPoint.current = ''),
  addDummies: () =>
    (HabitPoint.history = [
      ...HabitPoint.history,
      ...[
        'Lift some weights',
        'get some air',
        'run flat out for 60 seconds',
      ].map((timestamp) => ({ timestamp })),
    ]),
  delete: (timestamp) => {
    const foundIndex = HabitPoint.history.findIndex(
      ({ timestamp: t }) => t === timestamp,
    );
    HabitPoint.history =
      foundIndex > -1
        ? [
            ...HabitPoint.history.slice(0, index),
            ...HabitPoint.history.slice(index + 1),
          ]
        : HabitPoint.history;
  },
};
