import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import { DATE_SLUG_FORMAT, DAY_DISPLAY_FORMAT, DAY_FORMAT } from './constants'
import type { DayTuple } from './types/DayTuple'
import type { Habit } from './types/Habit'

export const isSameDay = (a: DayTuple, b: DayTuple) => a.join('') === b.join('')

export const toDayTuple = (day: Dayjs): DayTuple => [
  day.format('DD'),
  day.format('MMM'),
]

export const calculateDaysToShow = (daysToShow: number): DayTuple[] =>
  Array(daysToShow + 1)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) => toDayTuple(dayjs().add(idx + day, 'day')))

export const rawCalculateDaysToShow = (daysToShow: number): Dayjs[] =>
  Array(daysToShow + 1)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) => dayjs().add(idx + day, 'day'))

export const uuid = uuidv4

export const isDoneForDay = (habit: Habit, day: Dayjs) =>
  habit.log && habit.log.some((x) => dayjs(x.day).isSame(day, 'day'))

export const drop = <T>(list: T[], index: number): T[] =>
  index > -1 ? [...list.slice(0, index), ...list.slice(index + 1)] : list
