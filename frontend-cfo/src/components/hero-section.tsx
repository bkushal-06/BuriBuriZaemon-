"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { BgPattern } from "@/components/bgPattern"

export function HeroSection() {
  return (
    <BgPattern className="dark:bg-gray-950">
      <div className="relative overflow-hidden">
        {/* Decorative beams in background */}
        <BackgroundBeams className="opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-1" />
                <span>Introducing Zaemon AI Platform</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Smart Doc Checker &{" "}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 animate-gradient" style={{ backgroundSize: "400% 400%", animation: "gradientAnimation 10s ease infinite" }}>
                CFO Helper
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl"
            >
              Your AI-powered platform for clearing policy conflicts and simulating finance scenarios—trusted by organizations of all sizes. Automate document conflict checks, run financial scenario simulations, and keep your organization compliant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Button size="lg" className="rounded-full group">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 text-sm text-muted-foreground flex items-center gap-2 justify-center"
            >
              <span>No credit card required</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>SOC 2 Compliant</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>Trusted by 500+ organizations</span>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              {/* Glow effect behind the dashboard */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 to-indigo-500/50 opacity-30 blur-xl" />
              
              <div className="relative rounded-2xl border bg-background shadow-xl overflow-hidden">
                <div className="h-14 border-b flex items-center px-4 bg-muted/50">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="aspect-[16/9] bg-muted/20 flex items-center justify-center">
                  <div className="text-muted-foreground">
                    [Dashboard Preview]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </BgPattern>
  )
}