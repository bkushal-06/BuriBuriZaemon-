"use client"

import { useTheme } from '@/components/theme-provider'
import { useEffect, useState } from 'react'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme, isLoaded } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return (
      <div className={`w-9 h-9 bg-muted rounded-md animate-pulse ${className}`} />
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️'
      case 'dark':
        return '🌙'
      case 'system':
        return '🖥️'
      default:
        return '☀️'
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      case 'system':
        return `System (${resolvedTheme})`
      default:
        return 'Light'
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        h-9 w-9 bg-background border border-border hover:bg-muted
        theme-transition focus:outline-none focus:ring-2 focus:ring-primary
        ${className}
      `}
      title={`Current theme: ${getThemeLabel()}. Click to cycle through themes.`}
      aria-label={`Switch theme (current: ${getThemeLabel()})`}
    >
      <span className="text-lg">{getThemeIcon()}</span>
    </button>
  )
}