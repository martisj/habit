import { writable } from 'svelte/store'
import localforage from 'localforage'
import { uuid } from '../utils'
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
      const points = await localforage.getItem('points')
      set(points || [])
    } catch (error) {
      console.error(error)
    }
  })

  return {
    subscribe,
    add: (habitId, dateSlug) =>
      update((points) => {
        const newPoints = [
          ...points,
          { _id: uuid(), habitId, dateSlug, timestamp: Date.now() },
        ]
        localforage.setItem('points', newPoints)

        return newPoints
      }),
    undo: (pointId) => {
      update((points) => {
        const foundIndex = points.findIndex((point) => point._id === pointId)
        const newPoints =
          foundIndex > -1
            ? [...points.slice(0, foundIndex), ...points.slice(foundIndex + 1)]
            : points
        localforage.setItem('points', newPoints)
        return newPoints
      })
    },
  }
}

export const habitPoints = createHabitPoints()
