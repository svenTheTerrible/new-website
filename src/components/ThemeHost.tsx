import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { buildSprite } from './theme'

export function ThemeHost({ glowStrength = 1, children }: { glowStrength?: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--glowmul', String(glowStrength))
    el.style.setProperty('--sprite', buildSprite(7))
    el.style.setProperty('--sprite-sm', buildSprite(4))
  }, [glowStrength])

  return <div className="theme-host" ref={ref}>{children}</div>
}
