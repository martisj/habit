import { writable } from 'svelte/store'
import { uuid, drop } from '../utils'

function createHabitStore() {
  const store = writable([])

  const add = (title) =>
    store.update((habs) => [...habs, { _id: uuid(), title }])

  const reset = () => store.set([])

  const addDummyHabits = () =>
    ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
      add
    )

  const remove = (id) =>
    store.update((oldHabits) => {
      const foundIndex = oldHabits.findIndex(({ _id }) => _id === id)
      return drop(oldHabits, foundIndex)
    })

  return {
    subscribe: store.subscribe,
    add,
    reset,
    addDummyHabits,
    remove,
  }
}

export const habits = createHabitStore()
