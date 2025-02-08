"use client"

import React, { useState, useCallback } from "react"
import { useQueryClient } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import DisplayWeather from "@/app/_components/ui/display-weather"
import InputText from "@/app/_components/ui/input-text"
import Typography from "@/app/_components/ui/typography"
import ColorPicker from "@/app/_components/container/color-picker"
import FloorSlider from "@/app/_components/container/floor-slider"
import Button from "@/app/_components/ui/button"
import Modal from "@/app/_components/ui/modal"
import HouseIcon from "../../icons/house"
import TrashcanIcon from "../../icons/trashcan"

import { THouse } from "@/app/_components/container/houses-list/type"
import { TCityWeather } from "@/app/service/type"

const HousesList: React.FC<{}> = () => {
  const appQueryClient = useQueryClient()
  const cities = appQueryClient.getQueryData<TCityWeather[]>(['cities'])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [citiesArr, setCitiesArr] = useState<(TCityWeather | { error: string })[]>(cities ?? [{ error: 'No data...'}])

  const updateHouse = useCallback(
    (cityName: string, houseId: string, updateFn: (house: THouse) => THouse) => {
      setCitiesArr((prevCities) => {
        return prevCities.map((city) => {
          if ("error" in city) return city;

          if (city.name === cityName) {
            const updatedHouses = city.houses.map((house) => {
              if (house.id === houseId) {
                return updateFn(house)
              }
              return house
            })
            return { ...city, houses: updatedHouses }
          }
          return city;
        })
      })

      appQueryClient.invalidateQueries({ queryKey: ['cities']})
    },
    [appQueryClient]
  );

  const handleUpdateFloors = useCallback(
    (cityName: string, houseId: string, newFloorCount: number) => {
      updateHouse(cityName, houseId, (house) => ({ ...house, floors: newFloorCount }))
    },
    [updateHouse]
  );

  const handleUpdateName = useCallback(
    (cityName: string, houseId: string, newHouseName: string) => {
      // Add a debounce InputText loses focus every keystroke
      updateHouse(cityName, houseId, (house) => ({ ...house, name: newHouseName }))
    },
    [updateHouse]
  );

  const handleUpdateColor = useCallback(
    (cityName: string, houseId: string, newColor: string) => {
      updateHouse(cityName, houseId, (house) => ({ ...house, color: newColor }))
    },
    [updateHouse]
  );

  return (
    <Container type="section" className="md:w-[50%] border">
      {citiesArr?.map((city) => {
        if ('error' in city) {
          return (
            <div key={city.error} className="text-red-500">Error: {city.error}</div>
          )
        }

        return (
          <div key={city.name}>
            <Container className="flex items-center justify-between bg-slate-200 p-4">
              <Typography type="h2" text={city.name} className="font-bold" />
              <DisplayWeather temperature={`${city.temp_c} °C`} showIcon={city.condition.text} />
            </Container>
            <Container className="mt-2">
              {city.houses.length > 0 ? city.houses.map((house) => (
                <Container className="my-3" key={house.name}>
                  <Container className="px-4 flex flex-row items-start justify-between">
                    <InputText
                      text={house.name}
                      cb={(newHouseName) => handleUpdateName(city.name, house.id as string, newHouseName)}
                      className="w-[150px] md:w-[30%] px-4 py-2"
                    />
                    <Button
                      icon={<TrashcanIcon />}
                      className="p-1 bg-white"
                      iconClassName=""
                      cb={() => {}}
                    />
                  </Container>
                  <Container className="w-full md:w-[90%] px-5 flex flex-col md:flex-row items-start justify-between">
                    <FloorSlider
                      floors={house.floors}
                      cb={(newFloorCount) => handleUpdateFloors(city.name, house.id as string, newFloorCount)}
                    />
                    <ColorPicker color={house.color} cb={(newColor) => handleUpdateColor(city.name, house.id as string, newColor)} />
                  </Container>
                </Container>
              )) : (
                <Container className="flex items-center justify-center">
                  <Typography text="No house yet..." />
                </Container>
              )}
            </Container>
            <Container className="mt-2 bg-slate-200 flex justify-center items-center p-4">
              <Button
                icon={<HouseIcon />}
                text="Build a new house"
                cb={() => setShowModal(!showModal)}
                className="flex items-center justify-center py-2 px-5 bg-white"
                iconClassName="mr-2"
              />
            </Container>
          </div>
        )
      })}
      <Modal isOpen={showModal} closeModal={() => setShowModal(!showModal)} />
    </Container>
  )
}

export default HousesList
