import React from "react"

import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"

const HeroMessage: React.FC = () => (
  <Container className="w-[100%] bg-slate-200 p-4" dataTestId="hero-message-container">
    <Typography type="h1" text="City Builder" className="text-red-700 font-bold text-xl md:text-2xl" />
  </Container>
)

export default HeroMessage
