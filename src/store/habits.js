import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid } from '../utils'
import { db } from '../constants'

function createHabits() {
  const { subscribe, set, update } = writable([], async (set) => {
    try {
      const items = await localforage.getItem(db.HABITS)
      set(items)
      return () => {}
    } catch (error) {
      console.error('could not find habits in localstorage')
    }
  })

  const add = (title) =>
    update((habits) => {
      const newHabits = [...habits, { _id: uuid(), title }]
      localforage.setItem(db.HABITS, newHabits)
      return newHabits
    })
  return {
    subscribe,
    add,
    reset: () => {
      localforage.setItem(db.HABITS, [])
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
        localforage.setItem(db.HABITS, newHabits)
        return newHabits
      })
    },
  }
}

export const habits = createHabits()
