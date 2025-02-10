/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

export type TMemoizedDivProps = {
  index?: number
  child: any
  handleDragStart?: (index: number, event: React.DragEvent) => void
  handleDragOver?: (index: number, event: React.DragEvent) => void
  handleDragLeave?: () => void
}
