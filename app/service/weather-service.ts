import { QueryClient } from "@tanstack/react-query"

import request from "@/app/service"
import { cities, NEXT_PUBLIC_API_KEY } from "@/app/constant"
import { TCities } from "@/app/service/type"
import { THouse } from "@/app/_components/container/houses-list/type"

export const WeatherService = {
  getAllCitiesRealTimeWeatherUpdate: async (queryClient: QueryClient): Promise<TCities[]> => {
    const cachedData = queryClient.getQueryCache().find({ queryKey: ['cities'] })

    if (cachedData?.state.data !== undefined) {
      const citiesFromCache = cachedData.state.data as TCities[]

      const allCitiesHaveEmptyHouses = citiesFromCache.every((city) => city.houses.length === 0)

      if (!allCitiesHaveEmptyHouses) {
        return citiesFromCache
      }
    }

    const weatherPromises = cities.map(async (city) => {
      try {
        const response = await request({
          url: `?key=${NEXT_PUBLIC_API_KEY}&q=${city}`,
          method: "GET",
        })

        const { name } = response?.data?.location
        const { temp_c, condition } = response?.data.current
        const houses: THouse[] = []

        return { name, temp_c, condition, houses } as TCities
      } catch (error) {
        console.error(error)
        return undefined
      }
    })

    const resolvedCities = await Promise.all(weatherPromises)

    return resolvedCities.filter((city): city is TCities => city !== undefined)
  }
}
