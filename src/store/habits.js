import { writable } from 'svelte/store'
import localforage from 'localforage'

const slugify = (title) =>
  title.toLowerCase().replace(/\W/g, '').replace(/ /g, '-')

// type Habit = {
//   _id: number;
//   title: string;
// };

// type Habits = {
//   subscribe: Writable<Habit[]>['subscribe'];
//   add: (title: string) => void;
//   // clear: VoidFunc;
//   reset: VoidFunc;
//   addDummies: VoidFunc;
//   // delete: (title: string) => Habit;
// };

// export type VoidFunc = () => void;

function createHabits() {
  const { subscribe, set, update } = writable([], async (set) => {
    try {
      const items = await localforage.getItem('habits')
      set(items)
      return () => {}
    } catch (error) {
      console.error('could not find habits in localstorage')
    }
  })

  const add = (title) =>
    update((habits) => {
      const newHabits = [...habits, { _id: habits.length + 1, title }]
      localforage.setItem('habits', newHabits)
      return newHabits
    })
  return {
    subscribe,
    add,
    reset: () => {
      localforage.setItem('habits', [])
      set([])
    },
    addDummies: function () {
      return [
        'Lift some weights',
        'get some air',
        'run flat out for 60 seconds',
      ].map(add)
    },
    remove: (id) => {
      update((habits) => {
        const foundIndex = habits.findIndex(({ _id }) => _id === id)
        const newHabits =
          foundIndex > -1
            ? [...habits.slice(0, foundIndex), ...habits.slice(foundIndex + 1)]
            : habits
        localforage.setItem('habits', newHabits)
        return newHabits
      })
    },
  }
}

export const habits = createHabits()
