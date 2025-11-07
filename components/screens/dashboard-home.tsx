"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, TrendingUp, Zap, Map, Building2, Brain, Users, Target, Clock, Award, Eye, Star } from "lucide-react"
import { ScoreCard } from "../dashboard-home/score-card"
import { StrengthPentagon } from "../dashboard-home/strength-pentagon"
import { EngagementMetrics } from "../dashboard-home/engagement-metrics"
import { CareerGoals } from "../dashboard-home/career-goals"
import { GroupCompetition } from "../dashboard-home/group-competition"
import { GCServicesPromo } from "../dashboard-home/gc-services-promo"
import { useState, useEffect } from "react"

export function DashboardHome() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enhanced quick actions with stats
  const quickActions = [
    {
      title: "Growth Analytics",
      description: "Deep dive into your metrics",
      icon: TrendingUp,
      href: "/gc-score",
      color: "from-emerald-500 to-teal-600",
      stat: "+5pts this week",
      insight: "You're growing 12% faster than peers"
    },
    {
      title: "Growth Accelerator",
      description: "AI-powered growth actions",
      icon: Zap,
      href: "/ai-suggestions",
      color: "from-amber-500 to-orange-600",
      stat: "3 new tips",
      insight: "Complete 1 tip for +8 score boost"
    },
    {
      title: "Career Navigator",
      description: "Your career trajectory",
      icon: Map,
      href: "/career-roadmap",
      color: "from-blue-500 to-cyan-600",
      stat: "2 paths ready",
      insight: "85% match with your goals"
    },
    {
      title: "Path Explorer",
      description: "Discover new directions",
      icon: Brain,
      href: "/career-diversion",
      color: "from-purple-500 to-pink-600",
      stat: "4 opportunities",
      insight: "High demand in your skills"
    },
    {
      title: "Opportunity Radar",
      description: "Companies seeking you",
      icon: Building2,
      href: "/company-matches",
      color: "from-rose-500 to-red-600",
      stat: "18 matches",
      insight: "5 companies actively hiring"
    },
    {
      title: "Growth Arena",
      description: "Compete with peers",
      icon: Target,
      href: "/group-competition",
      color: "from-indigo-500 to-purple-600",
      stat: "Rank #3",
      insight: "Move up 2 spots this week"
    },
  ]

  // Enhanced Daily Growth Tips with actions
  const dailyTips = [
    { 
      id: 1, 
      text: "Complete skill assessment for +3 points", 
      icon: Zap,
      action: "Start Now",
      points: 3
    },
    { 
      id: 2, 
      text: "Join peer group to accelerate learning by 40%", 
      icon: Users,
      action: "Join Group",
      points: 5
    },
    { 
      id: 3, 
      text: "Schedule AI coaching session this week", 
      icon: Clock,
      action: "Book Now",
      points: 8
    },
  ]

  // Weekly Progress Snapshot
  const weeklyProgress = [
    { metric: "Skills Improved", value: "3", change: "+2", icon: Award },
    { metric: "Connections Made", value: "12", change: "+5", icon: Users },
    { metric: "Profile Views", value: "45", change: "+18", icon: Eye },
    { metric: "Learning Hours", value: "8.5", change: "+3.2", icon: Clock },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with More Insights */}
      <div
        className="relative border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/5 px-4 py-8 sm:py-12 lg:px-8 overflow-hidden"
        style={{
          backgroundPosition: `0 ${scrollY * 0.5}px`,
        }}
      >
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-8 transform transition-transform duration-300" style={{ y: scrollY * 0.2 }}>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Your Growth Dashboard
                </h1>
                <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                  Track your journey, unlock opportunities, and achieve your career goals
                </p>
              </div>
              <div className="hidden lg:block text-right">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <p className="text-sm font-semibold text-foreground">Weekly Goal Progress</p>
                  <p className="text-2xl font-bold text-primary mt-1">68%</p>
                  <p className="text-xs text-muted-foreground">On track for +15 points</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Quick Stats Row */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              <div className="text-center p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                <div className="text-2xl font-bold text-primary">78</div>
                <div className="text-xs text-muted-foreground">GC Score</div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">+6 this month</div>
              </div>
              <div className="text-center p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                <div className="text-2xl font-bold text-emerald-600">Top 15%</div>
                <div className="text-xs text-muted-foreground">Global Rank</div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">↑ 3 spots</div>
              </div>
              <div className="text-center p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                <div className="text-2xl font-bold text-amber-600">+2.3</div>
                <div className="text-xs text-muted-foreground">Monthly Growth</div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">2.1x peers</div>
              </div>
              <div className="text-center p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                <div className="text-2xl font-bold text-purple-600">18</div>
                <div className="text-xs text-muted-foreground">Opportunities</div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">5 new today</div>
              </div>
            </div>
          </div>

          <EngagementMetrics />

          {/* Weekly Progress Snapshot */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {weeklyProgress.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.metric} className="p-4 text-center hover:shadow-md transition-shadow">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.metric}</div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">{item.change}</div>
                </Card>
              )
            })}
          </div>

          {/* Main Cards Grid */}
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 mt-8">
            {/* Score Card */}
            <div className="lg:col-span-1">
              <ScoreCard />
            </div>

            {/* Strength Pentagon */}
            <div className="lg:col-span-2">
              <Card className="p-4 sm:p-6 backdrop-blur-sm bg-background/80 border-border/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">Your Growth Profile</h2>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>+8% this month</span>
                  </div>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <StrengthPentagon />
                </div>
                {/* Quick Insight */}
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-200 dark:border-blue-900 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Insight:</strong> Your technical skills are strong. Focus on leadership to unlock senior roles.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Daily Growth Tips Section */}
      <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Today's Growth Opportunities</h3>
            <span className="text-xs text-muted-foreground">Complete for +16 total points</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {dailyTips.map((tip) => {
              const Icon = tip.icon
              return (
                <Card key={tip.id} className="p-4 hover:shadow-md transition-shadow group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tip.text}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-full">
                            +{tip.points} pts
                          </span>
                          <button className="text-xs text-primary hover:text-primary/80 font-semibold">
                            {tip.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="px-4 py-8 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Explore Your Growth</h2>
            <span className="text-sm text-muted-foreground">6 tools to accelerate your journey</span>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link key={action.href} href={action.href}>
                  <Card className="group relative h-full overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 bg-background/80 backdrop-blur-sm border-border/50">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                          {action.stat}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{action.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{action.description}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{action.insight}</p>
                      <ArrowRight className="mt-3 h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Goals & Competition Section */}
      <div className="px-4 py-8 sm:py-12 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CareerGoals />
          </div>
          <div>
            <GroupCompetition />
          </div>
        </div>
      </div>

      {/* Enhanced GC Services Promotion */}
      <div className="px-4 py-8 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GCServicesPromo />
        </div>
      </div>
    </div>
  )
}