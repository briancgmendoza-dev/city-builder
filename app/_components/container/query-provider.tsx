'use client'

import React from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/app/libs/react-query"

import { TQueryClientProviderProps } from "@/app/_components/container/type"

const QueryProvider: React.FC<TQueryClientProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
