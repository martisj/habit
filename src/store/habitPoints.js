import { writable } from 'svelte/store'
// import { VoidFunc } from './habitss';

// type HabitPoint = {
//   habitId: number;
//   timestamp: number;
// };

// type HabitPoints {
//   history: HabitPoint[];
//   add: (habitId: HabitPoint['habitId']) => void;
//   current: string;
//   clear: VoidFunc;
// }

function createHabitPoints() {
  const { subscribe, update } = writable([])

  return {
    subscribe,
    add: (habitId) =>
      update((points) => [...points, { habitId, timestamp: Date.now() }]),
  }
}

export const habitPoints = createHabitPoints()
