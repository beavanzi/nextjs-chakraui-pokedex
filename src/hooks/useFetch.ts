import useSWR from "swr"
import { api } from "../services/api"

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  })

  return { data, error }
}

export function findPokemons<Data = any, Error = any>() {
  const { data, error } = useSWR<Data, Error>("pokemon", async (url) => {
    const response = await api.get(url)
    return response.data
  })

  return { data, error }
}

export function findPokemon<Data = any, Error = any>(pokemon: string) {
  const { data, error } = useSWR<Data, Error>(
    `pokemon/${pokemon}`,
    async (url) => {
      const response = await api.get(url)
      return response.data
    }
  )

  return { data, error }
}
