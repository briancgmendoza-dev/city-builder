import React from "react"

import Container from "@/app/_components/container"

const HousesContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref} type="section" className="mt-10 md:mt-0 sm:mt-4 md:w-[50%]">
      House Design
    </Container>
  )
})

HousesContainer.displayName = "HousesContainer"
export default HousesContainer
