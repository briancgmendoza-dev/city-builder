import React from "react"

export type TContainerProps = {
  children: React.ReactNode
  className?: string
  type?: "section" | "div"
  dataTestId?: string
}

export type TQueryClientProviderProps = {
  children: React.ReactNode
}
