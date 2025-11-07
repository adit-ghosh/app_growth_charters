"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  X,
  Home,
  Zap,
  TrendingUp,
  Compass,
  Briefcase,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Target,
  Navigation,
  Radar,
  Rocket,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

export function Sidebar({ open, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // 🚀 UPDATED: More engaging, action-oriented menu names
  const navItems = [
    { href: "/", label: "Growth Pulse", icon: Home, description: "Your progress dashboard" },
    { href: "#", label: "Growth Analytics", icon: Zap, description: "Deep score insights" },
    { href: "/#", label: "Growth Accelerator", icon: Rocket, description: "AI-powered tips" },
    { href: "/#", label: "Path Explorer", icon: Compass, description: "Discover new careers" },
    { href: "/#", label: "Career Navigator", icon: Navigation, description: "Your growth map" },
    { href: "/#", label: "Opportunity Radar", icon: Radar, description: "Active job matches" },
    { href: "/#", label: "Growth Arena", icon: Target, description: "Compete & grow" },
    { href: "/#", label: "Settings", icon: Settings, description: "Account preferences" },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative w-64 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 z-50 md:z-0",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isCollapsed && "md:w-20",
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm">GC</span>
            </div>
            {!isCollapsed && (
              <div>
                <span className="font-semibold text-foreground hidden md:inline whitespace-nowrap">Growth Charter</span>
                <p className="text-xs text-muted-foreground hidden md:block">Human Potential Engine</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button onClick={onToggle} className="md:hidden p-1 hover:bg-muted rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap group",
                  isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
                  isCollapsed && "md:justify-center md:px-2",
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <span className="font-medium hidden md:inline block">{item.label}</span>
                    <span className="text-xs text-current-foreground group-hover:text-current hidden md:block">
                      {item.description}
                    </span>
                  </div>
                )}
                <span className="font-medium md:hidden">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <button
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors",
              isCollapsed && "md:justify-center md:px-2",
            )}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium hidden md:inline">{!isCollapsed && "Logout"}</span>
            <span className="font-medium md:hidden">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}