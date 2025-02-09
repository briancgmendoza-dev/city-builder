import { TCities } from "@/app/service/type";

export const generateAlphanumericId = (length: number = 10): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export const validateCities = (citiesArr: (TCities | { error: string })[]): TCities[] => citiesArr.filter((city): city is TCities => !("error" in city))
