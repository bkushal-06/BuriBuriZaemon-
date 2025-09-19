"use client"

import { useTheme } from '@/components/theme-provider'
import { useFontUtils } from '@/hooks/use-font-utils'
import { useEffect, useState } from 'react'

export function FontDemo() {
  const { theme, resolvedTheme, setTheme, systemTheme, isLoaded } = useTheme()
  const { fontFamily, setFontFamily, fontOptions, currentFontClass } = useFontUtils()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return (
      <div className="p-8 space-y-6 animate-pulse">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="space-y-4">
          <div className="h-4 bg-muted rounded w-1/4"></div>
          <div className="flex gap-4">
            <div className="h-10 bg-muted rounded w-24"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8 theme-transition">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Font & Theme Demo</h1>
          <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            System: {systemTheme} | Active: {resolvedTheme}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/50 rounded-lg border border-border">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-foreground">Theme:</label>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground theme-transition focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
              <option value="system">🖥️ System</option>
            </select>
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-medium text-foreground">Font Family:</label>
            <select 
              value={fontFamily} 
              onChange={(e) => setFontFamily(e.target.value as 'geist-sans' | 'roboto' | 'telex' | 'yantramanav' | 'exo-2')}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground theme-transition focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {fontOptions.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Font Family Showcase</h2>
        
        <div className="grid gap-6">
          {fontOptions.map((font) => (
            <div key={font.value} className="p-6 bg-background border border-border rounded-lg theme-transition hover:bg-muted/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-semibold text-foreground ${font.className}`}>
                    {font.label}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {font.value}
                  </span>
                </div>
                
                <p className={`text-foreground leading-relaxed ${font.className}`}>
                  The quick brown fox jumps over the lazy dog. This showcases the {font.label} typeface with proper theme integration and smooth transitions.
                </p>
                
                <div className={`text-sm space-x-4 ${font.className}`}>
                  <span className="font-light text-muted-foreground">Light</span>
                  <span className="font-normal text-foreground">Normal</span>
                  <span className="font-medium text-foreground">Medium</span>
                  <span className="font-semibold text-foreground">Semibold</span>
                  <span className="font-bold text-foreground">Bold</span>
                </div>
                
                <div className={`text-xs text-muted-foreground ${font.className}`}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Active Configuration</h2>
        <div className={`p-8 bg-primary/5 border-2 border-primary/20 rounded-lg ${currentFontClass} theme-transition`}>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Current: {fontOptions.find(f => f.value === fontFamily)?.label}
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              This text dynamically reflects your current font and theme selection. 
              The theme system now includes proper persistence, system preference detection, 
              and smooth transitions between states.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-muted-foreground">Theme Mode:</div>
                <div className="font-medium text-foreground">{theme}</div>
              </div>
              <div className="space-y-2">
                <div className="text-muted-foreground">Resolved Theme:</div>
                <div className="font-medium text-foreground">{resolvedTheme}</div>
              </div>
              <div className="space-y-2">
                <div className="text-muted-foreground">System Theme:</div>
                <div className="font-medium text-foreground">{systemTheme}</div>
              </div>
              <div className="space-y-2">
                <div className="text-muted-foreground">Active Font:</div>
                <div className="font-medium text-foreground">{fontFamily}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Theme Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-background border border-border rounded-lg theme-transition">
            <h4 className="font-semibold text-foreground mb-2">🔄 Persistence</h4>
            <p className="text-muted-foreground">Settings are saved and restored across sessions</p>
          </div>
          <div className="p-4 bg-background border border-border rounded-lg theme-transition">
            <h4 className="font-semibold text-foreground mb-2">🖥️ System Sync</h4>
            <p className="text-muted-foreground">Automatically follows system dark/light mode</p>
          </div>
          <div className="p-4 bg-background border border-border rounded-lg theme-transition">
            <h4 className="font-semibold text-foreground mb-2">✨ Smooth Transitions</h4>
            <p className="text-muted-foreground">Animated theme and font switching</p>
          </div>
        </div>
      </div>
    </div>
  )
}