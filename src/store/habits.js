import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'

const initialValue = () => []
function createHabits() {
  const store = writable(new Promise(initialValue))

  ;(async () => {
    const items = localforage.getItem(db.HABITS)
    store.set(Promise.resolve(items))
  })()

  const add = (title) =>
    store.update((habits) => {
      const newHabits = [...habits, { _id: uuid(), title }]
      ;(async () => localforage.setItem(db.HABITS, newHabits))()
      return newHabits
    })

  return {
    subscribe: store.subscribe,
    add,
    reset: () => {
      localforage.setItem(db.HABITS, [])
      store.set([])
    },
    addDummies: () =>
      ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
        add
      ),
    remove: (id) => {
      store.update((habits) => {
        const foundIndex = habits.findIndex(({ _id }) => _id === id)
        const newHabits = drop(habits, foundIndex)
        localforage.setItem(db.HABITS, newHabits)
        return newHabits
      })
    },
  }
}

export const habits = createHabits()
