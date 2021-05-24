type HistoryItem = {
  timestamp: Date
  status: Status
}

export interface History {
  [key: string]: HistoryItem
}
