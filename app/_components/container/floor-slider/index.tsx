import React from "react"
import { useQuery } from "@tanstack/react-query"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import Slider from "@/app/_components/ui/slider"

import { TFloorSliderProps } from "@/app/_components/container/floor-slider/type"

const FloorSlider = React.forwardRef<HTMLDivElement, TFloorSliderProps>(({ cb, floors = 1 }, ref) => {
  const { data: floorOptions } = useQuery<any>({ queryKey: ['floorOptions'] })
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cb(+event.target.value)
  }
  return (
    <Container ref={ref} className="px-3 py-1 flex md:flex-col align-center justify-between w-[220px]">
      <Typography text={`Floors: ${floors}`} className="text-sm font-semibold" />
      <Slider
        min={floorOptions?.min}
        max={floorOptions?.max}
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
