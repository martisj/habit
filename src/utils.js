import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

export const isSameDay = (a, b) => a.join('') === b.join('')
export const formatDdMmmArr = (day) => day.format('DD MMM').split(' ')
export const calculateDaysToShow = (daysToShow) =>
  Array(daysToShow + 1)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) => formatDdMmmArr(dayjs().add(idx + day, 'day')))

export const uuid = uuidv4

export const isDoneForDay = (id, day, points) => {
  console.log(
    '🚀 ~ file: utils.js ~ line 14 ~ isDoneForDay ~ id, day, points',
    id,
    day,
    points
  )
  const found = points.find(({ habitId }) => habitId === id)
  console.log(
    '🚀 ~ file: utils.js ~ line 16 ~ isDoneForDay ~ found && isSameDay(found.dateSlug, day)',
    found && isSameDay(found.dateSlug, day)
  )
  return found && isSameDay(found.dateSlug, day)
}
