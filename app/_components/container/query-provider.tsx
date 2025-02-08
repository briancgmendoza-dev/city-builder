'use client'

import React from "react"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"

import { queryClient } from "@/app/libs/react-query"
import { TQueryClientProviderProps } from "@/app/_components/container/type"

const persister = createSyncStoragePersister({ storage: typeof window !== 'undefined' ? window.localStorage : undefined })

const QueryProvider: React.FC<TQueryClientProviderProps> = ({ children }) => {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
    </PersistQueryClientProvider>
  )
}

export default QueryProvider
