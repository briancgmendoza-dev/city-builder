import request from "@/app/service"
import { cities, NEXT_PUBLIC_API_KEY } from "@/app/constant"
import { TCityWeather } from "@/app/service/type"
import { THouse } from "@/app/_components/container/houses-list/type"

export const WeatherService = {
  getAllCitiesRealTimeWeatherUpdate: async (): Promise<(TCityWeather | { error: string })[]> => {
    try {
      const weatherPromises = cities.map((city) => {
        return request({
          url: `?key=${NEXT_PUBLIC_API_KEY}&q=${city}`,
          method: 'GET'
        })
        .then((response) => {
          const { name } = response?.data?.location
          const { temp_c, condition } = response?.data.current
          const houses: THouse[] = []

          return { name, temp_c, condition, houses }
        })
        .catch((error) => {
          return { error: error.message ?? "Error fetching updates" }
        })
      })

      return await Promise.all(weatherPromises)
    } catch (error: unknown) {
      return [{ error: error instanceof Error ? error.message : "Something went wrong" }]
    }
  }
}
