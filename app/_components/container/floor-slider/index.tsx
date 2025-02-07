import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Slider from "@/app/_components/ui/slider"

import { TFloorSliderProps } from "@/app/_components/container/floor-slider/type"

const FloorSlider: React.FC<TFloorSliderProps> = ({ floors = 1, cb }) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cb(+event.target.value)
  }
  return (
    <Container className="px-3 py-1 flex md:flex-col align-center justify-between w-[220px]">
      <Typography text={`Floors: ${floors}`} className="text-sm font-semibold" />
      <Slider
        min={1}
        max={5}
        step={1}
        value={floors}
        onChange={handleSliderChange}
        className=""
      />
    </Container>
  )
}

export default FloorSlider
