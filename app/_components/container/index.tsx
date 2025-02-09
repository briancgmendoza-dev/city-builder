import React from "react"

import { TContainerProps } from "@/app/_components/container/type"

const Container = React.forwardRef<HTMLDivElement, TContainerProps>(({ type, children, className }, ref) => {
  const ContainerTag = type ?? "div"
  return (
    <ContainerTag className={className} ref={ref}>
      {children}
    </ContainerTag>
  )
})

Container.displayName = "Container"
export default Container
