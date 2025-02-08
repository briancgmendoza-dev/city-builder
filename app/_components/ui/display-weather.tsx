import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"
import { SnowyIcon } from "@/app/_components/icons/snowy"
import { SunnyIcon } from "@/app/_components/icons/sunny"
import { RainyIcon } from "@/app/_components/icons/rainy"
import { CloudyIcon } from "@/app/_components/icons/cloudy"

import { TDisplayWeatherProps } from "@/app/_components/ui/types"

const weatherIcons = {
  rain: <RainyIcon />,
  sun: <SunnyIcon />,
  clear: <SunnyIcon />,
  snow: <SnowyIcon />,
  cloud: <CloudyIcon />,
  overcast: <CloudyIcon />
}

const DisplayWeather = React.forwardRef<HTMLDivElement, TDisplayWeatherProps>(({ showIcon, temperature }, ref) => {
  const weatherCondition = showIcon.toLowerCase()
  const weatherIcon = Object.keys(weatherIcons).find(condition => weatherCondition.includes(condition))
  const iconToRender = weatherIcon ? weatherIcons[weatherIcon as keyof typeof weatherIcons] : null

  return (
    <Container ref={ref} className="flex items-center justify-evenly w-[120px]">
      <Typography text={temperature} className="font-medium text-xs" />
      {iconToRender}
    </Container>
  )
})

DisplayWeather.displayName = "DisplayWeather"
export default DisplayWeather
