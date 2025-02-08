import { QueryClient } from "@tanstack/react-query"

import { THouse } from "@/app/_components/container/houses-list/type"
import { TCityWeather } from "@/app/service/type"

export const HouseService = {
  addHouse: async (cityName: string, newHouse: THouse[], queryClient: QueryClient, cb: () => void): Promise<THouse[]> => {
    const cities = queryClient.getQueryData<TCityWeather[]>(['cities'])
    try {
      return await new Promise<THouse[]>((_resolve, reject) => {
        if (!cities) {
          reject(new Error('Cities data not found in cache'))
        }

        const updatedCities = cities?.map((city) => {
          if (city.name === cityName) {
            return { ...city, houses: [...city.houses, ...newHouse] }
          }

          return city
        })

        queryClient.setQueryData(['cities'], updatedCities)
        cb()
      })
    } catch (error) {
      throw new Error(`Error adding house: ${error}`)
    }
  },
  deleteHouse: async (cityName: string, houseId: string, queryClient: QueryClient): Promise<void> => {
    const cities = queryClient.getQueryData<TCityWeather[]>(['cities'])
    try {
      if (!cities) {
        throw new Error('Cities data not found in cache')
      }

      const updatedCities = cities.map((city) => {
        if (city.name === cityName) {
          console.log("@@@ DEL1 :", city.name)
          console.log("@@@ DEL2 :", cityName)
          const updatedHouses = city.houses.filter((house) => house.id !== houseId)

          console.log("@@@ DEL :", updatedHouses)
          return { ...city, houses: updatedHouses }
        }
        return city
      })

      queryClient.setQueryData(['cities'], updatedCities)
    } catch (error) {
      throw new Error(`Error deleting house: ${error}`)
    }
  }
}
