import { writable } from 'svelte/store'
import localforage from 'localforage'
import { db, status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'
import { isSaving } from './isSaving'
import { drop } from '../utils'

const historySlug = (day) => dayjs(day).format(DATE_SLUG_FORMAT)

const initialValue = () => ({})
function createHistoryStore() {
  const { set, update, subscribe } = writable(new Promise(initialValue))

  async function getLocalHistory() {
    isSaving.set(true)
    const data = await localforage.getItem(db.HISTORY)
    isSaving.set(false)
    set(data || {})
  }
  getLocalHistory()

  const add = (habitId, day) => {
    console.log(day)
    update(async (oldHistory) => {
      const newHistory = { ...oldHistory }
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
      return await localforage.getItem(db.HISTORY)
    })
  }

  const undo = async (historyEntryId) => {
    update(async (oldHistory) => {
      const foundIndex = oldHistory.findIndex(
        (point) => point._id === historyEntryId
      )
      const newPoints = drop(oldHistory, foundIndex)
      isSaving.set(true)
      await localforage.setItem(db.HISTORY, newPoints)
      isSaving.set(false)
      return await localforage.getItem(db.HISTORY)
    })
  }

  return {
    subscribe,
    add,
    undo,
  }
}

export const history = createHistoryStore()
