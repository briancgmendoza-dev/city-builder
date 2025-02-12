import React from "react"

import { TContainerProps } from "@/app/_components/container/type"

const Container = React.forwardRef<HTMLDivElement, TContainerProps>(({ type, children, className, dataTestId }, ref) => {
  const ContainerTag = type ?? "div"
  return (
    <ContainerTag className={className} ref={ref} data-testid={dataTestId}>
      {children}
    </ContainerTag>
  )
})

Container.displayName = "Container"
export default Container
