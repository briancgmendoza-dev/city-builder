"use client"

import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import Select from "@/app/_components/ui/select"
import Typography from "@/app/_components/ui/typography"

import { TColorPickerProps } from "@/app/_components/container/color-picker/type"

const ColorPicker = React.forwardRef<HTMLDivElement, TColorPickerProps>(({ color, cb }, ref) => {
  const { data: colorOptions } = useQuery<any>({ queryKey: ['colorOptions'] })
  const [colorValue, setColorValue] = useState<string>(color)
  const handleOnChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
    setColorValue(event.target.value)
    cb(event.target.value)
  }
  return (
    <Container ref={ref} className="px-3 py-1 flex items-center justify-between w-[180px]">
      <Typography text="Color:" className="text-sm mr-1 font-semibold" />
      <Select
        options={colorOptions}
        value={colorValue}
        onChange={handleOnChange}
      />
    </Container>
  )
})

ColorPicker.displayName = "ColorPicker"
export default ColorPicker
