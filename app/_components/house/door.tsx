import React from "react"

const Door = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="w-[40px] h-[50px] border-2 border-double border-black bg-white" data-testid="house-door" />
))

Door.displayName = "Door"
export default Door
