"use client"

import React, { useState, useCallback } from "react"

import Container from "@/app/_components/container"
import InputText from "@/app/_components/ui/input-text"
import Typography from "@/app/_components/ui/typography"
import ColorPicker from "@/app/_components/container/color-picker"
import FloorSlider from "@/app/_components/container/floor-slider"

import { THouse } from "@/app/_components/container/houses-list/type"
import { generateAlphanumericId } from "@/app/utils"

const HousesList = () => {
  const [houses, setHouses] = useState<THouse[]>(
    [
      {
        id: generateAlphanumericId(),
        name: "House 1",
        floors: 1,
        color: "red"
      },
      {
        id: generateAlphanumericId(),
        name: "House 2",
        floors: 1,
        color: "red"
      },
      {
        id: generateAlphanumericId(),
        name: "House 3",
        floors: 1,
        color: "red"
      },
      {
        id: generateAlphanumericId(),
        name: "House 4",
        floors: 1,
        color: "red"
      },
      {
        id: generateAlphanumericId(),
        name: "House 5",
        floors: 1,
        color: "red"
      }
    ]
  )

  const handleUpdateFloors = useCallback(
    (houseId: string, newFloorCount: number) => {
      setHouses(
        (prevHouse) => prevHouse.map(
          (house) => house.id === houseId ? { ...house, floors: newFloorCount } : house
        )
      )
    },
    []
  )

  const handleNameUpdate = useCallback(
    (houseId: string, newHouseName: string) => {
      setHouses(
        (prevHouse) => prevHouse.map(
          (house) => house.id === houseId ? { ...house, name: newHouseName } : house
        )
      )
    },
    []
  )

  return (
    <Container type="section" className="md:w-[50%] border">
      <Container className="bg-slate-200 p-4">
        <Typography type="h2" text="Houses List" className=""/>
      </Container>
      <Container className="mt-2">
        {houses.map((house) => (
          <Container key={house.id} className="my-3">
            <InputText
              text={house.name}
              cb={(newHouseName) => handleNameUpdate(house.id, newHouseName)}
              className="px-4 py-2"
            />
            <Container className="px-4 flex flex-col md:flex-row items-start justify-between">
              <FloorSlider
                floors={house.floors}
                cb={(newFloorCount) => handleUpdateFloors(house.id, newFloorCount)}
              />
              <ColorPicker />
            </Container>
          </Container>
        ))}
      </Container>
      <Container className="mt-10 bg-slate-200 flex justify-center items-center p-4">
        <button>Build a new house</button>
      </Container>
    </Container>
  )
}

export default HousesList
