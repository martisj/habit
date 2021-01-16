import { VoidFunc } from './habitss';

type HabitPoint = {
  habitId: number;
  timestamp: number;
};

export const HabitPoint: {
  history: HabitPoint[];
  add: (habitId: HabitPoint['habitId']) => void;
  current: string;
  clear: VoidFunc;
} = {
  history: [],
  current: '',
  add: (habitId) =>
    (HabitPoint.history = [
      ...HabitPoint.history,
      { habitId, timestamp: Date.now() },
    ]),
  clear: () => (HabitPoint.current = ''),
};
