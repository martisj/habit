import { writable } from 'svelte/store'
import localforage from 'localforage'
import { db, status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'

const historySlug = (day) => dayjs(day).format(DATE_SLUG_FORMAT)
const initialValue = () => {}

function createHistory() {
  const store = writable(new Promise(initialValue))
  ;(async () => {
    const history = await localforage.getItem(db.HISTORY)
    store.set(history || initialValue())
  })()

  return {
    subscribe: store.subscribe,
    add: (habitId, day) =>
      store.update((history) => {
        const newHistory = history ? { ...history } : {}
        const slug = historySlug(day)
        newHistory[habitId] = {
          ...newHistory[habitId],
          [slug]: {
            timestamp: Date.now(),
            status: status.COMPLETE,
          },
        }
        ;(async () => localforage.setItem(db.HISTORY, newHistory))()

        return newHistory
      }),
    undo: (historyEntryId) => {
      store.update((history) => {
        const foundIndex = history.findIndex(
          (point) => point._id === historyEntryId
        )
        const newPoints =
          foundIndex > -1
            ? [
                ...history.slice(0, foundIndex),
                ...history.slice(foundIndex + 1),
              ]
            : history
        ;(async () => localforage.setItem(db.HISTORY, newPoints))()
        return newPoints
      })
    },
  }
}

export const history = createHistory()
