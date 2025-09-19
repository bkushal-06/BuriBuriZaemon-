import { useTheme } from '@/components/theme-provider'

export function useFontUtils() {
  const { fontFamily, setFontFamily, isLoaded } = useTheme()

  const fontOptions = [
    { value: 'geist-sans', label: 'Geist Sans', className: 'font-geist-sans', description: 'Modern geometric sans-serif' },
    { value: 'roboto', label: 'Roboto', className: 'font-roboto', description: 'Neo-grotesque sans-serif' },
    { value: 'telex', label: 'Telex', className: 'font-telex', description: 'Distinctive retro typeface' },
    { value: 'yantramanav', label: 'Yantramanav', className: 'font-yantramanav', description: 'Devanagari and Latin typeface' },
    { value: 'exo-2', label: 'Exo 2', className: 'font-exo-2', description: 'Contemporary geometric sans' }
  ] as const

  const getCurrentFont = () => {
    return fontOptions.find(font => font.value === fontFamily) || fontOptions[0]
  }

  const getNextFont = () => {
    const currentIndex = fontOptions.findIndex(font => font.value === fontFamily)
    const nextIndex = (currentIndex + 1) % fontOptions.length
    return fontOptions[nextIndex]
  }

  const cycleFont = () => {
    const nextFont = getNextFont()
    setFontFamily(nextFont.value)
  }

  return {
    fontFamily,
    setFontFamily,
    fontOptions,
    getCurrentFont,
    getNextFont,
    cycleFont,
    currentFontClass: getCurrentFont().className,
    isLoaded
  }
}