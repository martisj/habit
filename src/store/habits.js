import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'
import { isSaving } from './isSaving'

function createHabitStore() {
  const { set, update, subscribe } = writable([])

  async function getLocalHabits() {
    isSaving.set(true)
    const data = await localforage.getItem(db.HABITS)
    isSaving.set(false)
    set(data || [])
  }
  getLocalHabits()

  const add = (title) => {
    update(async (oldHabits) => {
      const habs = await oldHabits
      const newHabits = [...habs, { _id: uuid(), title }]
      isSaving.set(true)
      await localforage.setItem(db.HABITS, newHabits)
      const result = await localforage.getItem(db.HABITS)
      console.log(result)
      isSaving.set(false)
      return result
    })
  }

  const reset = async () => {
    isSaving.set(true)
    await localforage.setItem(db.HABITS, [])
    const result = await localforage.getItem(db.HABITS)
    isSaving.set(false)
    set(result)
  }

  const addDummyHabits = () =>
    ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
      add
    )

  const remove = (id) => {
    update(async (oldHabits) => {
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
    subscribe,
    add,
    reset,
    addDummyHabits,
    remove,
    isSaving,
  }
}

export const habits = createHabitStore()
