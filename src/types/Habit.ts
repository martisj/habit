export interface Habit {
  _id: string
  title: string
  log: LogEntry[]
}

type LogEntry = {
  _key: string
  day: string
  timestamp: string
}
