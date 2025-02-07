import request from "@/app/service"
import { cities } from "@/app/constant"
import { TCityWeather } from "@/app/service/type"

const API_KEY = '7b72b6a87ef14908a65150417250702'
const BASE_URL = 'http://api.weatherapi.com/v1/current.json'

export const WeatherService = {
  getAllCitiesRealTimeWeatherUpdate: async (): Promise<(TCityWeather | { error: string })[]> => {
    try {
      const weatherPromises = cities.map((city) => {
        return request({
          url: `${BASE_URL}?key=${API_KEY}&q=${city}`,
          method: 'GET'
        })
        .then((response) => {
          const { name } = response?.data?.location
          const { temp_c, condition } = response?.data.current

          return { name, temp_c, condition }
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
