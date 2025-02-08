import React, { useState, useCallback } from "react"
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query"

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
import { HouseService } from "@/app/service/house-service"

const HousesList = React.forwardRef<HTMLDivElement>((_, ref) => {
  const appQueryClient = useQueryClient()
  const { data: cities } = useQuery<TCityWeather[]>({ queryKey: ['cities'] })
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [showToaster, setShowToaster] = useState<boolean>(false) // TODO: Add Toaster
  const [modalPropsCityName, setModalPropsCityName] = useState<string>('')

  const updateHouse = useCallback(
    (cityName: string, houseId: string, updateFn: (house: THouse) => THouse | null) => {
      const cities = appQueryClient.getQueryData<TCityWeather[]>(['cities'])

      if (cities) {
        const updatedCities = cities.map((city) => {
          if (city.name === cityName) {
            const updatedHouses = city.houses.map((house) => {
              if (house.id === houseId) {
                return updateFn(house) || house
              }

              return house
            })

            return { ...city, houses: updatedHouses }
          }

          return city
        })

        appQueryClient.setQueryData(['cities'], updatedCities)
      }
    },
    [appQueryClient]
  )

  const handleUpdateFloors = useCallback(
    (cityName: string, houseId: string, newFloorCount: number) => {
      updateHouse(cityName, houseId, (house) => ({ ...house, floors: newFloorCount }))
    },
    [updateHouse]
  )

  const handleUpdateName = useCallback(
    (cityName: string, houseId: string, newHouseName: string) => {
      updateHouse(cityName, houseId, (house) => ({ ...house, name: newHouseName }))
    }, [updateHouse]
  )

  const handleUpdateColor = useCallback(
    (cityName: string, houseId: string, newColor: string) => {
      updateHouse(cityName, houseId, (house) => ({ ...house, color: newColor }))
    },
    [updateHouse]
  )

  const deleteHouseMutation = useMutation<void, Error, { cityName: string, houseId: string }>({
    mutationFn: async ({ cityName, houseId }) => {
      return await HouseService.deleteHouse(cityName, houseId, appQueryClient)
    },
    // onSuccess: () => setShowToaster(!showToaster)
  })

  const handleDeleteHouse = useCallback(async (cityName: string, houseId: string) => {
      await deleteHouseMutation.mutateAsync({ cityName, houseId })
    },
    [deleteHouseMutation]
  )

  return (
    <Container ref={ref} type="section" className="md:w-[50%] border">
      {cities?.map((city, index) => {
        return (
          <Container
            key={city.name}
            className={(index === 0 || index === cities.length - 1) ? 'm-0': 'my-10'}
          >
            <Container className="flex items-center justify-between bg-slate-200 p-4">
              <Typography type="h2" text={city.name} className="font-bold" />
              <DisplayWeather temperature={`${city.temp_c} °C`} showIcon={city.condition.text} />
            </Container>
            {city.houses.length > 0 ? city.houses.map((house) => (
              <Container key={house.id}>
                <Container className="px-4 flex flex-row items-start justify-between my-2">
                  <InputText
                    key={house.id}
                    text={house.name}
                    cb={(newHouseName) => handleUpdateName(city.name, house.id as string, newHouseName)}
                    className="w-[150px] md:w-[30%] px-4 py-2"
                  />
                  <Button
                    type="button"
                    icon={<TrashcanIcon />}
                    cb={() => handleDeleteHouse(city.name, house.id as string)}
                    className="p-1 bg-white"
                  />
                </Container>
                <Container className="w-full md:w-[90%] px-5 flex flex-col md:flex-row items-start justify-between">
                  <FloorSlider
                    floors={house.floors}
                    cb={(newFloorCount) => handleUpdateFloors(city.name, house.id as string, newFloorCount)}
                  />
                  <ColorPicker
                    color={house.color}
                    cb={(newColor) => handleUpdateColor(city.name, house.id as string, newColor)}
                  />
                </Container>
              </Container>
            )) : (
              <Container className="flex items-center justify-center">
                <Typography text="No house yet..." />
              </Container>
            )}

            <Container className="bg-slate-200 flex justify-center items-center p-4">
              <Button
                type="button"
                icon={<HouseIcon />}
                text="Build a new house"
                cb={() => {
                  setShowModal(!showModal)
                  setModalPropsCityName(city.name)
                }}
                className="flex items-center justify-center py-2 px-5 bg-white"
                iconClassName="mr-2"
              />
            </Container>
          </Container>
        )
      })}
      {showModal && (
        <Modal isOpen={showModal} closeModal={() => setShowModal(!showModal)} modalPropsCityName={modalPropsCityName} />
      )}
    </Container>
  )
})

HousesList.displayName = "HousesList"
export default HousesList
