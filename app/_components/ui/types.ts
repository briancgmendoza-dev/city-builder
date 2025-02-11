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
  value?: string | number
  name?: string
  cb: (string: string) => void
  className?: string
  placeholder: string
}

export type TButtonProps = {
  type: "button" | "submit"
  icon?: React.ReactNode
  text?: string
  cb?: () => void
  className?: string
  iconClassName?: string
}

export type TModalProps = {
  isOpen: boolean
  closeModal: () => void
  modalContent: React.ReactNode
}

export type TDisplayWeatherProps = {
  showIcon: string
  temperature: string
}
