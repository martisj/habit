import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'
import { isSaving } from './isSaving'

const initialValue = () => []

function createHabitStore() {
  const { set, update, subscribe } = writable(new Promise(initialValue))

  async function getLocalHabits() {
    isSaving.set(true)
    const data = await localforage.getItem(db.HABITS)
    isSaving.set(false)
    set(data || [])
  }
  getLocalHabits()

  const add = async (title) => {
    update(async (oldHabits) => {
      const newHabits = [...oldHabits, { _id: uuid(), title }]
      isSaving.set(true)
      await localforage.setItem(db.HABITS, newHabits)
      isSaving.set(false)
      return await localforage.getItem(db.HABITS)
    })
  }

  const reset = async () => {
    isSaving.set(true)
    await localforage.setItem(db.HABITS, [])
    isSaving.set(false)
    set(await localforage.getItem(db.HABITS))
  }

  const addDummyHabits = () =>
    ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
      add
    )

  const remove = async (id) => {
    update(async (oldHabits) => {
      const foundIndex = oldHabits.findIndex(({ _id }) => _id === id)
      const newHabits = drop(oldHabits, foundIndex)
      isSaving.set(true)
      await localforage.setItem(db.HABITS, newHabits)
      isSaving.set(false)
      return await localforage.getItem(db.HABITS)
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
