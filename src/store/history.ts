import { writable } from 'svelte/store'
import { Status, DATE_SLUG_FORMAT } from '../constants'
import dayjs from 'dayjs'
import { DayTuple, drop } from '../utils'

const historySlug = (day: DayTuple) => dayjs(day).format(DATE_SLUG_FORMAT)

function createHistoryStore() {
  const { update, subscribe } = writable({} as History)

  const add = (habitId: Habit._id, day: DayTuple) => {
    update((oldHistory) => {
      const newHistory = { ...oldHistory }
      newHistory[habitId] = {
        ...newHistory[habitId],
        [historySlug(day)]: {
          timestamp: Date.now(),
          status: 'complete',
        },
      }
      return newHistory
    })
  }

  const undo = (historyEntryId: Habit._id) => {
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
