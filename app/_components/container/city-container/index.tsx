import React from "react"
import { useSuspenseQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import HousesList from "@/app/_components/container/houses-list"
import HousesContainer from "@/app/_components/container/houses-container"

import { TCities } from "@/app/service/type"

const CityContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { data: cities } = useSuspenseQuery<TCities[]>({ queryKey: ['cities'] })
  return (
    <Container ref={ref} className="w-full border border-red-700">
      {cities.map((city) => {
        const filterCityWithHouses = cities.filter((city) => city.houses.length > 0)
        const houses = filterCityWithHouses.map((city) => city.houses)
        return (
          <Container key={city.name} className={city.name === filterCityWithHouses[0]?.name ? "flex items-center justify-evenly" : ""}>
            <HousesList city={city} />
            {city.name === filterCityWithHouses[0]?.name ? (
              <HousesContainer house={houses} />
            ) : (null)}
          </Container>
        )
      })}
    </Container>
  )
})

CityContainer.displayName = "CityContainer"
export default CityContainer
