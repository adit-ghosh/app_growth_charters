"use client"

import { ScoreCard } from "@/components/score-card"
import { StrengthPentagon } from "@/components/strength-pentagon"
import { CareerRecommendations } from "@/components/career-recommendations"
import { ProgressTracking } from "@/components/progress-tracking"
import { RecentActivity } from "@/components/recent-activity"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Top Row - Score and Pentagon */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ScoreCard />
        <div className="lg:col-span-2">
          <StrengthPentagon />
        </div>
      </div>

      {/* Middle Row - Progress and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressTracking />
        <CareerRecommendations />
      </div>

      {/* Bottom Row - Recent Activity */}
      <RecentActivity />
    </div>
  )
}
