'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import HeroMessage from "@/app/_components/container/hero-message"
import HousesList from "@/app/_components/container/houses-list"
import HousesContainer from "@/app/_components/container/houses-container"
import Typography from "@/app/_components/ui/typography"
import Loader from "@/app/_components/ui/loader"

import { WeatherService } from "@/app/service/weather-service"

export default function Home() {
  const queryClient = useQueryClient()
  const { isLoading, error } = useQuery({
    queryFn: () => WeatherService.getAllCitiesRealTimeWeatherUpdate(queryClient),
    queryKey: ['cities'],
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
    <main className="p-8 pb-20 sm:p-20">
      <Container type="section" className="w-full h-full">
        <HeroMessage />
        <Container className="mt-10 flex flex-col md:flex-row">
          <HousesList />
          <HousesContainer />
        </Container>
      </Container>
    </main>
  );
}
