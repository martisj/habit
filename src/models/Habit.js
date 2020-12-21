export const Habit = {
  list: [],
  add: (title) => (Habit.list = [...Habit.list, { title }]),
};
