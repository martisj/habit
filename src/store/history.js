import { writable } from 'svelte/store'
import localforage from 'localforage'
import { db, status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'

const historySlug = (day) => dayjs(day).format(DATE_SLUG_FORMAT)

export const history = writable({})

async function getLocalHistory() {
  const history = await localforage.getItem(db.HISTORY)
  history.set(history || {})
}
getLocalHistory()

export const add = async (habitId, day) =>
  history.update(async (history) => {
    const newHistory = history ? { ...history } : {}
    const slug = historySlug(day)
    newHistory[habitId] = {
      ...newHistory[habitId],
      [slug]: {
        timestamp: Date.now(),
        status: status.COMPLETE,
      },
    }
    await localforage.setItem(db.HISTORY, newHistory)

    return newHistory
  })

export const undo = (historyEntryId) => {
  history.update(async (history) => {
    const foundIndex = history.findIndex(
      (point) => point._id === historyEntryId
    )
    const newPoints =
      foundIndex > -1
        ? [...history.slice(0, foundIndex), ...history.slice(foundIndex + 1)]
        : history
    await localforage.setItem(db.HISTORY, newPoints)
    return newPoints
  })
}
