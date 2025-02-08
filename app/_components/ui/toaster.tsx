import React from "react"

const Toaster = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>Hello</div>
))

Toaster.displayName = "Toaster"
export default Toaster
