import React, { memo } from "react"

import { TMemoizedDivProps } from "@/app/_components/container/memoized-div/type"

const MemoizedDiv = React.forwardRef<HTMLDivElement, TMemoizedDivProps>(
  ({ index, child, handleDragStart, handleDragOver, handleDragLeave }, ref) => {
    if (!handleDragStart || !handleDragOver || !index) return null
    return (
      <div
        ref={ref}
        className="p-4 border-2 border-black rounded-lg cursor-move"
        draggable
        onDragStart={(event) => handleDragStart(index, event)}
        onDragOver={(event) => handleDragOver(index, event)}
        onDragLeave={handleDragLeave}
      >
        {child}
      </div>
    );
  }
);

// const MemoizedDiv: React.FC<TMemoizedDivProps> = memo(({ index, child, handleDragStart, handleDragOver, handleDragLeave }) => {
//   if (!handleDragStart || !handleDragOver || !index) return null
//   return (
//     <div
//       draggable
//       onDragStart={(event) => handleDragStart(index, event)}
//       onDragOver={(event) => handleDragOver(index, event)}
//       onDragLeave={handleDragLeave}
//     >
//       {child}
//     </div>
//   )
// })

MemoizedDiv.displayName = "MemoizedDiv"
export default MemoizedDiv
