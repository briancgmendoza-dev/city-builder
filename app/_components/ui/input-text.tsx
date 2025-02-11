import React from "react"

import { TInputTextProps } from "@/app/_components/ui/types"

const InputText = React.forwardRef<HTMLInputElement, TInputTextProps>(({ name, value, cb, className, placeholder }, ref) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cb(event.target.value)
  }
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={handleNameChange}
      className={className}
      name={name}
      placeholder={placeholder}
    />
  )
})

InputText.displayName = "InputText"
export default InputText
