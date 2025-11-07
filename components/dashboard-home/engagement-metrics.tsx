"use client"

import { Card } from "@/components/ui/card"
import { Eye, Users, TrendingUp, Award, MessageCircle, Target, Zap } from "lucide-react"

export function EngagementMetrics() {
  const metrics = [
    {
      label: "Profile Views",
      value: "324",
      change: "+12%",
      icon: Eye,
      color: "text-blue-500",
      insight: "Top 15% among peers",
      trend: "up",
      action: "Boost visibility"
    },
    {
      label: "Recruiter Interest",
      value: "18",
      change: "+5 this week",
      icon: Users,
      color: "text-emerald-500",
      insight: "3 companies actively viewing",
      trend: "up", 
      action: "View matches"
    },
    {
      label: "Growth Velocity",
      value: "+2.3",
      change: "pts/month",
      icon: TrendingUp,
      color: "text-amber-500",
      insight: "2.1x faster than average",
      trend: "up",
      action: "Maintain pace"
    },
    {
      label: "Global Rank",
      value: "#247",
      change: "↑ 12 spots",
      icon: Award,
      color: "text-purple-500",
      insight: "Top 15% worldwide",
      trend: "up",
      action: "Reach top 10%"
    },
    {
      label: "Peer Connections",
      value: "45",
      change: "+8 this month", 
      icon: Users,
      color: "text-green-500",
      insight: "Strong network growth",
      trend: "up",
      action: "Expand network"
    },
    {
      label: "Skill Endorsements",
      value: "28",
      change: "+3 new",
      icon: MessageCircle,
      color: "text-orange-500",
      insight: "Technical skills recognized",
      trend: "up",
      action: "Get more"
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Your Growth Impact</h2>
          <p className="text-sm text-muted-foreground">Key metrics driving your career momentum</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-emerald-600">
          <Zap className="w-4 h-4" />
          <span>All metrics trending up</span>
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label} className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className={`text-xs font-semibold mt-1 ${
                    metric.trend === "up" ? "text-emerald-600" : "text-rose-600"
                  }`}>
                    {metric.change}
                  </p>
                </div>
                <div className={`p-2 rounded-lg bg-background/80 group-hover:scale-110 transition-transform ${metric.color.replace('text-', 'bg-')}/10`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
              </div>
              
              {/* 🆕 Insight and Action */}
              <div className="space-y-2 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground leading-tight">{metric.insight}</p>
                <button className="text-xs text-primary hover:text-primary/80 font-semibold w-full text-left">
                  {metric.action} →
                </button>
              </div>
            </Card>
          )
        })}
      </div>
      
      {/* 🆕 Progress Summary */}
      <Card className="p-4 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 border-emerald-200 dark:border-emerald-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Weekly Progress: Excellent</p>
            <p className="text-xs text-muted-foreground">You're on track to gain +15 points this month</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-600">78%</p>
            <p className="text-xs text-muted-foreground">Weekly goal completion</p>
          </div>
        </div>
      </Card>
    </div>
  )
}