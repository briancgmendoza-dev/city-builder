export type THttpMethod = 'GET'

export type TRequestOptions<T extends THttpMethod> = {
  method: T;
  url: string;
}

export type TCityWeather = {
  name: string
  temp_c: string;
  condition: TCityCondition
}

type TCityCondition = {
  text: string
}
