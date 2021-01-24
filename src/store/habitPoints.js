import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid } from '../utils'
import { db } from '../constants'
// import { VoidFunc } from './habitss';

// type HabitPoint = {
//   id: number;
//   habitId: number;
//   timestamp: number;
//   dateSlug: [DD, MMM]
// };

// type HabitPoints {
//   history: HabitPoint[];
//   add: (habitId: HabitPoint['habitId']) => void;
//   current: string;
//   clear: VoidFunc;
// }

function createHabitPoints() {
  const { subscribe, update } = writable([], async (set) => {
    try {
      const history = await localforage.getItem(db.HISTORY)
      set(history || [])
    } catch (error) {
      console.error(error)
    }
  })

  return {
    subscribe,
    add: (habitId, dateSlug) =>
      update((history) => {
        const newPoints = [
          ...history,
          { _id: uuid(), habitId, dateSlug, timestamp: Date.now() },
        ]
        localforage.setItem(db.HISTORY, newPoints)

        return newPoints
      }),
    undo: (historyEntryId) => {
      update((history) => {
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
        localforage.setItem(db.HISTORY, newPoints)
        return newPoints
      })
    },
  }
}

export const habitPoints = createHabitPoints()
