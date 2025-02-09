import React, { useState, useCallback } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Button from "@/app/_components/ui/button"
import FloorSlider from "@/app/_components/container/floor-slider"
import InputText from "@/app/_components/ui/input-text"
import ColorPicker from "@/app/_components/container/color-picker"

import { TAddHouseFormProps } from "@/app/_components/form/type"
import { THouse } from "@/app/_components/container/houses-list/type"

import { HouseService } from "@/app/service/house-service"
import { generateAlphanumericId } from "@/app/utils"

const AddHouse: React.FC<TAddHouseFormProps> = ({ cb, city }) => {
  const appQueryClient = useQueryClient()
  const [addHouseValues, setAddHouseValues] = useState<THouse>({
    name: '',
    floors: 1,
    color: 'Red'
  })

  const handleUpdateName = useCallback(
    (newHouseName: string) => {
      setAddHouseValues(
        (prev) => ({
          ...prev,
          name: newHouseName
        })
      )
    },
    []
  )

  const handleUpdateFloors = useCallback(
    (newFloorCount: number) => {
      setAddHouseValues(
        (prev) => ({
          ...prev,
          floors: newFloorCount
        })
      )
    },
    []
  )

  const handleUpdateColor = useCallback(
    (newColor: string) => {
      setAddHouseValues(
        (prev) => ({
          ...prev,
          color: newColor
        })
      )
    },
    []
  )

  const addHouseMutation = useMutation<THouse[], Error, THouse>({
    mutationFn: async (newHouse: THouse) => {
      return await HouseService.addHouse(city, [newHouse], appQueryClient, cb)
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries({ queryKey: ['cities'] })
    }
  })

  const handleOnSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newHouseWithId = {
      ...addHouseValues,
      id: generateAlphanumericId()
    }

    await addHouseMutation.mutateAsync(newHouseWithId)

  }, [addHouseValues, addHouseMutation])

  return (
    <form onSubmit={handleOnSubmit}>
      {Object.keys(addHouseValues).map((key) => {
        const value = addHouseValues[key as keyof THouse]
        return (
          <Container key={key} className="mt-3">
            {key === 'name' && (
              <>
                <Typography text={key.charAt(0).toUpperCase() + key.slice(1)} />
                <InputText
                  name={key}
                  text={value as string}
                  cb={(newHouseName) => handleUpdateName(newHouseName)}
                  className="px-4 py-2 mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </>
            )}
            {key === 'floors' && (
              <FloorSlider cb={(newFloorCount) => handleUpdateFloors(newFloorCount)} floors={Number(value) ?? 1}/>
            )}
            {key === 'color' && (
              <ColorPicker color={value as string} cb={(newColor) => handleUpdateColor(newColor)} />
            )}
          </Container>
        )
      })}

      <Container className="mt-4 flex items-center justify-between">
        <Button
          type="submit"
          text="Submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        />
        <Button
          type="button"
          text="Close"
          cb={() => cb()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        />
      </Container>
    </form>
  )
}

export default AddHouse
