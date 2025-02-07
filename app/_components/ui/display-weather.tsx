import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import { TDisplayWeatherProps } from "@/app/_components/ui/types"
import { SnowyIcon } from "../icons/snowy"
import { SunnyIcon } from "../icons/sunny"
import { RainyIcon } from "../icons/rainy"

const DisplayWeather = React.forwardRef<HTMLDivElement, TDisplayWeatherProps>(({ showIcon, temperature }, ref) => {
  return (
    <Container ref={ref} className="flex items-center justify-evenly w-[120px]">
      <Typography text={temperature} className="font-medium text-xs" />
      {showIcon.toLowerCase().includes('cloudy') && (<RainyIcon />)}
      {showIcon.toLowerCase().includes('sunny') && (<SunnyIcon />)}
      {showIcon.toLowerCase().includes('snow') && (<SnowyIcon />)}
    </Container>
  )
})

export default DisplayWeather
