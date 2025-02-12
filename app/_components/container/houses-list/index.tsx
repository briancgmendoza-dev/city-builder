import React, { useState, useCallback } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import DisplayWeather from "@/app/_components/ui/display-weather"
import Typography from "@/app/_components/ui/typography"
import Button from "@/app/_components/ui/button"
import Modal from "@/app/_components/ui/modal"
import HouseIcon from "@/app/_components/icons/house"
import HouseItem from "@/app/_components/container/houses-list/house-item"

import { THousesListProps, THouse } from "@/app/_components/container/houses-list/type"
import { TCities } from "@/app/service/type"
import { HouseService } from "@/app/service/house-service"

const HousesList = React.memo<THousesListProps>(({ city }) => {
  const appQueryClient = useQueryClient()
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [showToaster, setShowToaster] = useState<boolean>(false) // TODO: Add Toaster
  const [modalPropsCityName, setModalPropsCityName] = useState<string>('')

  const updateHouse = useCallback(
    (houseId: string, updateFn: (house: THouse) => THouse | null) => {
      appQueryClient.setQueryData<TCities[]>(["cities"], (oldCities) =>
        oldCities?.map((c) =>
          c.name === city.name
      ? { ...c, houses: c.houses.map((h) => (h.id === houseId ? updateFn(h) || h : h)) }
      : c
        )
      );
    },
    [appQueryClient, city.name]
  );

  const deleteHouseMutation = useMutation<void, Error, { cityName: string; houseId: string }>({
    mutationFn: async ({ cityName, houseId }) => {
      return await HouseService.deleteHouse(cityName, houseId, appQueryClient);
    },
  });

  const handleDeleteHouse = useCallback(
    async (houseId: string) => {
      await deleteHouseMutation.mutateAsync({ cityName: city.name, houseId });
    },
    [deleteHouseMutation, city.name]
  );

  if (!city) return null

  return (
    <Container type="section" dataTestId="houses-list-container">
      <Container className="flex items-center justify-between bg-slate-200 p-4">
        <Typography type="h2" text={city.name} className="font-bold" />
        <DisplayWeather temperature={`${city.temp_c} °C`} showIcon={city.condition.text} />
      </Container>
      {city.houses.length > 0 ? city.houses.map((house) => (
        <HouseItem
          key={house.id}
          house={house}
          updateHouse={updateHouse}
          handleDeleteHouse={handleDeleteHouse}
        />
      )) : (
        <Container className="flex items-center justify-center">
          <Typography text="No house yet..." />
        </Container>
      )}

      <Container className="bg-slate-200 flex justify-center items-center p-4 mb-5">
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
      {showModal && (
        <Modal isOpen={showModal} closeModal={() => setShowModal(!showModal)} modalPropsCityName={modalPropsCityName} />
      )}
    </Container>
  )
}, (prevProps, nextProps) => {
  const isSameCity = prevProps.city.name === nextProps.city.name
  const isSameHousesArr = prevProps.city.houses === nextProps.city.houses

  if (!isSameHousesArr) {
    // Using prevProps for displaying city.name only
    console.log(`Re-rendering ${prevProps.city.name} City Arr due to Houses List Update`)
  }

  return isSameCity && isSameHousesArr
})

HousesList.displayName = "HousesList"
export default React.memo(HousesList)
