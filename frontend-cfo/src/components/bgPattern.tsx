"use client"
import { ReactNode, useEffect, useState } from 'react'

interface BgPatternProps {
  children?: ReactNode
  className?: string
}

export function BgPattern({ children, className = "" }: BgPatternProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect theme changes
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen w-full bg-background relative ${className}`}>
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDarkMode ? 'rgba(255, 255, 255, 0.09)' : 'rgba(226, 232, 184, 0.8)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDarkMode ? 'rgba(255, 255, 255, 0.09)' : 'rgba(226, 232, 184, 0.8)'} 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}