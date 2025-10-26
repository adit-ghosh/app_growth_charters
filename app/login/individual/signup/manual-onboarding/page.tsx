"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, BookOpen, Briefcase, Users, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type TabType = "personal" | "academic" | "skills" | "references"

export default function ManualOnboardingPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>("personal")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "personal", label: "Personal", icon: <User className="w-4 h-4" /> },
    { id: "academic", label: "Academic", icon: <BookOpen className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Briefcase className="w-4 h-4" /> },
    { id: "references", label: "References", icon: <Users className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed md:relative w-64 h-screen bg-card border-r border-border p-6 overflow-y-auto transition-transform duration-300 z-50 md:z-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-foreground">Growth Charter</h2>
              <p className="text-sm text-muted-foreground">Complete your profile</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setSidebarOpen(false) // Close sidebar on mobile after selection
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-card">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-foreground">Onboarding</h1>
            <div className="w-9" /> {/* Spacer for alignment */}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4 md:p-8">
            <Card className="w-full max-w-2xl p-8">
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabType)}>
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {tabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <p className="text-muted-foreground">Add your personal details to get started.</p>
                  </div>
                </TabsContent>

                <TabsContent value="academic" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Academic Background</h3>
                    <p className="text-muted-foreground">Share your educational qualifications.</p>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
                    <p className="text-muted-foreground">Highlight your professional skills.</p>
                  </div>
                </TabsContent>

                <TabsContent value="references" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">References</h3>
                    <p className="text-muted-foreground">Add professional references.</p>
                  </div>
                </TabsContent>

                {/* Not Done Yet Message */}
                <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
                  <p className="text-center text-muted-foreground mb-4">Not done yet? You can complete this later.</p>
                  <Button onClick={() => router.push("/")} className="w-full">
                    Go to Dashboard
                  </Button>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
