import React from "react"

import { TWindowsProps } from "@/app/_components/house/types"

const Windows = React.forwardRef<HTMLDivElement, TWindowsProps>(({ number_of_windows = 1, parentWindowsContainerClassName }, ref) => {
  const windowsArray = Array.from({ length: number_of_windows }, (_,index) => index)
  return (
    <div ref={ref} className={`w-[100%] ${parentWindowsContainerClassName}`}>
      {windowsArray.map((_, index) => (
        <div key={index} className="w-[40px] h-[35px] border border-black bg-white" />
      ))}
    </div>
  )
})

Windows.displayName = "Windows"
export default Windows
