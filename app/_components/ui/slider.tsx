import React from "react"

import { TSliderProps } from "@/app/_components/ui/types"

const Slider = React.forwardRef<HTMLInputElement, TSliderProps>(({
  min,
  max,
  step,
  value,
  onChange,
  className
}, ref) => {
  return (
    <input
      ref={ref}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={className}
    />
  )
})

export default Slider
