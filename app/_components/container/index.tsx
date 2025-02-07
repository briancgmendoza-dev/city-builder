import { TContainerProps } from "@/app/_components/container/type"
import React from "react"

const Container = React.forwardRef<HTMLDivElement, TContainerProps>(({ type, children, className }, ref) => {
  const ContainerTag = type ?? "div"
  return (
    <ContainerTag className={className} ref={ref}>
      {children}
    </ContainerTag>
  )
})

export default Container
