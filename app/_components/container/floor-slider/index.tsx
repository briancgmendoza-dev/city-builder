import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Slider from "@/app/_components/ui/slider"

import { TFloorSliderProps } from "@/app/_components/container/floor-slider/type"

const FloorSlider = React.forwardRef<HTMLDivElement, TFloorSliderProps>(({ cb, floors = 1 }, ref) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cb(+event.target.value)
  }
  return (
    <Container ref={ref} className="px-3 py-1 flex md:flex-col align-center justify-between w-[220px]">
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
})

FloorSlider.displayName = "FloorSlider"
export default FloorSlider
