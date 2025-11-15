"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Bell,
  Calendar,
  CreditCard,
  Download,
  HelpCircle,
  Home,
  Lock,
  LogOut,
  Mail,
  MessageSquare,
  Mic,
  Play,
  Plus,
  Shield,
  Trash2,
  Users,
  AlertTriangle,
  Search,
  Sparkles,
  Brain,
  LinkIcon,
  Workflow,
  Volume2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { CustomTimePicker } from "./custom-time-picker"

const menuItems = [
  { title: "Dashboard", icon: <Home className="h-4 w-4" />, value: "dashboard" },
  { title: "Connections", icon: <LinkIcon className="h-4 w-4" />, value: "connections" },
  { title: "Automations", icon: <Workflow className="h-4 w-4" />, value: "automations" },
  { title: "Memories", icon: <Brain className="h-4 w-4" />, value: "memories" },
  { title: "Voice & Style", icon: <Volume2 className="h-4 w-4" />, value: "voice" },
  { title: "Notifications", icon: <Bell className="h-4 w-4" />, value: "notifications" },
  { title: "Privacy & Safety", icon: <Shield className="h-4 w-4" />, value: "privacy" },
  { title: "Account & Access", icon: <Users className="h-4 w-4" />, value: "account" },
  { title: "Billing", icon: <CreditCard className="h-4 w-4" />, value: "billing" },
  { title: "Support", icon: <HelpCircle className="h-4 w-4" />, value: "support" },
]

