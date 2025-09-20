"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FloatingCards } from "@/components/ui/aceternity"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import PricingSectionModern from "./ui/pricing-section-modern"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Zaemon caught document conflicts that could have cost us millions in compliance issues. The AI Doc Checker is incredibly thorough and saves our legal team hours of work.",
      author: "Sarah Johnson",
      role: "Chief Compliance Officer at TechCorp",
      avatar: "/avatar-1.png"
    },
    {
      quote: "The CFO Helper's scenario modeling helped us make critical budget decisions during our expansion. It's like having a senior financial analyst available 24/7.",
      author: "Michael Chen",
      role: "CEO at GrowthPilot",
      avatar: "/avatar-2.png"
    },
    {
      quote: "Our finance team uses Zaemon to run multiple budget scenarios before board meetings. What used to take days of manual work now happens in minutes with better accuracy.",
      author: "Priya Patel",
      role: "CFO at DevStream",
      avatar: "/avatar-3.png"
    }
  ]

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Trusted by innovative teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            See how organizations of all sizes are achieving remarkable results with Zaemon.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FloatingCards>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-md mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCards>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  // Legacy pricing data - now using the modern component
  // Removed to fix lint errors

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Pay only for what you use. Choose the right access level and purchase credits as needed.
          </motion.p>
        </div>

        {/* Modern Pricing Grid */}
        <PricingSectionModern />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Need something custom?</h3>
            <p className="text-muted-foreground mt-2 mb-6">Contact our sales team for enterprise pricing or custom solutions</p>
            <Button size="lg" className="px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-8 border-t pt-8">
            <p className="text-sm text-muted-foreground">
              Credits never expire • Full usage transparency • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}