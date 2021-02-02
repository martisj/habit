import { writable } from 'svelte/store'
import localforage from 'localforage'
import { db, status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'
import { isSaving } from './isSaving'

const historySlug = (day) => dayjs(day).format(DATE_SLUG_FORMAT)

export const history = writable({})

async function getLocalHistory() {
  isSaving.set(true)
  const data = await localforage.getItem(db.HISTORY)
  isSaving.set(false)
  history.set(data || {})
}
getLocalHistory()

export const historyAdd = async (habitId, day) => {
  const newHistory = { ...history }
  newHistory[habitId] = {
    ...newHistory[habitId],
    [historySlug(day)]: {
      timestamp: Date.now(),
      status: status.COMPLETE,
    },
  }
  isSaving.set(true)
  await localforage.setItem(db.HISTORY, newHistory)
  isSaving.set(false)
  history.set(newHistory)
}

export const historyUndo = async (historyEntryId) => {
  const foundIndex = history.findIndex((point) => point._id === historyEntryId)
  const newPoints =
    foundIndex > -1
      ? [...history.slice(0, foundIndex), ...history.slice(foundIndex + 1)]
      : history
  isSaving.set(true)
  await localforage.setItem(db.HISTORY, newPoints)
  isSaving.set(false)
  history.set(newPoints)
}
