import { TTypographyProps } from "@/app/_components/ui/types"
import React from "react"

const Typography = React.forwardRef<HTMLHeadingElement, TTypographyProps>(({ type, text, className }, ref) => {
  const HeadingTag = type ?? "h1"
  return (
    <HeadingTag className={className} ref={ref}>{text}</HeadingTag>
  )
})

export default Typography
