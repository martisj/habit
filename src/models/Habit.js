export const Habit = {
  list: [],
  current: '',
  add: () =>
    (Habit.list = [
      ...Habit.list,
      { _id: Habit.list.length + 1, title: Habit.current },
    ]),
  clear: () => (Habit.current = ''),
  addDummies: () =>
    (Habit.list = [
      ...Habit.list,
      ...[
        'Lift some weights',
        'get some air',
        'run flat out for 60 seconds',
      ].map((title, i) => ({ title, _id: 1 + Habit.list.length + i })),
    ]),
  delete: (title) => {
    const foundIndex = Habit.list.findIndex(({ title: t }) => t === title);
    Habit.list =
      foundIndex > -1
        ? [...Habit.list.slice(0, index), ...Habit.list.slice(index + 1)]
        : Habit.list;
  },
};
