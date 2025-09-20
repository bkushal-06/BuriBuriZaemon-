import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication pages for Zaemon",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">Z</span>
            </div>
            <span className="font-bold">Zaemon</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            <Link 
              href="/auth/login" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}