"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  ArrowUpRight, 
  FileSearch, 
  Calculator, 
  Calendar,
  Clock, 
  BarChart2, 
  AlertTriangle,
  CheckCircle2,
  Users
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    return () => clearInterval(timer)
  }, [])

  // Format greeting based on time of day
  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  // Sample data
  const stats = [
    { 
      title: "Documents Processed", 
      value: "267", 
      change: "+12%", 
      trend: "up",
      icon: <FileSearch className="h-5 w-5" />
    },
    { 
      title: "Financial Simulations", 
      value: "42", 
      change: "+5%", 
      trend: "up",
      icon: <Calculator className="h-5 w-5" />
    },
    { 
      title: "Conflicts Detected", 
      value: "18", 
      change: "-7%", 
      trend: "down",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    { 
      title: "Compliance Score", 
      value: "94%", 
      change: "+2%", 
      trend: "up",
      icon: <CheckCircle2 className="h-5 w-5" />
    },
  ]

  const recentDocuments = [
    { id: "DOC-1432", name: "Q3 Financial Report.pdf", status: "Conflict Detected", date: "Today, 10:25 AM" },
    { id: "DOC-1431", name: "HR Policy Update.docx", status: "Compliant", date: "Yesterday" },
    { id: "DOC-1430", name: "Vendor Contract - Acme Inc.pdf", status: "Compliant", date: "Yesterday" },
    { id: "DOC-1429", name: "Employee Handbook 2025.pdf", status: "Conflict Detected", date: "Sep 19, 2025" },
    { id: "DOC-1428", name: "Budget Forecast - Q4.xlsx", status: "Compliant", date: "Sep 18, 2025" }
  ]
  
  const upcomingSimulations = [
    { id: "SIM-421", name: "Q4 Hiring Plan", date: "Tomorrow, 2:00 PM", owner: "Maria R." },
    { id: "SIM-420", name: "Office Expansion Budget", date: "Sep 22, 2025", owner: "John D." },
    { id: "SIM-419", name: "Marketing Budget Review", date: "Sep 24, 2025", owner: "Alex M." }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{getGreeting()}, Maria</h1>
          <p className="text-muted-foreground">
            {currentTime.toLocaleDateString(undefined, { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button className="gap-1">
            <FileSearch className="h-4 w-4" />
            <span>New Document</span>
          </Button>
          <Button variant="outline" className="gap-1">
            <Calculator className="h-4 w-4" />
            <span>New Simulation</span>
          </Button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <div className={`flex items-center mt-1 text-xs font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                    <span className="ml-0.5">this week</span>
                  </div>
                </div>
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {stat.icon}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent documents */}
        <Card className="col-span-1 lg:col-span-2 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Recent Documents</h3>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <a href="/dashboard/documents">
                  View All
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b">
                    <th className="pb-2 font-medium">Document</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentDocuments.map((doc) => (
                    <tr key={doc.id} className="hover:bg-muted/50">
                      <td className="py-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded bg-primary/5 text-primary">
                            <FileSearch className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">{doc.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          doc.status === 'Compliant' 
                            ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{doc.date}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* Side panel with upcoming simulations */}
        <div className="space-y-6">
          {/* Activity chart */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Activity</h3>
              <Button variant="ghost" size="sm" asChild>
                <a href="/dashboard/analytics">
                  <BarChart2 className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="h-48 flex items-center justify-center bg-muted/40 rounded-md">
              <p className="text-sm text-muted-foreground">Activity chart placeholder</p>
            </div>
          </Card>

          {/* Upcoming simulations */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Scheduled Simulations</h3>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <a href="/dashboard/finance">
                  <Calendar className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingSimulations.map((sim) => (
                <div key={sim.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="p-2 rounded bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-500">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{sim.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{sim.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{sim.owner}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-2">
                Schedule New Simulation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}