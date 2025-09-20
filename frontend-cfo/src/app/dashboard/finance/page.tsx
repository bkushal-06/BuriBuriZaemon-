"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Calculator, 
  BarChart,
  PieChart,
  LineChart, 
  Plus, 
  ChevronDown,
  MoreHorizontal,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  TrendingUp
} from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TracingBeam } from "@/components/ui/aceternity"

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("simulations")
  
  // Sample data for simulations
  const simulations = [
    {
      id: "SIM-421",
      name: "Q4 Hiring Plan",
      description: "Budget impact analysis for new hires in Q4",
      date: "2025-09-21T14:00:00",
      status: "Scheduled",
      scenarios: 3,
      owner: "Maria Rodriguez",
      collaborators: ["John D.", "Sarah J."],
      tags: ["hiring", "budget", "q4"]
    },
    {
      id: "SIM-420",
      name: "Office Expansion Budget",
      description: "Financial projections for new office space",
      date: "2025-09-22T10:00:00",
      status: "Draft",
      scenarios: 2,
      owner: "John Davis",
      collaborators: ["Maria R."],
      tags: ["expansion", "facilities", "capex"]
    },
    {
      id: "SIM-419",
      name: "Marketing Budget Review",
      description: "Reallocation of marketing spend for Q4",
      date: "2025-09-24T15:30:00",
      status: "Scheduled",
      scenarios: 4,
      owner: "Alex Morgan",
      collaborators: ["Sarah J.", "Michael T."],
      tags: ["marketing", "budget", "q4"]
    },
    {
      id: "SIM-418",
      name: "Sales Team Compensation",
      description: "Analysis of commission structure changes",
      date: "2025-09-16T11:00:00",
      status: "Completed",
      scenarios: 5,
      owner: "Sarah Johnson",
      collaborators: ["John D.", "Maria R."],
      tags: ["sales", "compensation", "hr"]
    },
    {
      id: "SIM-417",
      name: "Software Vendor Comparison",
      description: "Cost-benefit analysis of CRM vendors",
      date: "2025-09-15T09:15:00",
      status: "Completed",
      scenarios: 3,
      owner: "Michael Thompson",
      collaborators: ["Alex M."],
      tags: ["vendors", "software", "it"]
    }
  ]
  
  // Templates for creating new simulations
  const templates = [
    {
      id: "TEMP-1",
      name: "Hiring Impact",
      description: "Analyze the budget impact of new hires",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: "TEMP-2",
      name: "Budget Adjustment",
      description: "Evaluate changes to departmental budgets",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      id: "TEMP-3",
      name: "Revenue Forecast",
      description: "Project revenue based on different scenarios",
      icon: <LineChart className="h-5 w-5" />
    },
    {
      id: "TEMP-4",
      name: "Expense Allocation",
      description: "Optimize allocation of expenses across departments",
      icon: <PieChart className="h-5 w-5" />
    }
  ]

  // Financial metrics for the dashboard
  const metrics = [
    { name: "Revenue Forecast", value: "$4.2M", trend: "+8%", status: "above-target" },
    { name: "Expenses", value: "$2.7M", trend: "+3%", status: "on-target" },
    { name: "Profit Margin", value: "35.7%", trend: "+2.1%", status: "above-target" },
    { name: "Cash Flow", value: "$850K", trend: "-5%", status: "below-target" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Simulations</h1>
          <p className="text-muted-foreground">
            Create and analyze financial scenarios with our AI-powered tools
          </p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                <span>New Simulation</span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Create from template</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {templates.map((template) => (
                <DropdownMenuItem key={template.id} className="flex gap-2 cursor-pointer">
                  <div className="bg-primary/10 text-primary p-1 rounded">
                    {template.icon}
                  </div>
                  <div>
                    <div className="font-medium">{template.name}</div>
                    <div className="text-xs text-muted-foreground">{template.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 text-primary p-1 rounded">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <span>Blank simulation</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-muted-foreground">{metric.name}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className={`ml-2 flex items-center text-sm font-medium ${
                  metric.status === 'above-target' ? 'text-green-500' :
                  metric.status === 'below-target' ? 'text-red-500' : 'text-amber-500'
                }`}>
                  {metric.trend}
                </p>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    metric.status === 'above-target' ? 'bg-green-500' :
                    metric.status === 'below-target' ? 'bg-red-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="simulations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Simulations
          </TabsTrigger>
          <TabsTrigger value="results" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Recent Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulations">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b">
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Scenarios</th>
                    <th className="p-4 font-medium">Owner</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {simulations.map((sim, index) => (
                    <motion.tr 
                      key={sim.id} 
                      className="hover:bg-muted/50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <td className="p-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-500">
                              <Calculator className="h-4 w-4" />
                            </div>
                            <span className="font-medium hover:underline cursor-pointer">
                              {sim.name}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground pl-10">{sim.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          sim.status === 'Completed' 
                            ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : sim.status === 'Draft'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {sim.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{format(new Date(sim.date), "MMM d, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{format(new Date(sim.date), "h:mm a")}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center bg-primary/10 text-primary h-6 w-6 rounded-full text-xs font-medium">
                          {sim.scenarios}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">
                            {sim.owner.charAt(0)}
                          </div>
                          <span className="text-sm">{sim.owner}</span>
                        </div>
                        {sim.collaborators.length > 0 && (
                          <div className="text-xs text-muted-foreground mt-1">
                            +{sim.collaborators.length} collaborator{sim.collaborators.length > 1 ? 's' : ''}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">View details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit simulation</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="results">
          <TracingBeam className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Q3 Sales Forecast Comparison</h3>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Sales forecast chart placeholder</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted-foreground">Generated from</div>
                    <div className="font-medium">Revenue Forecast Simulation</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Marketing Budget Allocation</h3>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Budget allocation chart placeholder</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted-foreground">Generated from</div>
                    <div className="font-medium">Marketing Budget Review</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Hiring Cost Projections</h3>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Hiring cost chart placeholder</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted-foreground">Generated from</div>
                    <div className="font-medium">Q4 Hiring Plan</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Commission Structure Impact</h3>
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Commission impact chart placeholder</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted-foreground">Generated from</div>
                    <div className="font-medium">Sales Team Compensation</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Details
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </div>
          </TracingBeam>
        </TabsContent>
      </Tabs>
    </div>
  )
}