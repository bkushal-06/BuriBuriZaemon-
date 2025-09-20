"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileSearch, 
  Calculator, 
  LayoutDashboard,
  Menu, 
  Settings, 
  Bell, 
  Search,
  LogOut,
  ChevronDown,
  User
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DashboardLayoutProps = {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [unreadNotifications] = useState(3)

  // Track scroll position to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // If no user is logged in, redirect to login page
  useEffect(() => {
    if (!user && typeof window !== 'undefined') {
      router.push('/auth/login')
    }
  }, [user, router])

  // Navigation links
  const navItems = [
    { 
      title: "Overview", 
      href: "/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      title: "Document Checker", 
      href: "/dashboard/documents", 
      icon: <FileSearch className="h-5 w-5" /> 
    },
    { 
      title: "Financial Simulations", 
      href: "/dashboard/finance", 
      icon: <Calculator className="h-5 w-5" /> 
    },
    { 
      title: "Settings", 
      href: "/dashboard/settings", 
      icon: <Settings className="h-5 w-5" /> 
    },
  ]

  // Handle logout
  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  // If no user yet, show loading
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center mb-4">
            <span className="text-xl font-bold text-primary-foreground">Z</span>
          </div>
          <p className="text-lg font-medium">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-card border-r">
        <div className="flex items-center h-16 px-6 border-b">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">Z</span>
            </div>
            <span className="text-xl font-bold">Zaemon</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted"
                )}
              >
                {item.icon}
                {item.title}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.role}</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Header */}
        <header 
          className={cn(
            "sticky top-0 z-30 flex items-center h-16 px-4 md:px-6 bg-background/80 backdrop-blur-md transition-shadow",
            isScrolled ? "shadow-md" : ""
          )}
        >
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Sidebar */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex items-center h-16 px-6 border-b">
                  <Link 
                    href="/dashboard" 
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">Z</span>
                    </div>
                    <span className="text-xl font-bold">Zaemon</span>
                  </Link>
                </div>
                
                <nav className="flex-1 py-6 px-4 space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          isActive 
                            ? "bg-primary/10 text-primary" 
                            : "hover:bg-muted"
                        )}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    )
                  })}
                </nav>
                
                <div className="p-4 border-t">
                  <div className="flex items-center gap-3 px-3 py-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.role}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">Z</span>
              </div>
              <span className="font-bold">Zaemon</span>
            </Link>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 px-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-full pl-8 bg-background border-muted"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Mobile search trigger */}
            <Button variant="ghost" size="sm" className="md:hidden h-9 w-9 p-0">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            {/* Notification bell */}
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
              <span className="sr-only">Notifications</span>
            </Button>
            
            {/* User menu - desktop only */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden md:flex">
                <Button variant="ghost" size="sm" className="h-9 px-2 gap-1">
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-medium text-sm ml-1">{user.name.split(' ')[0]}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 cursor-pointer">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 cursor-pointer">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}