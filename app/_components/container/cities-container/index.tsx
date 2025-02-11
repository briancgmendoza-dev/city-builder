'use client'

import React from "react"
import { useQueryClient, useQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import CityContainer from "@/app/_components/container/city-container"
import Loader from "@/app/_components/ui/loader"

import { TCities } from "@/app/service/type"
import { WeatherService } from "@/app/service/weather-service"
import { colorOptions, floorOptions } from "@/app/constant"

const CitiesContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const queryClient = useQueryClient()
  const { isLoading, error } = useQuery<TCities[]>({
    queryFn: () => WeatherService.getAllCitiesRealTimeWeatherUpdate(queryClient),
    queryKey: ['cities'],
  })

  // Initializing and setting ColorOptions
  useQuery({
    queryFn: () => colorOptions,
    queryKey: ['colorOptions']
  })

  // Initializing and setting FloorOptions
  useQuery({
    queryFn: () => floorOptions,
    queryKey: ['floorOptions']
  })

  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return (
      <Typography
        className="text-red-500"
        text={`Error: ${error instanceof Error ? error.message : "An error occurred"}`}
      />
    )
  }

  return (
    <Container ref={ref} type="section" className="mt-10 flex flex-col md:flex-row">
      <CityContainer />
    </Container>
  )
})

CitiesContainer.displayName = "CitiesContainer"
export default CitiesContainer
