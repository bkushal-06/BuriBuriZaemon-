"use client"

import { useFontUtils } from '@/hooks/use-font-utils'
import { useEffect, useState } from 'react'

export function FontToggle({ className }: { className?: string }) {
  const { getCurrentFont, cycleFont, isLoaded } = useFontUtils()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return (
      <div className={`h-9 bg-muted rounded-md animate-pulse px-3 min-w-[80px] ${className}`} />
    )
  }

  const currentFont = getCurrentFont()

  return (
    <button
      onClick={cycleFont}
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        h-9 px-3 bg-background border border-border hover:bg-muted
        theme-transition focus:outline-none focus:ring-2 focus:ring-primary
        ${currentFont.className} ${className}
      `}
      title={`Current font: ${currentFont.label} - ${currentFont.description}. Click to cycle fonts.`}
      aria-label={`Switch font (current: ${currentFont.label})`}
    >
      <span className="font-semibold">{currentFont.label}</span>
    </button>
  )
}