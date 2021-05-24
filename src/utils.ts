import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import type { DayJs } from 'dayjs'
import { DATE_SLUG_FORMAT, DAY_DISPLAY_FORMAT, Status } from './constants'

export const isSameDay = (a, b) => a.join('') === b.join('')
export const formatDdMmmArr = (day: Dayjs): DayTuple =>
  day.format('DD MMM').split(' ')
export const calculateDaysToShow = (daysToShow) =>
  Array(daysToShow + 1)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) => formatDdMmmArr(dayjs().add(idx + day, 'day')))

export const uuid = uuidv4

export const isDoneForDay = (id, day, history) => {
  const slug = dayjs(day, DAY_DISPLAY_FORMAT).format(DATE_SLUG_FORMAT)
  const currentHabit = history[id]
  return (
    currentHabit &&
    currentHabit[slug] &&
    currentHabit[slug].status === 'complete'
  )
}

export const drop = (list, index) =>
  index > -1 ? [...list.slice(0, index), ...list.slice(index + 1)] : list
