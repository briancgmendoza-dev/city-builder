import React from "react"

import { TButtonProps } from "@/app/_components/ui/types"

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(({ icon, text, cb, className, iconClassName }, ref) => {
  const btnClasses = `transition transform active:scale-95 cursor-pointer border bg-white rounded-[5px] shadow-md ${className}`
  return (
    <button ref={ref} onClick={cb} className={btnClasses}><span className={iconClassName}>{icon}</span>{text}</button>
  )
})

export default Button
