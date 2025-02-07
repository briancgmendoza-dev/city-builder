"use client"

import React, { useState } from "react"

import Container from "@/app/_components/container"
import Select from "@/app/_components/ui/select"
import Typography from "@/app/_components/ui/typography"

const ColorPicker = () => {
  const [colorValue, setColorValue] = useState<string>('')

  const options: string[] = [
    "Red",
    "Blue",
    "Black",
    "Pink",
    "Purple"
  ]

  // TODO: Might need to convert in useMemo or maybe useCallback is enough?
  const handleOnChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
    setColorValue(event.target.value)
  }

  return (
    <Container className="px-3 py-1 flex items-center justify-between w-[120px]">
      <Typography text="Color:" className="text-sm mr-1 font-semibold" />
      <Select
        options={options}
        value={colorValue}
        onChange={handleOnChange}
      />
    </Container>
  )
}

export default ColorPicker
