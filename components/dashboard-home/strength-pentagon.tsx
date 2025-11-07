"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { Zap, TrendingUp, Target } from "lucide-react"

const data = [
  { 
    category: "Technical Skills", 
    value: 85,
    insight: "Strong foundation in core technologies",
    improvement: "Learn cloud architecture for +5pts",
    trend: "+8% this month"
  },
  { 
    category: "Leadership", 
    value: 78,
    insight: "Growing influence in team settings", 
    improvement: "Lead a project to demonstrate skills",
    trend: "+12% this month"
  },
  { 
    category: "Communication", 
    value: 82,
    insight: "Effective in technical discussions",
    improvement: "Practice executive presentations", 
    trend: "+5% this month"
  },
  { 
    category: "Problem Solving", 
    value: 88,
    insight: "Excellent analytical abilities",
    improvement: "Tackle complex system design",
    trend: "+3% this month"
  },
  { 
    category: "Collaboration", 
    value: 75,
    insight: "Good team player, could lead more",
    improvement: "Initiate cross-team projects",
    trend: "+15% this month"
  },
]

export function StrengthPentagon() {
  const averageScore = Math.round(data.reduce((sum, item) => sum + item.value, 0) / data.length)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Your Growth Profile</CardTitle>
            <CardDescription>Comprehensive view of your strengths and opportunities</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{averageScore}</div>
            <div className="text-xs text-muted-foreground">Average Score</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Radar Chart */}
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: "var(--color-foreground)", fontSize: 12, fontWeight: 500 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
              />
              <Radar
                name="Score"
                dataKey="value"
                stroke="var(--color-primary)"
                fill="var(--color-primary)"
                fillOpacity={0.25}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 🆕 Key Insights */}
        <div className="p-4 bg-blue-500/5 border border-blue-200 dark:border-blue-900 rounded-lg">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Growth Insight</p>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Your technical skills are excellent. Focus on collaboration and leadership to unlock senior roles.
                GC coaching can help you improve these areas 2x faster.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Legend with Insights */}
        <div className="grid gap-4 md:grid-cols-2">
          {data.map((item, index) => (
            <div key={item.category} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>{item.trend}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground text-sm">{item.category}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.insight}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Target className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">{item.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🆕 Action Recommendations */}
        <div className="p-4 bg-emerald-500/5 border border-emerald-200 dark:border-emerald-900 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">
                Recommended Action
              </p>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
                Join our Leadership Development program to boost collaboration and leadership scores
              </p>
            </div>
            <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 whitespace-nowrap">
              Learn More →
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}