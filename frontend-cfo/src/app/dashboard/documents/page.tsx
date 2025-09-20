"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  FileSearch, 
  Upload, 
  Filter,
  MoreHorizontal, 
  Search,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronDown,
  CalendarDays,
  ListFilter
} from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [dateFilter, setDateFilter] = useState("All time")

  // Sample data for documents
  const documents = [
    { 
      id: "DOC-1432", 
      name: "Q3 Financial Report.pdf", 
      status: "Conflict Detected", 
      conflicts: 3,
      date: "2025-09-20T10:25:00", 
      size: "2.4 MB",
      type: "Financial Report",
      uploadedBy: "Maria Rodriguez"
    },
    { 
      id: "DOC-1431", 
      name: "HR Policy Update.docx", 
      status: "Compliant", 
      conflicts: 0,
      date: "2025-09-19T16:45:00", 
      size: "1.2 MB",
      type: "Policy",
      uploadedBy: "John Davis"
    },
    { 
      id: "DOC-1430", 
      name: "Vendor Contract - Acme Inc.pdf", 
      status: "Compliant", 
      conflicts: 0,
      date: "2025-09-19T14:30:00", 
      size: "3.7 MB",
      type: "Contract",
      uploadedBy: "Maria Rodriguez"
    },
    { 
      id: "DOC-1429", 
      name: "Employee Handbook 2025.pdf", 
      status: "Conflict Detected", 
      conflicts: 2,
      date: "2025-09-19T09:15:00", 
      size: "5.1 MB",
      type: "Policy",
      uploadedBy: "Sarah Johnson"
    },
    { 
      id: "DOC-1428", 
      name: "Budget Forecast - Q4.xlsx", 
      status: "Compliant", 
      conflicts: 0,
      date: "2025-09-18T11:20:00", 
      size: "1.8 MB",
      type: "Financial Report",
      uploadedBy: "Alex Morgan"
    },
    { 
      id: "DOC-1427", 
      name: "Customer Agreement - XYZ Corp.pdf", 
      status: "Processing", 
      conflicts: null,
      date: "2025-09-18T09:05:00", 
      size: "2.2 MB",
      type: "Contract",
      uploadedBy: "John Davis"
    },
    { 
      id: "DOC-1426", 
      name: "Marketing Campaign Brief.pptx", 
      status: "Conflict Detected", 
      conflicts: 1,
      date: "2025-09-17T14:45:00", 
      size: "4.3 MB",
      type: "Presentation",
      uploadedBy: "Sarah Johnson"
    },
  ]

  // Filter documents based on search query and filters
  const filteredDocuments = documents.filter(doc => {
    // Search filter
    if (searchQuery && !doc.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !doc.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    // Status filter
    if (statusFilter !== "All" && doc.status !== statusFilter) {
      return false
    }
    
    // Date filter - This is simplified, in a real app you'd implement proper date filtering
    if (dateFilter !== "All time") {
      const docDate = new Date(doc.date)
      const today = new Date()
      
      if (dateFilter === "Today" && 
          !(docDate.getDate() === today.getDate() && 
            docDate.getMonth() === today.getMonth() && 
            docDate.getFullYear() === today.getFullYear())) {
        return false
      }
      
      if (dateFilter === "This week") {
        // Simple check for this week (last 7 days)
        const weekAgo = new Date()
        weekAgo.setDate(today.getDate() - 7)
        if (docDate < weekAgo) {
          return false
        }
      }
    }
    
    return true
  })

  const statusOptions = ["All", "Compliant", "Conflict Detected", "Processing"]
  const dateOptions = ["All time", "Today", "This week", "This month"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Document Checker</h1>
          <p className="text-muted-foreground">
            Upload and analyze documents for potential conflicts
          </p>
        </div>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </Button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <ListFilter className="h-4 w-4" />
                <span>Status: {statusFilter}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {statusOptions.map((status) => (
                <DropdownMenuItem 
                  key={status}
                  className="cursor-pointer"
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>Date: {dateFilter}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>Filter by date</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dateOptions.map((option) => (
                <DropdownMenuItem 
                  key={option}
                  className="cursor-pointer"
                  onClick={() => setDateFilter(option)}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Documents list */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Size</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc, index) => (
                  <motion.tr 
                    key={doc.id} 
                    className="hover:bg-muted/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <td className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded bg-primary/5 text-primary">
                          <FileSearch className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium hover:underline cursor-pointer">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'Compliant' 
                          ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : doc.status === 'Processing'
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {doc.status === 'Compliant' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {doc.status === 'Conflict Detected' && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {doc.status === 'Processing' && <Clock className="h-3 w-3 mr-1" />}
                        {doc.status}
                        {doc.status === 'Conflict Detected' && doc.conflicts && (
                          <span className="ml-1">({doc.conflicts})</span>
                        )}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm">
                        <CalendarDays className="h-3 w-3 text-muted-foreground" />
                        <span>{format(new Date(doc.date), "MMM d, yyyy")}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {format(new Date(doc.date), "h:mm a")}
                      </div>
                    </td>
                    <td className="p-4 text-sm">
                      {doc.type}
                    </td>
                    <td className="p-4 text-sm">
                      {doc.size}
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
                          <DropdownMenuItem className="cursor-pointer">Download</DropdownMenuItem>
                          {doc.status === 'Conflict Detected' && (
                            <DropdownMenuItem className="cursor-pointer">View conflicts</DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="cursor-pointer text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">
                    No documents found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}