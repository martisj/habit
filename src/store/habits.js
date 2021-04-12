import { writable, get } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'
import { isSaving } from './isSaving'

function createHabitStore() {
  const store = writable(new Promise(() => {}))

  async function getLocalHabits() {
    isSaving.set(true)
    const habits = await localforage.getItem(db.HABITS)
    store.set(habits ? Promise.resolve(habits) : [])
    isSaving.set(false)
  }
  getLocalHabits()

  const add = async (title) => {
    isSaving.set(true)
    const habs = await get(store)
    const newHabits = [...habs, { _id: uuid(), title }]
    await localforage.setItem(db.HABITS, newHabits)
    const data = await localforage.getItem(db.HABITS)
    console.log(data)
    store.set(data)
    isSaving.set(false)
  }

  const reset = async () => {
    isSaving.set(true)
    await localforage.setItem(db.HABITS, [])
    const result = await localforage.getItem(db.HABITS)
    isSaving.set(false)
    store.set(result)
  }

  const addDummyHabits = () =>
    ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
      add
    )

  const remove = (id) => {
    store.update(async (oldHabits) => {
      const foundIndex = oldHabits.findIndex(({ _id }) => _id === id)
      const newHabits = drop(oldHabits, foundIndex)
      isSaving.set(true)
      await localforage.setItem(db.HABITS, newHabits)
      const result = await localforage.getItem(db.HABITS)
      isSaving.set(false)
      return result
    })
  }

  return {
    subscribe: store.subscribe,
    add,
    reset,
    addDummyHabits,
    remove,
    isSaving,
  }
}

export const habits = createHabitStore()
