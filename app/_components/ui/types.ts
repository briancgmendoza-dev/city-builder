import React from "react"

export type TTypographyProps = {
  text: string
  className?: string
  type?: "h1" | "h2"
}

export type TSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
