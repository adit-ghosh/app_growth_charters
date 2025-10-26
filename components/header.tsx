"use client"

import { Menu, Bell, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
          </button>
          <ThemeToggle />
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
