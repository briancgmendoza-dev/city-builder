'use client'

import React from "react"
import { useQueryClient, useQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import CityContainer from "@/app/_components/container/city-container"
import Loader from "@/app/_components/ui/loader"

import { TCities } from "@/app/service/type"
import { WeatherService } from "@/app/service/weather-service"

const CitiesContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const queryClient = useQueryClient()
  const { isLoading } = useQuery<TCities[]>({
    queryFn: () => WeatherService.getAllCitiesRealTimeWeatherUpdate(queryClient),
    queryKey: ['cities'],
  })

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <Container ref={ref} type="section" className="mt-10 flex flex-col md:flex-row" dataTestId="cities-container">
      <CityContainer />
    </Container>
  )
})

CitiesContainer.displayName = "CitiesContainer"
export default CitiesContainer
