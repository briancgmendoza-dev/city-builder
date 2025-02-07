import React, { useState, useCallback } from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Button from "@/app/_components/ui/button"

import { TAddHouseFormProps } from "@/app/_components/form/type"
import { THouse } from "@/app/_components/container/houses-list/type"
import FloorSlider from "../container/floor-slider"
import InputText from "../ui/input-text"
import ColorPicker from "../container/color-picker"

const AddHouse: React.FC<TAddHouseFormProps> = ({ cb }) => {
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

  const handleResetValues = () => setAddHouseValues(
    () => ({
      name: '',
      floors: 1,
      color: 'Red'
    })
  )

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleResetValues()
    cb()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      {Object.keys(addHouseValues).map((key, index) => {
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
          text="Submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          />
        <Button
          text="Close"
          cb={() => cb}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        />
      </Container>
    </form>
  )
}

export default AddHouse
