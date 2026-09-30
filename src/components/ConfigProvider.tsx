import { useEffect, useMemo, useState } from 'react'
import type { ConfigContextValue, SiteConfig } from '../config'
import { ConfigContext } from './config-context'

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/config.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load config (${response.status})`)
        }
        return response.json() as Promise<SiteConfig>
      })
      .then(setConfig)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : String(err)),
      )
      .finally(() => setIsLoading(false))
  }, [])

  const value = useMemo<ConfigContextValue>(
    () => ({ config, isLoading, error }),
    [config, isLoading, error],
  )

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  )
}
