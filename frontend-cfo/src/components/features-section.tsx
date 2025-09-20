"use client"

import { motion } from "framer-motion"
import { TracingBeam, SpotlightCard } from "@/components/ui/aceternity"
import { CircleCheck, FileSearch, Calculator, Shield, Users, BarChart3 } from "lucide-react"
import FeaturesSectionModern from "./ui/features-section-modern"

export function FeaturesSection() {
  const modules = [
    {
      id: "doc-checker",
      title: "Smart Doc Checker",
      icon: <FileSearch className="h-10 w-10 text-blue-500" />,
      description: "AI-powered document conflict detection that keeps your organization compliant",
      features: [
        "Upload multiple document formats",
        "Real-time conflict detection",
        "Policy compliance verification", 
        "Automated flagging system",
        "Export detailed reports"
      ],
      color: "blue"
    },
    {
      id: "cfo-helper", 
      title: "CFO Helper",
      icon: <Calculator className="h-10 w-10 text-green-500" />,
      description: "Advanced financial scenario simulation for strategic decision making",
      features: [
        "Multi-scenario budget modeling",
        "Real-time financial analytics",
        "Risk assessment tools",
        "Cash flow projections",
        "ROI calculation engine"
      ],
      color: "green"
    }
  ]

  const roles = [
    {
      title: "Employees",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      description: "For team members who need document analysis",
      access: ["Document upload", "Conflict detection", "Basic reporting"]
    },
    {
      title: "CFO Users", 
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      description: "Advanced financial toolset for decision makers",
      access: ["Financial scenario modeling", "Executive dashboards", "Advanced analytics", "All employee features"]
    },
    {
      title: "System Creator",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      description: "Built and managed by your development team", 
      access: ["Complete platform control", "Custom integrations", "Security management", "White-labeled solutions"]
    }
  ]

  const benefits = [
    "Prevent costly compliance violations",
    "Make data-driven financial decisions", 
    "Reduce document review time by 85%",
    "Simulate multiple budget scenarios instantly",
    "Multi-tier access control for security",
    "Usage-based billing with full transparency"
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Powerful Features for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Zaemon delivers intelligent document analysis and advanced financial modeling
            in one seamlessly integrated platform.
          </motion.p>
        </div>

        {/* Modern Features Grid */}
        <FeaturesSectionModern />

        {/* Main Modules */}
        <div className="mt-32 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Two Powerful AI Modules
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Our dual-module approach gives you everything you need
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SpotlightCard className="h-full overflow-hidden rounded-xl">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className={`p-4 rounded-2xl bg-${module.color}-500/10 w-fit`}>
                        {module.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                        <p className="text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CircleCheck className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Role-based Access */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Role-Based Access
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Different access levels for different user needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-xl border p-8 hover:shadow-lg transition-all duration-300 ${
                  role.title === "System Creator" ? "border-blue-500/50 bg-blue-500/5" : ""
                }`}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full p-3 ${
                      role.title === "Employees" ? "bg-purple-500/10" : 
                      role.title === "CFO Users" ? "bg-orange-500/10" : 
                      "bg-blue-600/10"
                    }`}>
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{role.title}</h4>
                      <p className="text-muted-foreground text-sm">{role.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {role.access.map((access, accessIndex) => (
                      <div key={accessIndex} className="flex items-center gap-3">
                        <CircleCheck className={`h-5 w-5 ${
                          role.title === "Employees" ? "text-purple-500" : 
                          role.title === "CFO Users" ? "text-orange-500" : 
                          "text-blue-600"
                        } shrink-0`} />
                        <span>{access}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <TracingBeam className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Why Organizations Choose Zaemon</h3>
              <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CircleCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}