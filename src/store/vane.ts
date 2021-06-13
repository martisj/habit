import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
//https://gist.github.com/joshnuss/e4c4a4965f12b1d6012393a4ccdb7462

type Endpoints = 'vane' | 'vanes'
const apiUrl = (url: Endpoints) => `http://localhost:3001/${url}`
interface HttpStore<T> extends Writable<T> {
  request: (
    method: 'GET' | 'POST' | 'DELETE'
  ) => (endpoint: Endpoints, params: any) => void
  get: (url: Endpoints, params: undefined) => void
  post: (url: Endpoints, params: any) => void
  destroy: (url: Endpoints, params: any) => void
}

export function vane<T>(initial: T): HttpStore<T> {
  const store = writable<T>(initial)

  store.request = (method) => async (endpoint: Endpoints, params: any) => {
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
  store.get = store.request('GET')
  store.post = store.request('POST')
  store.destroy = store.request('DELETE')

  return {
    store.subscribe,

  }
}
