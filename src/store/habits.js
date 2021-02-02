import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'
import { isSaving } from './isSaving'

export const habits = writable([])

async function getLocalHabits() {
  isSaving.set(true)
  const data = await localforage.getItem(db.HABITS)
  isSaving.set(false)
  habits.set(data || [])
}
getLocalHabits()

export const addHabit = async (title) => {
  const newHabits = [...habits, { _id: uuid(), title }]
  console.log(JSON.stringify(newHabits))
  isSaving.set(true)
  await localforage.setItem(db.HABITS, newHabits)
  isSaving.set(false)
  habits.set(newHabits)
}

export const resetHabits = async () => {
  isSaving.set(true)
  await localforage.setItem(db.HABITS, [])
  isSaving.set(false)
  habits.set([])
}

export const addDummyHabits = () =>
  ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
    addHabit
  )

export const removeHabit = async (id) => {
  const foundIndex = habits.findIndex(({ _id }) => _id === id)
  const newHabits = drop(habits, foundIndex)
  isSaving.set(true)
  await localforage.setItem(db.HABITS, newHabits)
  isSaving.set(false)
  habits.set(newHabits)
}
