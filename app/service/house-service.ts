import { THouse } from "@/app/_components/container/houses-list/type"
import { TCityWeather } from "@/app/service/type"

export const HouseService = {
  addHouse: async (city: string, newHouse: THouse[], cities: TCityWeather[]): Promise<THouse[]> => {
    try {
      return await new Promise<THouse[]>((resolve, reject) => {
        const filterCity = cities.filter((c) => c.name === city)

        if (filterCity.length === 0) reject(new Error(`City ${city} not found`))

        const updatedCity = filterCity[0]
        updatedCity.houses = [
          ...updatedCity.houses,
          ...newHouse
        ]
        resolve(updatedCity.houses)
      })
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}
