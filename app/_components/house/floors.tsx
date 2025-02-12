import React from "react"

import { TFloorsProps } from "@/app/_components/house/types"

const Floors = React.forwardRef<HTMLDivElement, TFloorsProps>(({ children, color, floorsClassName }, ref) => (
  <div ref={ref} className={`w-[100px] border-2 border-black ${floorsClassName}`} style={{ backgroundColor: color }} data-testid="house-floors-container">
    {children}
  </div>
))

Floors.displayName = "Floors"
export default Floors
