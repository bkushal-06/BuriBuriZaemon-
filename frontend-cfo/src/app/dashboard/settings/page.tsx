"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Settings,
  User,
  Bell,
  Shield,
  KeyRound,
  CreditCard,
  HelpCircle,
  AlertTriangle,
  Save
} from "lucide-react"
import FileSearch from "@/components/icons/file-search"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    weekly: false,
    promotional: false
  })

  const [userProfile, setUserProfile] = useState({
    name: "Maria Rodriguez",
    email: "maria@company.com",
    role: "CFO User",
    phone: "+1 (555) 123-4567",
    timezone: "America/New_York"
  })

  const handleProfileUpdate = (field: string, value: string) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-1 md:grid-cols-5 gap-2 h-auto">
          <TabsTrigger value="profile" className="flex items-center justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <CreditCard className="h-4 w-4" />
            <span>Billing</span>
          </TabsTrigger>
          <TabsTrigger value="help" className="flex items-center justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <HelpCircle className="h-4 w-4" />
            <span>Help</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          {/* Profile Settings */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your personal details and preferences
                  </p>
                  
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input 
                          id="name"
                          value={userProfile.name}
                          onChange={(e) => handleProfileUpdate('name', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={userProfile.email}
                          onChange={(e) => handleProfileUpdate('email', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input 
                          id="role"
                          value={userProfile.role}
                          disabled
                        />
                        <p className="text-xs text-muted-foreground">
                          Contact your administrator to change roles
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input 
                          id="phone"
                          value={userProfile.phone}
                          onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <select 
                          id="timezone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={userProfile.timezone}
                          onChange={(e) => handleProfileUpdate('timezone', e.target.value)}
                        >
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                        </select>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Profile picture</h4>
                      <div className="flex items-center gap-6">
                        <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-2xl font-medium">
                          {userProfile.name.charAt(0)}
                        </div>
                        <Button variant="outline">Change avatar</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-end">
                      <Button className="gap-2">
                        <Save className="h-4 w-4" />
                        <span>Save changes</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Notification Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose when and how you want to be notified
                  </p>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-4">Document alerts</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Email notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about document conflicts
                            </p>
                          </div>
                          <Switch 
                            checked={notifications.email}
                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, email: checked}))}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Browser notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Get browser alerts for important changes
                            </p>
                          </div>
                          <Switch 
                            checked={notifications.browser}
                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, browser: checked}))}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Summary reports</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Weekly summary</Label>
                            <p className="text-sm text-muted-foreground">
                              Weekly digest of activities and conflicts
                            </p>
                          </div>
                          <Switch 
                            checked={notifications.weekly}
                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, weekly: checked}))}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Product updates</Label>
                            <p className="text-sm text-muted-foreground">
                              News about product updates and features
                            </p>
                          </div>
                          <Switch 
                            checked={notifications.promotional}
                            onCheckedChange={(checked) => setNotifications(prev => ({...prev, promotional: checked}))}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-end">
                      <Button className="gap-2">
                        <Save className="h-4 w-4" />
                        <span>Save preferences</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Security Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your password and security preferences
                  </p>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-4">Change password</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm new password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        
                        <Button>Update password</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Two-factor authentication</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Enable 2FA</Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 p-3 rounded-md flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                          <p className="text-sm">
                            Two-factor authentication is strongly recommended for all accounts with access to sensitive documents or financial data.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Active sessions</h4>
                      <div className="space-y-4">
                        <div className="bg-card border rounded-md p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Current session</p>
                              <p className="text-sm text-muted-foreground">Windows 11 · Chrome · New York, USA</p>
                              <p className="text-xs text-muted-foreground mt-1">Started 2 hours ago</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="text-destructive">Sign out of all sessions</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
          
          {/* Billing Settings */}
          <TabsContent value="billing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Billing and Credits</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your subscription and credits
                  </p>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-4">Current plan</h4>
                      <div className="bg-card border rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">CFO Plan</p>
                            <p className="text-sm text-muted-foreground">15 credits per scenario simulation</p>
                          </div>
                          <Button variant="outline">Change plan</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Credits balance</h4>
                      <div className="flex items-center justify-between p-4 bg-primary/5 rounded-md">
                        <div>
                          <p className="text-3xl font-bold">325</p>
                          <p className="text-sm text-muted-foreground">Available credits</p>
                        </div>
                        <Button>Purchase credits</Button>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">
                          Usage this month: 175 credits (125 documents, 3 simulations)
                        </p>
                        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: '35%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Payment method</h4>
                      <div className="bg-card border rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-muted">
                              <CreditCard className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                            </div>
                          </div>
                          <Button variant="outline">Update</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Billing history</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="text-left text-xs text-muted-foreground border-b">
                              <th className="pb-2 font-medium">Date</th>
                              <th className="pb-2 font-medium">Description</th>
                              <th className="pb-2 font-medium">Amount</th>
                              <th className="pb-2 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            <tr className="hover:bg-muted/50">
                              <td className="py-3">Sep 15, 2025</td>
                              <td className="py-3">500 Credits</td>
                              <td className="py-3">$199.00</td>
                              <td className="py-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-muted/50">
                              <td className="py-3">Aug 12, 2025</td>
                              <td className="py-3">100 Credits</td>
                              <td className="py-3">$49.00</td>
                              <td className="py-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Paid
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
          
          {/* Help and Support */}
          <TabsContent value="help">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Help and Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get help with using Zaemon
                  </p>
                  
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <FileSearch className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Documentation</h4>
                            <p className="text-sm text-muted-foreground">
                              Browse our detailed documentation and guides
                            </p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <HelpCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Frequently Asked Questions</h4>
                            <p className="text-sm text-muted-foreground">
                              Find answers to common questions
                            </p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <Settings className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Setup Guide</h4>
                            <p className="text-sm text-muted-foreground">
                              Step-by-step guides to set up your account
                            </p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-md bg-primary/10 text-primary">
                            <KeyRound className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">API Documentation</h4>
                            <p className="text-sm text-muted-foreground">
                              Learn how to integrate with our API
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium mb-4">Contact support</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="Brief description of your issue" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <textarea 
                            id="message" 
                            rows={4}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Please describe your issue in detail"
                          ></textarea>
                        </div>
                        
                        <Button>Submit support request</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}