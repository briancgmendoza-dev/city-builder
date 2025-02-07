import React from "react"

import { TSelectProps } from "@/app/_components/ui/types"

const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(({ options, value, onChange }, ref) => {
  if (options.length === 0) return null
  return (
    <select ref={ref} value={value} onChange={onChange} className="border px-2 rounded-[5px]">
      {options?.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
})

export default Select
