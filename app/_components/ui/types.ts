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

export type TSliderProps = {
  min: number
  max: number
  step: number
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export type TInputTextProps = {
  text: string
  cb: (string: string) => void
  className?: string
}
