import React from "react"

import { TInputTextProps } from "@/app/_components/ui/types"

const InputText = React.forwardRef<HTMLInputElement, TInputTextProps>(({ name, text, cb, className }, ref) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cb(event.target.value)
  }
  return (
    <input
      ref={ref}
      type="text"
      value={text}
      onChange={handleNameChange}
      className={className}
      name={name}
    />
  )
})

InputText.displayName = "InputText"
export default InputText
