import { writable } from 'svelte/store'
import { status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'
import { drop } from '../utils'

const historySlug = (day) => dayjs(day).format(DATE_SLUG_FORMAT)

function createHistoryStore() {
  const { update, subscribe } = writable({})

  const add = (habitId, day) => {
    console.log(day)
    update((oldHistory) => {
      const newHistory = { ...oldHistory }
      newHistory[habitId] = {
        ...newHistory[habitId],
        [historySlug(day)]: {
          timestamp: Date.now(),
          status: status.COMPLETE,
        },
      }
      return newHistory
    })
  }

  const undo = (historyEntryId) => {
    update((oldHistory) => {
      const foundIndex = oldHistory.findIndex(
        (point) => point._id === historyEntryId
      )
      return drop(oldHistory, foundIndex)
    })
  }

  return {
    subscribe,
    add,
    undo,
  }
}

export const history = createHistoryStore()