export function EvaoAdmin() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [privacyMode, setPrivacyMode] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.3) 0%, rgba(53, 71, 125, 0.3) 50%, rgba(255, 255, 255, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(0, 194, 199, 0.3) 0%, rgba(81, 45, 168, 0.3) 50%, rgba(255, 255, 255, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.3) 0%, rgba(32, 119, 188, 0.3) 50%, rgba(255, 255, 255, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.3) 0%, rgba(53, 71, 125, 0.3) 50%, rgba(255, 255, 255, 0) 100%)",
          ],
        }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="flex py-3 items-center gap-4 px-4 md:px-6">
            {/* Logo and brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex aspect-square size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Sparkles className="size-4" />
              </div>
              <div className="hidden md:block">
                <h2 className="text-sm font-semibold text-gray-900">Noble Forge</h2>
                <p className="text-[10px] text-gray-600">Control Panel</p>
              </div>
            </Link>

            {/* Navigation menu */}
            <ScrollArea className="flex-1 ml-20">
              <nav className="flex items-center justify-center gap-1 px-2">
                {menuItems.map((item) => (
                  <TooltipProvider key={item.value}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            "flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                            activeTab === item.value
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-gray-100 text-gray-600 hover:text-gray-900",
                          )}
                          onClick={() => setActiveTab(item.value)}
                        >
                          <span>{item.icon}</span>
                          <span className="hidden lg:inline">{item.title}</span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="lg:hidden bg-gray-900 text-white border-gray-700">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </nav>
            </ScrollArea>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl h-8 w-8 hover:bg-gray-100"
                      onClick={() => setActiveTab('messages')}
                    >
                      <MessageSquare className="h-4 w-4 text-gray-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-700">Messages</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl h-8 w-8 relative hover:bg-gray-100"
                    onClick={() => setActiveTab('notifications')}
                    >
                      <Bell className="h-4 w-4 text-gray-600" />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        3
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-700">Notifications</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl h-8 w-8 hover:bg-gray-100" asChild>
                      <Link href="/">
                        <Home className="h-4 w-4 text-gray-600" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-700">Go Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl h-8 w-8 hover:bg-gray-100" asChild>
                      <Link href="/login">
                        <LogOut className="h-4 w-4 text-gray-600" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 text-white border-gray-700">Logout</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex items-center gap-2 rounded-2xl border border-gray-200 px-2 py-1 bg-white">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-gray-100 text-gray-900">AJ</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
                  <Badge variant="outline" className="rounded-lg text-xs h-3.5 px-1 border-gray-300 text-gray-700">
                    Family
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Dashboard */}
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  {/* Privacy Banner */}
                  {privacyMode && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-3xl bg-amber-50 border border-amber-200 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-amber-600" />
                        <p className="text-sm font-medium text-gray-900">
                          <strong>Privacy Mode is ON.</strong> Voice/listening paused and logging suspended.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Interact with Jarvis */}
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Interact with Noble Forge Assistant
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Talk, type, or dictate. Your assistant answers and acts for you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        <Button className="rounded-2xl">
                          <Mic className="mr-2 h-4 w-4" />
                          Hold to talk
                        </Button>
                        <Input
                          placeholder="Type to Jarvis…"
                          className="flex-1 rounded-2xl border-gray-300 bg-white text-gray-900"
                        />
                        <Button variant="secondary" className="rounded-2xl bg-gray-100 text-gray-900 hover:bg-gray-200">
                          Dictate
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-700"
                        >
                          Plan my day
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-700"
                        >
                          Create task
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-700"
                        >
                          Summarize emails
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-gray-100 border-gray-300 text-gray-700"
                        >
                          Open workspace
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Proactivity Feed */}
                    <Card className="rounded-3xl border-gray-200 bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-gray-900">Proactivity Feed</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                              Today
                            </Badge>
                            <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                              This week
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-gray-600">08:10</span>
                                  <Badge className="rounded-xl bg-green-500 text-white">Resolved</Badge>
                                </div>
                                <p className="text-sm text-gray-900">"Calendar conflict at 9:00. Move 1:1?"</p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Why?
                              </Button>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-gray-600">07:30</span>
                                  <Badge className="rounded-xl bg-amber-500 text-white">Pending</Badge>
                                </div>
                                <p className="text-sm text-gray-900">"You're near Spinneys. Need milk?"</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="rounded-xl">
                                  Do
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                  Dismiss
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Daily / Weekly Recap */}
                    <Card className="rounded-3xl border-gray-200 bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-gray-900">Daily / Weekly Recap</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                              Today
                            </Badge>
                            <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                              This week
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-gray-900">
                          <li className="flex items-center justify-between">
                            <span className="text-gray-700">Tasks created:</span>
                            <strong className="text-gray-900">3</strong>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-gray-700">Automations triggered:</span>
                            <strong className="text-gray-900">4</strong>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-gray-700">Conversations of note:</span>
                            <strong className="text-gray-900">2</strong>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-gray-700">Errors flagged:</span>
                            <strong className="text-gray-900">1</strong>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-gray-700">Receipts:</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              View
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="rounded-3xl border-2 border-red-200 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="h-5 w-5" />
                        Critical Alerts
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Important safety notices for families with dependents.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-red-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs text-gray-600">22:11</span>
                                <span className="text-sm font-medium text-gray-900">Sam</span>
                                <Badge className="rounded-xl bg-red-500 text-white">High Risk</Badge>
                              </div>
                              <p className="text-sm text-gray-900">Self-harm query pattern</p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="rounded-xl">
                                Review
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Handled
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-amber-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs text-gray-600">18:40</span>
                                <span className="text-sm font-medium text-gray-900">Sam</span>
                                <Badge className="rounded-xl bg-amber-500 text-white">Mild</Badge>
                              </div>
                              <p className="text-sm text-gray-900">Substance keyword search</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Acknowledge
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Workspaces */}
                    <Card className="rounded-3xl border-gray-200 bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-gray-900">Workspaces</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Plus className="mr-2 h-4 w-4" />
                            Create
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">Dubai Campaign</h4>
                              <p className="text-sm text-gray-600">Chats, 2 automations, 5 notes</p>
                              <p className="text-xs text-gray-500 mt-1">2h ago</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Open
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Memory Intelligence */}
                    <Card className="rounded-3xl border-gray-200 bg-white">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Memory Intelligence</CardTitle>
                        <CardDescription className="text-gray-600">
                          Shows your memory count and how connected they are.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Total memories</p>
                            <p className="text-3xl font-bold text-gray-900">12,340</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Complexity</p>
                            <p className="text-3xl font-bold text-gray-900">38</p>
                            <Badge variant="outline" className="rounded-xl mt-1 border-gray-300 text-gray-700">
                              Savant
                            </Badge>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Pinned</p>
                            <p className="text-3xl font-bold text-gray-900">21</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Connections */}
              {activeTab === "connections" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-gray-900">Connections</CardTitle>
                          <CardDescription className="text-gray-600">
                            Manage your integrations and connected services
                          </CardDescription>
                        </div>
                        <Button className="rounded-2xl">
                          <Plus className="mr-2 h-4 w-4" />
                          Add New
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-3">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            placeholder="Search your connections…"
                            className="rounded-2xl pl-9 border-gray-300 bg-white text-gray-900"
                          />
                        </div>
                        <Select>
                          <SelectTrigger className="rounded-2xl md:w-[200px] border-gray-300 bg-white text-gray-900">
                            <SelectValue placeholder="All" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200">
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="attention">Needs attention</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="rounded-2xl border-gray-200 bg-white">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                                <Calendar className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base text-gray-900">Google Calendar</CardTitle>
                                <CardDescription className="text-xs text-gray-600">
                                  Active • synced 2h ago
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardFooter className="flex gap-2 pt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Details
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Disconnect
                            </Button>
                          </CardFooter>
                        </Card>

                        <Card className="rounded-2xl border-gray-200 bg-white">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                                <Mail className="h-5 w-5 text-red-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base text-gray-900">Gmail</CardTitle>
                                <CardDescription className="text-xs text-gray-600">
                                  Active • synced 4h ago
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardFooter className="flex gap-2 pt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Details
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Disconnect
                            </Button>
                          </CardFooter>
                        </Card>

                        <Card className="rounded-2xl border-gray-200 bg-white">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                                <MessageSquare className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base text-gray-900">Slack/Teams</CardTitle>
                                <CardDescription className="text-xs text-gray-600">
                                  Connected • synced 1h ago
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardFooter className="flex gap-2 pt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Details
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              Disconnect
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Permissions & Scopes</CardTitle>
                      <CardDescription className="text-gray-600">Choose what each connection can do.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-3">Integration</div>
                          <div className="col-span-2">Scope</div>
                          <div className="col-span-5">Description</div>
                          <div className="col-span-2 text-right">Adjust</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-3 font-medium text-gray-900">Gmail</div>
                            <div className="col-span-2">
                              <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                Send
                              </Badge>
                            </div>
                            <div className="col-span-5 text-sm text-gray-600">Send emails when you approve.</div>
                            <div className="col-span-2 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Automations */}
              {activeTab === "automations" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-gray-900">Automations</CardTitle>
                          <CardDescription className="text-gray-600">
                            Create and manage your automated routines
                          </CardDescription>
                        </div>
                        <Button className="rounded-2xl">
                          <Plus className="mr-2 h-4 w-4" />
                          Create Routine
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-3">Name</div>
                          <div className="col-span-2">Trigger</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-2">Source</div>
                          <div className="col-span-3 text-right">Actions</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-3 font-medium text-gray-900">Morning Summary</div>
                            <div className="col-span-2 text-sm text-gray-600">08:00 daily</div>
                            <div className="col-span-2">
                              <Badge className="rounded-xl bg-green-500 text-white">Enabled</Badge>
                            </div>
                            <div className="col-span-2 text-sm text-gray-600">User</div>
                            <div className="col-span-3 flex gap-2 justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Run now
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Conditional Logic</CardTitle>
                      <CardDescription className="text-gray-600">Add IF / THEN steps for more control.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="rounded-2xl border-gray-200 bg-white">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base text-gray-900">IF</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <Select>
                              <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                                <SelectValue placeholder="Time" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-200">
                                <SelectItem value="time">Time</SelectItem>
                                <SelectItem value="location">Location</SelectItem>
                                <SelectItem value="person">Person</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              placeholder="e.g., after 18:00"
                              className="rounded-2xl border-gray-300 bg-white text-gray-900"
                            />
                          </CardContent>
                        </Card>

                        <Card className="rounded-2xl border-gray-200 bg-white">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base text-gray-900">THEN</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <Select>
                              <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                                <SelectValue placeholder="Play playlist" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-gray-200">
                                <SelectItem value="playlist">Play playlist</SelectItem>
                                <SelectItem value="summary">Send summary</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              placeholder="e.g., Relax"
                              className="rounded-2xl border-gray-300 bg-white text-gray-900"
                            />
                          </CardContent>
                        </Card>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Add Condition
                        </Button>
                        <Button className="rounded-2xl">Test</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Memories */}
              {activeTab === "memories" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-gray-900">Memories</CardTitle>
                          <CardDescription className="text-gray-600">
                            Manage what Jarvis remembers about you
                          </CardDescription>
                        </div>
                        <Button className="rounded-2xl">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Memory
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-3">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            placeholder="Find a memory…"
                            className="rounded-2xl pl-9 border-gray-300 bg-white text-gray-900"
                          />
                        </div>
                        <Select>
                          <SelectTrigger className="rounded-2xl md:w-[200px] border-gray-300 bg-white text-gray-900">
                            <SelectValue placeholder="Newest" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-200">
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-4">Memory</div>
                          <div className="col-span-2">Type</div>
                          <div className="col-span-2">Source</div>
                          <div className="col-span-1">Last seen</div>
                          <div className="col-span-3 text-right">Manage</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-4 text-gray-900">Alex prefers 30-min meetings</div>
                            <div className="col-span-2">
                              <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                Preference
                              </Badge>
                            </div>
                            <div className="col-span-2 text-sm text-gray-600">Manual</div>
                            <div className="col-span-1 text-sm text-gray-600">Aug 10</div>
                            <div className="col-span-3 flex gap-2 justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Why?
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Tagging & Retention</CardTitle>
                      <CardDescription className="text-gray-600">
                        Show inferred items and set how long to keep data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label className="text-gray-900">Show inferred memories</Label>
                          <div className="flex items-center gap-2">
                            <Switch defaultChecked />
                            <span className="text-sm text-gray-600">Enabled</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Retention rule</Label>
                          <Select>
                            <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                              <SelectValue placeholder="Indefinite" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200">
                              <SelectItem value="indefinite">Indefinite</SelectItem>
                              <SelectItem value="1year">1 year</SelectItem>
                              <SelectItem value="90days">90 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Export</Label>
                          <Button
                            variant="outline"
                            className="w-full rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download JSON
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Voice & Style */}
              {activeTab === "voice" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Voice</CardTitle>
                      <CardDescription className="text-gray-600">Choose how Jarvis sounds.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Male
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Female
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Personality & Banter</CardTitle>
                      <CardDescription className="text-gray-600">
                        Pick tone and how chatty the responses are.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="mb-3 block text-gray-900">Personality</Label>
                        <div className="flex flex-wrap gap-3">
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Butler
                          </Badge>
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Neutral
                          </Badge>
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Casual
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <Label className="mb-3 block text-gray-900">Response Length</Label>
                        <div className="flex flex-wrap gap-3">
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Short
                          </Badge>
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Balanced
                          </Badge>
                          <Badge
                            variant="outline"
                            className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                          >
                            Detailed
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch defaultChecked />
                        <Label className="text-gray-900">Light banter</Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Tone Controls</CardTitle>
                      <CardDescription className="text-gray-600">
                        Fine-tune humor, formality, and cadence.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-gray-900">Humor</Label>
                            <span className="text-sm text-gray-600">3/10</span>
                          </div>
                          <Slider defaultValue={[3]} max={10} step={1} className="w-full" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-gray-900">Formality</Label>
                            <span className="text-sm text-gray-600">7/10</span>
                          </div>
                          <Slider defaultValue={[7]} max={10} step={1} className="w-full" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="text-gray-900">Cadence</Label>
                            <span className="text-sm text-gray-600">5/10</span>
                          </div>
                          <Slider defaultValue={[5]} max={10} step={1} className="w-full" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Notifications */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Channels</CardTitle>
                      <CardDescription className="text-gray-600">Choose where Jarvis reaches you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Desktop
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Mobile Push
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Email
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Teams/Slack
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                            Send test
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Urgency</CardTitle>
                      <CardDescription className="text-gray-600">Instant updates or grouped digests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Instant
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Hourly digest
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-xl cursor-pointer hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700"
                        >
                          Daily digest
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Categories</CardTitle>
                      <CardDescription className="text-gray-600">Pick the types of updates you want.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Schedule</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Tasks</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Reminders</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Insights</Label>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Billing</Label>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-gray-900">Critical Alerts</Label>
                          <Switch defaultChecked disabled />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Quiet Hours</CardTitle>
                      <CardDescription className="text-gray-600">Mute non-critical alerts at night.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* <Input
                          type="time"
                          defaultValue="22:00"
                          className="rounded-2xl w-[140px] border-gray-300 bg-white text-gray-900"
                        /> */}
                        {/* <Input
  type="time"
  defaultValue="22:00"
  className="rounded-2xl w-[140px] border-gray-300 bg-white text-gray-900 accent-purple-600"
/> */}
                        <CustomTimePicker/>
                        <span className="text-sm text-gray-600">to</span>
                        <CustomTimePicker/>
                        {/* <Input
                          type="time"
                          defaultValue="07:00"
                          className="rounded-2xl w-[140px] border-gray-300 bg-white text-gray-900"
                        /> */}
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch defaultChecked />
                        <Label className="text-gray-900">Include mobile push</Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Conditional Rules</CardTitle>
                      <CardDescription className="text-gray-600">
                        Add simple "If this → then send there".
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                          If Tasks between 9–18 → Teams only
                        </Badge>
                        <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                          If Insights after 20:00 → Daily digest
                        </Badge>
                      </div>
                      <Button
                        variant="outline"
                        className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add rule
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Privacy & Safety */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Consent Receipts</CardTitle>
                      <CardDescription className="text-gray-600">See and manage what you've allowed.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-4">Integration</div>
                          <div className="col-span-3">Permissions</div>
                          <div className="col-span-3">Granted</div>
                          <div className="col-span-2 text-right">Revoke</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-4 font-medium text-gray-900">Google Calendar</div>
                            <div className="col-span-3">
                              <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                Read/write
                              </Badge>
                            </div>
                            <div className="col-span-3 text-sm text-gray-600">Oct 6, 2025</div>
                            <div className="col-span-2 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Revoke
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-2 border-red-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-red-600">Erase Data</CardTitle>
                      <CardDescription className="text-gray-600">
                        Delete parts of your data or everything.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-gray-900">Scope</Label>
                          <Select>
                            <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                              <SelectValue placeholder="Conversations" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200">
                              <SelectItem value="conversations">Conversations</SelectItem>
                              <SelectItem value="automations">Automations</SelectItem>
                              <SelectItem value="memories">Memories</SelectItem>
                              <SelectItem value="everything">Everything</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Confirm</Label>
                          <Input
                            placeholder='Type "ERASE"'
                            className="rounded-2xl border-gray-300 bg-white text-gray-900"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button variant="destructive" className="w-full rounded-2xl">
                            Erase
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Family Safety</CardTitle>
                      <CardDescription className="text-gray-600">Protect dependents with clear alerts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-2">Member</div>
                          <div className="col-span-2">Relationship</div>
                          <div className="col-span-1">Age</div>
                          <div className="col-span-2">Safety</div>
                          <div className="col-span-5">Alert channels</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-2 font-medium text-gray-900">Sam</div>
                            <div className="col-span-2 text-sm text-gray-600">Child</div>
                            <div className="col-span-1 text-sm text-gray-600">14</div>
                            <div className="col-span-2">
                              <Badge className="rounded-xl bg-green-500 text-white">Protected</Badge>
                            </div>
                            <div className="col-span-5 text-sm text-gray-600">Voice, Dashboard, Push</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Account & Access */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Profile (Owner)</CardTitle>
                      <CardDescription className="text-gray-600">Basic info for the account owner.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-gray-900">Full Name</Label>
                          <Input
                            defaultValue="Alex Johnson"
                            className="rounded-2xl border-gray-300 bg-white text-gray-900"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Email</Label>
                          <Input
                            type="email"
                            defaultValue="alex@example.com"
                            className="rounded-2xl border-gray-300 bg-white text-gray-900"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Language</Label>
                          <Select>
                            <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                              <SelectValue placeholder="English (US)" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200">
                              <SelectItem value="en-us">English (US)</SelectItem>
                              <SelectItem value="en-uk">English (UK)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Avatar</Label>
                          <Button
                            variant="outline"
                            className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Upload
                          </Button>
                        </div>
                      </div>
                      <Button className="rounded-2xl">Save Changes</Button>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Members & Roles</CardTitle>
                      <CardDescription className="text-gray-600">
                        Manage who's on your plan and what they can see.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-2">Name</div>
                          <div className="col-span-2">Role</div>
                          <div className="col-span-2">Relationship</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-4 text-right">Manage</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-2 font-medium text-gray-900">Alex</div>
                            <div className="col-span-2">
                              <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                Owner
                              </Badge>
                            </div>
                            <div className="col-span-2 text-sm text-gray-600">Parent</div>
                            <div className="col-span-2">
                              <Badge className="rounded-xl bg-green-500 text-white">Active</Badge>
                            </div>
                            <div className="col-span-4 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-2 font-medium text-gray-900">Sam</div>
                            <div className="col-span-2">
                              <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                Member
                              </Badge>
                            </div>
                            <div className="col-span-2 text-sm text-gray-600">Child</div>
                            <div className="col-span-2">
                              <Badge className="rounded-xl bg-green-500 text-white">Active</Badge>
                            </div>
                            <div className="col-span-4 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Guardian Alerts</CardTitle>
                      <CardDescription className="text-gray-600">
                        Decide who gets notified for dependent alerts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-gray-900">Guardians to notify</Label>
                          <Select>
                            <SelectTrigger className="rounded-2xl border-gray-300 bg-white text-gray-900">
                              <SelectValue placeholder="Both" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200">
                              <SelectItem value="both">Both</SelectItem>
                              <SelectItem value="parent-a">Parent A only</SelectItem>
                              <SelectItem value="parent-b">Parent B only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-900">Multi-home sync</Label>
                          <div className="flex items-center gap-2 pt-2">
                            <Switch defaultChecked />
                            <span className="text-sm text-gray-600">Enabled</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Security</CardTitle>
                      <CardDescription className="text-gray-600">
                        Add extra protection for your account.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-gray-900">Two-factor authentication</Label>
                            <p className="text-sm text-gray-600">Add an extra layer of security</p>
                          </div>
                          <Button
                            variant="outline"
                            className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Manage
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-gray-900">Biometric unlock</Label>
                            <p className="text-sm text-gray-600">Use fingerprint or face ID</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="text-gray-900">Advanced-section password</Label>
                            <p className="text-sm text-gray-600">Require password for sensitive areas</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Billing */}
              {activeTab === "billing" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-2 border-primary/20 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Plan</CardTitle>
                      <CardDescription className="text-gray-600">See your plan and renewal.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Current</p>
                          <p className="text-3xl font-bold text-primary">Family</p>
                          <p className="text-sm text-gray-600 mt-1">AED 39 / month • Renews Oct 28, 2025</p>
                        </div>
                        <Button
                          variant="outline"
                          className="rounded-2xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Manage plan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Invoices</CardTitle>
                      <CardDescription className="text-gray-600">Download past receipts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                        <div className="bg-gray-50 p-3 hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-700">
                          <div className="col-span-3">Date</div>
                          <div className="col-span-3">#</div>
                          <div className="col-span-2">Amount</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-2 text-right">Download</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          <div className="p-3 md:grid md:grid-cols-12 items-center flex flex-col md:flex-row gap-3 md:gap-0">
                            <div className="col-span-3 text-gray-900">Sep 28, 2025</div>
                            <div className="col-span-3 text-sm text-gray-600">INV-240928</div>
                            <div className="col-span-2 font-medium text-gray-900">AED 39</div>
                            <div className="col-span-2">
                              <Badge className="rounded-xl bg-green-500 text-white">Paid</Badge>
                            </div>
                            <div className="col-span-2 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                PDF
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Support */}
              {activeTab === "support" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-gray-900">Open Tickets</CardTitle>
                          <CardDescription className="text-gray-600">Your active support requests</CardDescription>
                        </div>
                        <Button className="rounded-2xl">
                          <Plus className="mr-2 h-4 w-4" />
                          Open New Ticket
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">#12345</span>
                                <Badge className="rounded-xl bg-amber-500 text-white">Open</Badge>
                              </div>
                              <p className="text-sm text-gray-900">Cannot connect my Apple Watch</p>
                              <p className="text-xs text-gray-600 mt-1">Today, 10:30 AM</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">#12344</span>
                                <Badge className="rounded-xl bg-amber-500 text-white">Open</Badge>
                              </div>
                              <p className="text-sm text-gray-900">Billing question</p>
                              <p className="text-xs text-gray-600 mt-1">Yesterday, 4:00 PM</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Support History</CardTitle>
                      <CardDescription className="text-gray-600">Previously resolved tickets</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">#12343</span>
                                <Badge className="rounded-xl bg-green-500 text-white">Resolved</Badge>
                              </div>
                              <p className="text-sm text-gray-900">Password reset request</p>
                              <p className="text-xs text-gray-600 mt-1">2025-07-28</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 p-3 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">#12342</span>
                                <Badge variant="outline" className="rounded-xl border-gray-300 text-gray-700">
                                  Closed
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-900">General feedback</p>
                              <p className="text-xs text-gray-600 mt-1">2025-07-20</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-xl bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-3xl border-gray-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <details className="rounded-2xl border border-gray-200 p-3 cursor-pointer bg-white">
                          <summary className="font-medium text-gray-900">What is Privacy Mode?</summary>
                          <p className="text-sm text-gray-600 mt-2">
                            Privacy Mode pauses all listening, voice recording, and data logging. Enable it for a set
                            time or until you resume.
                          </p>
                        </details>
                        <details className="rounded-2xl border border-gray-200 p-3 cursor-pointer bg-white">
                          <summary className="font-medium text-gray-900">What is Data Residency?</summary>
                          <p className="text-sm text-gray-600 mt-2">
                            Choose the region (EU/US) where your data is stored to align with local regulations.
                          </p>
                        </details>
                        <details className="rounded-2xl border border-gray-200 p-3 cursor-pointer bg-white">
                          <summary className="font-medium text-gray-900">What is the Consent Ledger?</summary>
                          <p className="text-sm text-gray-600 mt-2">
                            A transparent record of all permissions you've granted. Review and revoke anytime.
                          </p>
                        </details>
                        <details className="rounded-2xl border border-gray-200 p-3 cursor-pointer bg-white">
                          <summary className="font-medium text-gray-900">How does Proactivity work?</summary>
                          <p className="text-sm text-gray-600 mt-2">
                            Tune how often EVAO nudges you, what it can do automatically, and your quiet hours.
                          </p>
                        </details>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
