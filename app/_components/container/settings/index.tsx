import React, { useState } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Button from "@/app/_components/ui/button"

import { TSettingsProps, TFloorOptions } from "@/app/_components/container/settings/types"

const Settings = React.forwardRef<HTMLDivElement, TSettingsProps>(({ closeModal }, ref) => {
  const [newMaxFloors, setNewMaxFloors] = useState<number | string>('')
  const [newColor, setNewColor] = useState<string>('')
  const { data: floorOptions } = useQuery<TFloorOptions>({ queryKey: ['floorOptions'] })
  const { data: colorOptions } = useQuery<string[]>({ queryKey: ['colorOptions'] })

  console.log("@@@ Color: ", colorOptions)
  console.log("@@@ Floor: ", floorOptions)

  const updateFloorOptionsMutation = useMutation<void, Error, number>({
    mutationFn: (newMaxFloors: number) => {
      if (floorOptions) {
        floorOptions.max = newMaxFloors
      }

      return Promise.resolve()
    }
  })

  const updateColorOptionsMutation = useMutation<void, Error, string>({
    mutationFn: (newColor: string) => {
      colorOptions?.push(newColor)

      return Promise.resolve()
    }
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (newMaxFloors) {
      updateFloorOptionsMutation.mutate(+newMaxFloors)
    }

    if (newColor) {
      updateColorOptionsMutation.mutate(newColor)
    }

    setNewColor("")
    setNewMaxFloors("")
  }

  const handleMaxFloorsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (+value <= 0 ) {
      return
    }
    setNewMaxFloors(value)
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColor(event.target.value)
  }

  return (
    <Container ref={ref}>
      <form onSubmit={handleSubmit}>
        <Typography type="h1" text="Update City, Floor and Color settings" className="text-lg font-bold mb-2"/>
        <Container className="shadow-md p-6 bg-white rounded-lg">
          <Typography text={`Current Floor range ${floorOptions?.min} - ${floorOptions?.max}`} />
          <input type="number" value={newMaxFloors} placeholder="Update Floor No." onChange={handleMaxFloorsChange} className="p-2 mt-2" />
        </Container>
        <ul className="list-disc mt-2 shadow p-6 bg-white rounded-lg">
          List of available colors:
          {colorOptions?.map((color) => (
            <li key={color} className="ml-6 mb-2">
              {color}
            </li>
          ))}
          <input value={newColor} placeholder="Add your new color" onChange={handleColorChange} className="p-2" />
        </ul>

        <Container className="flex items-center justify-between mt-3 mb-2">
          <Button
            text="Submit"
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            />
          <Button
            text="Close"
            type="button"
            cb={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            />
        </Container>
      </form>
    </Container>
  )
})

Settings.displayName = "Settings"
export default Settings
