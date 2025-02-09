import React from "react"

import Container from "@/app/_components/container"
import Triangle from "@/app/_components/house/triangle"
import Floors from "@/app/_components/house/floors"
import Windows from "@/app/_components/house/windows"
import Door from "@/app/_components/house/door"

import { THousesContainerProps } from "@/app/_components/container/houses-container/type"

const HousesContainer = React.forwardRef<HTMLDivElement, THousesContainerProps>(({ house }, ref) => {
  return (
    <Container ref={ref} type="section" className="flex items-center justify-evenly mt-10 md:mt-0 sm:mt-4">
      {house.length > 0 ? house.map((h) => {
          const floorsArray = Array.from({ length: h.floors })
          return (
            <div key={h.id} className="mx-4">
              <Triangle />
              {floorsArray.map((_, index) => {
                const isLastFloor = index === floorsArray.length - 1;
                return (
                  <div key={index}>
                    {isLastFloor ? (
                      <Floors color={h.color} floorsClassName={`${floorsArray.length === 1 ? "pt-6" : "pt-2"} flex px-1.5`}>
                        <Windows number_of_windows={1} />
                        <Door />
                      </Floors>
                    ) : (
                      <Floors color={h.color}>
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
        }) : (null)}
    </Container>
  )
})

HousesContainer.displayName = "HousesContainer"
export default HousesContainer
