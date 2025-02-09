import React from "react";

const Triangle = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    className="relative w-[100px] h-0 border-l-[50px] border-r-[50px] border-b-[40px] border-l-transparent border-r-transparent border-t-black bg-white"
    ref={ref}
  />
))

Triangle.displayName = "Triangle"
export default Triangle
