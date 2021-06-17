import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { JSONResponse } from '../types/JSONResponse'
import type { Habit } from '../types/Habit'
//https://gist.github.com/joshnuss/e4c4a4965f12b1d6012393a4ccdb7462

type Endpoints = 'vane' | 'vanes'
const apiUrl = (url: Endpoints) => `http://localhost:3001/${url}`

type Methods = 'GET' | 'POST' | 'DELETE'

interface HttpStore<T> extends Pick<Writable<T>, 'subscribe'> {
  get: (url: Endpoints, params: undefined) => void
  post: (url: Endpoints, params: any) => void
  destroy: (url: Endpoints, params: any) => void
}

export function vane<T>(initial: T): HttpStore<T> {
  const store = writable<T>(initial)

  const request =
    (method: Methods) => async (endpoint: Endpoints, params: any) => {
      store.update((data: any) => {
        delete data.errors
        data.loading = true
        return data
      })

      const headers = {
        'Content-type': 'application/json',
      }
      const body = params ? JSON.stringify(params) : undefined

      const response = await fetch(apiUrl(endpoint), { method, headers, body })
      const json = await response.json()

      if (response.ok) {
        store.set(json)
      } else {
        store.update((data: any) => {
          data.errors = json.errors
          data.loading = false
          return data
        })
      }
    }

  return {
    subscribe: store.subscribe,
    get: request('GET'),
    post: request('POST'),
    destroy: request('DELETE'),
  }
}

export async function vaneData() {
  const response = await fetch('http://localhost:3001/vanes', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
  const json: JSONResponse<Habit[]> = await response.json()
  if (response.ok) {
    if (json.vanes) {
      return json.vanes
    }
  }
  return []
}
