import React from "react"

import { TButtonProps } from "@/app/_components/ui/types"

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(({ type = "button", icon, text, cb, className, iconClassName }, ref) => {
  const btnClasses = `transition transform active:scale-95 cursor-pointer border rounded-[5px] shadow-md ${className}`
  return (
    <button type={type} ref={ref} onClick={cb} className={btnClasses}><span className={iconClassName}>{icon}</span>{text}</button>
  )
})

Button.displayName = "Button"
export default Button
