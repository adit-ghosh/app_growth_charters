"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Circle, TrendingUp, Zap, Calendar, Target } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CareerGoals() {
  const goals = [
    {
      title: "Reach GC Score 85",
      current: 78,
      target: 85,
      daysLeft: 45,
      status: "in-progress",
      withGC: 25,
      withoutGC: 60,
      currentPace: 32,
      boost: "Join AI coaching to save 20 days",
      tasks: ["Complete skill assessment", "Add 3 projects", "Get 5 endorsements"]
    },
    {
      title: "Land Senior Engineer Role",
      current: 3,
      target: 10,
      daysLeft: 30,
      status: "in-progress", 
      withGC: 15,
      withoutGC: 45,
      currentPace: 25,
      boost: "Use resume review to improve chances by 40%",
      tasks: ["Optimize resume", "Practice interviews", "Network with 10 engineers"]
    },
    {
      title: "Complete Cloud Certification",
      current: 1,
      target: 3,
      daysLeft: 90,
      status: "not-started",
      withGC: 60,
      withoutGC: 120,
      currentPace: 85,
      boost: "Study groups cut preparation time by 50%",
      tasks: ["Join study group", "Complete practice tests", "Schedule exam"]
    },
  ]

  const calculateEfficiency = (withGC: number, withoutGC: number) => {
    return Math.round((1 - withGC / withoutGC) * 100)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Your Career Journey</h3>
          <p className="text-sm text-muted-foreground">Track progress and accelerate with GC services</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-emerald-600">
          <TrendingUp className="w-4 h-4" />
          <span>68% overall progress</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {goals.map((goal) => {
          const efficiency = calculateEfficiency(goal.withGC, goal.withoutGC)
          const progress = (goal.current / goal.target) * 100
          
          return (
            <Card key={goal.title} className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                {goal.status === "in-progress" ? (
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Target className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  </div>
                ) : (
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-muted/80 transition-colors">
                    <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                )}
                
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {goal.current}/{goal.target} completed • {goal.daysLeft} days remaining
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{Math.round(progress)}%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <Progress value={progress} className="h-2" />

                  {/* 🆕 Timeline Comparison */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline Efficiency</span>
                      <span className="font-semibold text-emerald-600">
                        GC saves {efficiency}% time
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-muted/50 rounded-lg">
                        <div className="text-xs text-muted-foreground">Current Pace</div>
                        <div className="font-semibold text-foreground">{goal.currentPace}d</div>
                      </div>
                      <div className="p-2 bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900 rounded-lg">
                        <div className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">With GC</div>
                        <div className="font-semibold text-emerald-600">{goal.withGC}d</div>
                      </div>
                      <div className="p-2 bg-amber-500/10 rounded-lg">
                        <div className="text-xs text-amber-700 dark:text-amber-300">Without GC</div>
                        <div className="font-semibold text-amber-600">{goal.withoutGC}d</div>
                      </div>
                    </div>

                    {/* 🆕 GC Boost Insight */}
                    <div className="flex items-start gap-2 p-3 bg-blue-500/5 border border-blue-200 dark:border-blue-900 rounded-lg">
                      <Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">GC Acceleration</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">{goal.boost}</p>
                      </div>
                    </div>

                    {/* 🆕 Actionable Tasks */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground">Next Actions:</p>
                      <div className="flex flex-wrap gap-2">
                        {goal.tasks.map((task, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* 🆕 Overall Efficiency Summary */}
      <Card className="p-4 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border-emerald-200 dark:border-emerald-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">GC Services Impact</p>
            <p className="text-xs text-muted-foreground">
              On average, GC users achieve goals 2.3x faster than those going alone
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-600">2.3x</p>
            <p className="text-xs text-muted-foreground">Faster achievement</p>
          </div>
        </div>
      </Card>
    </div>
  )
}