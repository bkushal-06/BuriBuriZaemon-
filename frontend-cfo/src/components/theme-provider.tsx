"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'
type FontFamily = 'geist-sans' | 'roboto' | 'telex' | 'yantramanav' | 'exo-2'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  fontFamily: FontFamily
  setFontFamily: (font: FontFamily) => void
  systemTheme: ResolvedTheme
  isLoaded: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultFont?: FontFamily
  attribute?: string
  storageKey?: string
  enableSystem?: boolean
}

const THEME_STORAGE_KEY = 'theme-preference'
const FONT_STORAGE_KEY = 'font-preference'

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system',
  defaultFont = 'geist-sans',
  attribute = 'class',
  storageKey = THEME_STORAGE_KEY,
  enableSystem = true
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [fontFamily, setFontFamilyState] = useState<FontFamily>(defaultFont)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light')
  const [isLoaded, setIsLoaded] = useState(false)

  // Get resolved theme (actual theme applied)
  const resolvedTheme: ResolvedTheme = theme === 'system' ? systemTheme : theme

  // System theme detection
  const getSystemTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }, [])

  // Initialize from localStorage and system
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Get system theme
    const currentSystemTheme = getSystemTheme()
    setSystemTheme(currentSystemTheme)

    // Get stored preferences
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    const storedFont = localStorage.getItem(FONT_STORAGE_KEY) as FontFamily | null

    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark' || (enableSystem && storedTheme === 'system'))) {
      setThemeState(storedTheme)
    }

    if (storedFont) {
      setFontFamilyState(storedFont)
    }

    setIsLoaded(true)
  }, [storageKey, enableSystem, getSystemTheme])

  // Listen to system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !enableSystem) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [enableSystem])

  // Apply theme to document
  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) return

    const root = window.document.documentElement
    
    // Remove all theme classes
    root.classList.remove('light', 'dark')
    
    // Add current resolved theme
    if (attribute === 'class') {
      root.classList.add(resolvedTheme)
    } else {
      root.setAttribute(attribute, resolvedTheme)
    }

    // Update meta theme-color for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    const themeColor = resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff'
    
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', themeColor)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'theme-color'
      meta.content = themeColor
      document.head.appendChild(meta)
    }
  }, [resolvedTheme, attribute, isLoaded])

  // Apply font family to document
  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) return

    const root = window.document.documentElement
    const fontClasses = ['font-geist-sans', 'font-roboto', 'font-telex', 'font-yantramanav', 'font-exo-2']
    
    // Remove all font classes
    fontClasses.forEach(cls => {
      root.classList.remove(cls)
      document.body.classList.remove(cls)
    })
    
    // Add current font class
    const fontClass = `font-${fontFamily}`
    root.classList.add(fontClass)
    document.body.classList.add(fontClass)

    // Update CSS custom property for dynamic font switching
    root.style.setProperty('--active-font-family', `var(--font-${fontFamily})`)
  }, [fontFamily, isLoaded])

  // Theme setter with persistence
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
  }, [storageKey])

  // Font setter with persistence
  const setFontFamily = useCallback((newFont: FontFamily) => {
    setFontFamilyState(newFont)
    localStorage.setItem(FONT_STORAGE_KEY, newFont)
  }, [])

  const value = {
    theme,
    resolvedTheme,
    setTheme,
    fontFamily,
    setFontFamily,
    systemTheme,
    isLoaded,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}