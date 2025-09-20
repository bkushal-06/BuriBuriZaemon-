"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AuthForm } from "@/components/auth/auth-form"
import { BackgroundBeams } from "@/components/ui/aceternity"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const router = useRouter()
  const { signup } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async (values: Record<string, string>) => {
    setIsLoading(true)
    
    try {
      // Use the auth context signup function
      await signup(values.name, values.email, values.password)
      
      // Redirect to dashboard after successful signup
      router.push('/dashboard')
    } catch (error) {
      console.error('Signup error:', error)
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
              type="signup" 
              onSubmit={handleSignup}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}