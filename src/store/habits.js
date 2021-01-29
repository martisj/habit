import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid, drop } from '../utils'
import { db } from '../constants'

export const habits = writable([])

async function getLocalHabits() {
  const items = await localforage.getItem(db.HABITS)
  console.log(items)
  return habits.set(items || [])
}
getLocalHabits()

export const addHabit = (title) =>
  habits.update(async (habits) => {
    const newHabits = [...habits, { _id: uuid(), title }]
    localforage.setItem(db.HABITS, newHabits)
    return newHabits
  })

export const resetHabits = async () => {
  await localforage.setItem(db.HABITS, [])
  habits.set([])
}

export const addDummyHabits = () =>
  ['Lift some weights', 'Get some air', 'Run flat out for 60 seconds'].map(
    addHabit
  )

export const removeHabit = async (id) => {
  habits.update((habits) => {
    const foundIndex = habits.findIndex(({ _id }) => _id === id)
    const newHabits = drop(habits, foundIndex)
    localforage.setItem(db.HABITS, newHabits)
    return Promise.resolve(newHabits)
  })
}
