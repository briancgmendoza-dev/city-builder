import React from "react"

import Container from "@/app/_components/container"
import Triangle from "@/app/_components/house/triangle"
import Floors from "@/app/_components/house/floors"
import Windows from "@/app/_components/house/windows"
import Door from "@/app/_components/house/door"

import { THouse } from "../houses-list/type"
import { THousesContainerProps } from "@/app/_components/container/houses-container/type"

const HousesContainer = React.forwardRef<HTMLDivElement, THousesContainerProps>(({ house }, ref) => {
  const normalizedHouses: THouse[] = Array.isArray(house[0]) ? (house as THouse[][]).flat() : (house as unknown as THouse[]);
  return (
    <Container ref={ref} type="section" className="mt-10 md:mt-0 sm:mt-4 md:w-[50%]">
      <Triangle />
      {normalizedHouses.map((house) => {
          const floorsArray = Array.from({ length: house.floors })
          return (
            <div key={house.id}>
              {floorsArray.map((_, index) => {
                const isLastFloor = index === floorsArray.length - 1;
                return (
                  <div key={index}>
                    {isLastFloor ? (
                      <Floors color={house.color} floorsClassName={`${floorsArray.length === 1 ? "pt-6" : "pt-2"} flex px-1.5`}>
                        <Windows number_of_windows={1} />
                        <Door />
                      </Floors>
                    ) : (
                      <Floors color={house.color}>
                        <Windows
                          number_of_windows={2}
                          parentWindowsContainerClassName="flex items-center justify-evenly py-4"
                        />
                      </Floors>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
    </Container>
  )
})

HousesContainer.displayName = "HousesContainer"
export default HousesContainer
