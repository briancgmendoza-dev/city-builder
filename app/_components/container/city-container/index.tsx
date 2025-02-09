import React from "react"
import { useSuspenseQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import HousesList from "@/app/_components/container/houses-list"
import HousesContainer from "@/app/_components/container/houses-container"

import { TCities } from "@/app/service/type"

const CityContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { data: cities } = useSuspenseQuery<TCities[]>({ queryKey: ['cities'] })
  return (
    <Container ref={ref} className="w-full">
      {cities.map((city) => (
        <Container key={city.name} className="flex flex-col md:flex-row items-center">
          <Container className="w-screen md:w-[30%]">
            <HousesList city={city} />
          </Container>

          <Container className="w-screen md:w-[70%] mb-10 md:mb-0 overflow-auto">
            <HousesContainer house={city.houses} />
          </Container>
        </Container>
      ))}
    </Container>
  )
})


CityContainer.displayName = "CityContainer"
export default CityContainer
