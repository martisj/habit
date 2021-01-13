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
};
