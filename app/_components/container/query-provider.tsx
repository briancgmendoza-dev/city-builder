'use client'

import React, { Suspense, useEffect, useState } from "react"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"

import Loader from "@/app/_components/ui/loader"

import { queryClient } from "@/app/libs/react-query"
import { TQueryClientProviderProps } from "@/app/_components/container/type"

const QueryProvider: React.FC<TQueryClientProviderProps> = ({ children }) => {
  const [persister, setPersister] = useState<ReturnType<typeof createSyncStoragePersister> | null>(null)

  useEffect(() => {
    setPersister(createSyncStoragePersister({ storage: window.localStorage }))
  }, [])

  if (!persister) return <Loader />

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </PersistQueryClientProvider>
  )
}

export default QueryProvider
