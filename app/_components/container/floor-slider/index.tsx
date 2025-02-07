"use client"

import React, { useState, useMemo } from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Slider from "@/app/_components/ui/slider"

const FloorSlider = () => {
  const [floors, setFloors] = useState<number>(1)

  const handleFloorOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFloors(+event.target.value)
  }

  const handleUpdateFloors = useMemo(() => handleFloorOnChange, [floors])

  return (
    <Container className="px-3 py-1 flex md:flex-col align-center justify-between w-[220px]">
      <Typography text={`Floors: ${floors.toString()}`} className="text-sm font-semibold" />
      <Slider
        min={1}
        max={5}
        step={1}
        value={floors}
        onChange={handleUpdateFloors}
        className=""
      />
    </Container>
  )
}

export default FloorSlider
