"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScoreCard() {
  const score = 78
  const previousScore = 72
  const improvement = score - previousScore
  const nextMilestone = 85
  const pointsToNext = nextMilestone - score

  const quickWins = [
    { action: "Complete profile", points: 5, time: "5 min" },
    { action: "Add 2 skills", points: 3, time: "2 min" },
    { action: "Join a group", points: 4, time: "1 min" },
  ]

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">Growth Charter Score</CardTitle>
          <div className="flex items-center gap-1 text-xs text-emerald-600">
            <TrendingUp className="w-3 h-3" />
            <span>Growing</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end gap-2">
          <div className="text-5xl font-bold text-primary">{score}</div>
          <div className="text-sm text-muted-foreground mb-2">/100</div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span>+{improvement} points</span>
          </div>
          <span className="text-muted-foreground">from last month</span>
        </div>

        {/* Progress bar with next milestone */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress to {nextMilestone}</span>
            <span>{pointsToNext} points needed</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(score / nextMilestone) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Current</span>
            <span className="text-primary font-semibold">Next: {nextMilestone}</span>
          </div>
        </div>

        {/* 🆕 Quick Wins */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Zap className="w-3 h-3" />
            <span>Quick Wins (+12 points)</span>
          </div>
          {quickWins.map((win, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-foreground">{win.action}</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-semibold">+{win.points}</span>
                <span className="text-muted-foreground">{win.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Award className="w-3 h-3" />
              <span>Rank</span>
            </div>
            <div className="text-lg font-semibold text-foreground">Top 15%</div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Target className="w-3 h-3" />
              <span>Level</span>
            </div>
            <div className="text-lg font-semibold text-foreground">Advanced</div>
          </div>
        </div>

        {/* 🆕 Action Button */}
        <Button className="w-full gap-2" size="sm">
          <Zap className="w-4 h-4" />
          Boost Score Now
        </Button>
      </CardContent>
    </Card>
  )
}