import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { DATE_SLUG_FORMAT, DAY_DISPLAY_FORMAT, status } from './constants'

type DayNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
type MonthShort =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'
export type DayTuple = [DayNumber, MonthShort]

export const isSameDay = (a, b) => a.join('') === b.join('')
export const formatDdMmmArr = (day: dayjs.Dayjs): DayTuple =>
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
    currentHabit[slug].status === status.COMPLETE
  )
}

export const drop = (list, index) =>
  index > -1 ? [...list.slice(0, index), ...list.slice(index + 1)] : list
