import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

export const isSameDay = (a, b) => a.join('') === b.join('')
export const formatDdMmmArr = (day) => day.format('DD MMM').split(' ')
export const calculateDaysToShow = (daysToShow) =>
  Array(daysToShow + 1)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) => formatDdMmmArr(dayjs().add(idx + day, 'day')))

export const uuid = uuidv4
