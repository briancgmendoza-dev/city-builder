"use client"

import React from "react"

import Container from "@/app/_components/container"

const Loader = React.forwardRef<HTMLDivElement>((_, ref) => (
  <Container type="section" className="z-10" ref={ref} dataTestId="loading">
    <Container className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-gray-50 bg-opacity-75">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin border-t-blue-500" />
    </Container>
  </Container>
))

Loader.displayName = "Loader"
export default Loader
