import React from "react"

import { TTypographyProps } from "@/app/_components/ui/types"

const Typography = React.forwardRef<HTMLHeadingElement, TTypographyProps>(({ type, text, className }, ref) => {
  const HeadingTag = type ?? "h1"
  return (
    <HeadingTag className={className} ref={ref}>{text}</HeadingTag>
  )
})

Typography.displayName = "Typography"
export default Typography
