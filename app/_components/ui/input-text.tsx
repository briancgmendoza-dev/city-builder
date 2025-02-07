import React from "react"

import { TInputTextProps } from "@/app/_components/ui/types"

const InputText = React.forwardRef<HTMLInputElement, TInputTextProps>(({ text, cb, className }, ref) => {
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
    />
  )
})

export default InputText
