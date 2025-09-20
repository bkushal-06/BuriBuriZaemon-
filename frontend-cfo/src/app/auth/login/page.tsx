"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AuthForm } from "@/components/auth/auth-form"
import { BackgroundBeams } from "@/components/ui/aceternity"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (values: Record<string, string>) => {
    setIsLoading(true)
    
    try {
      // Use the auth context login function
      await login(values.email, values.password)
      
      // Redirect to dashboard after successful login
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background effects */}
      <BackgroundBeams className="opacity-20" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <AuthForm 
              type="login" 
              onSubmit={handleLogin}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}