"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function ScoreCard() {
  const score = 78
  const previousScore = 72
  const improvement = score - previousScore

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">Growth Charter Score</CardTitle>
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

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round((score / 100) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(score / 100) * 100}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          <div>
            <div className="text-xs text-muted-foreground">Rank</div>
            <div className="text-lg font-semibold text-foreground">Top 15%</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Level</div>
            <div className="text-lg font-semibold text-foreground">Advanced</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
