import { TCityWeather } from "@/app/service/type";

export const generateAlphanumericId = (length: number = 10): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export const validateCities = (citiesArr: (TCityWeather | { error: string })[]): TCityWeather[] => citiesArr.filter((city): city is TCityWeather => !("error" in city))
