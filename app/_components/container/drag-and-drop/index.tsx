import React, { useState, useMemo, useRef, useImperativeHandle } from 'react'

import MemoizedDiv from '@/app/_components/container/memoized-div'
import { TDragAndDropProps } from '@/app/_components/container/drag-and-drop/type'

/**
 * TODO: FIX BUGS in DnD
 * 1. First created house doesn't appear (only showing 2 divs, when it should have 3) -> Note: Houses (in design component) shows 3 houses
 * 2. Can only drop from top to bottom child div (cant go bottom to top)
 * 3. Floor slider can no longer slide, just clicking to next/prev step
 * 4. Houses (in design component) doesn't switch upon successful drag n drop
 */

const DragAndDrop = React.forwardRef<HTMLDivElement, TDragAndDropProps>(({ children }, ref) => {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  // const containerRef = useRef<HTMLDivElement>(null);

  // useImperativeHandle(ref, () => containerRef.current!);

  const childRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDragStart = (index: number, event: React.DragEvent) => {
    setDraggingIndex(index)
    event.dataTransfer.setData("text/plain", index.toString())
  }

  const handleDragOver = (index: number, event: React.DragEvent) => {
    event.preventDefault()
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    if (draggingIndex !== null && dragOverIndex !== null &&
        draggingIndex !== dragOverIndex
    ) {
      const container = ref?.current;

      if (!container) return

      const draggedElement = childRefs.current[draggingIndex] as HTMLElement
      const targetElement = childRefs.current[dragOverIndex] as HTMLElement

      if (draggedElement && targetElement) {
        container.insertBefore(targetElement, draggedElement)
      }
    }

    setDraggingIndex(null)
    setDragOverIndex(null)
  }

  const memoizedChildren = useMemo(
    () => React.Children.map(children, (child, index) => (
      <MemoizedDiv
        key={index}
        index={index}
        child={child}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        ref={(el) => (childRefs.current[index] = el)}
      />
      )
    ),
    [children]
  )
  return (
    <div
      ref={ref}
      className='flex flex-col gap-4'
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {memoizedChildren}
    </div>
  )
})

DragAndDrop.displayName = "DragAndDrop"
export default DragAndDrop
