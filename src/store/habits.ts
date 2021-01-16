import { Writable, writable } from 'svelte/store';

type Habit = {
  _id: number;
  title: string;
};

type Habits = {
  subscribe: Writable<Habit[]>['subscribe'];
  add: (title: string) => void;
  // clear: VoidFunc;
  reset: VoidFunc;
  addDummies: VoidFunc;
  // delete: (title: string) => Habit;
};

export type VoidFunc = () => void;

function createHabits(): Habits {
  const { subscribe, set, update } = writable<[]>([]);

  return {
    subscribe,
    add: (title: string) =>
      update((habits) => [...habits, { _id: habits.length + 1, title }]),
    reset: () => set([]),
    addDummies: () =>
      update((habits) => [
        ...habits,
        ...[
          'Lift some weights',
          'get some air',
          'run flat out for 60 seconds',
        ].map((title, i) => ({ title, _id: 1 + habits.length + i })),
      ]),
    // delete: (title) => {
    //   const foundIndex = Habit.list.findIndex(({ title: t }) => t === title);
    //   Habit.list =
    //     foundIndex > -1
    //       ? [
    //           ...Habit.list.slice(0, foundIndex),
    //           ...Habit.list.slice(foundIndex + 1),
    //         ]
    //       : Habit.list;
    // },
  };
}

export const habits = createHabits();
