"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="bg-card border rounded-2xl p-8 md:p-12">
            <div className="absolute -inset-px rounded-2xl opacity-50 blur-xl bg-gradient-to-r from-primary/20 via-indigo-500/20 to-purple-500/20 animate-gradient" style={{ backgroundSize: "400% 400%" }}></div>
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight mb-4 text-center"
              >
                Ready to transform your workflow?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground text-center mb-8"
              >
                Start your 14-day free trial today. No credit card required.
              </motion.p>
              
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow" 
                />
                <Button type="submit" className="whitespace-nowrap group">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Support", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Zaemon</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Streamline your workflow with our AI-powered automation platform. 
              Built for modern teams to work smarter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((category, i) => (
            <div key={i} className="col-span-1">
              <h4 className="font-medium text-sm mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Zaemon, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}