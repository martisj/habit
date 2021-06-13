export type JSONResponse<T> = {
  vanes?: T
  errors?: Array<{ message: string }>
}
