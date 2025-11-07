"use client"

import { Card } from "@/components/base/card"
import { Button } from "@/components/base/button"
import { Progress } from "@/components/base/progress"
import Link from "next/link"
import { ArrowLeft, Award, BookOpen, Briefcase, HeartIcon as CertIcon, Users, Share2, TrendingUp, Zap } from "lucide-react"
import { EngagementMetrics } from "@/components/dashboard-home/engagement-metrics"

const scoreData = [
  { name: "Academic Performance", score: 85, icon: BookOpen, description: "GPA, courses, and educational achievements", improvement: "Add 2 certifications to gain +5 pts" },
  { name: "Work Experience", score: 72, icon: Briefcase, description: "Job history, roles, and responsibilities", improvement: "Highlight your management experience +3 pts" },
  { name: "Certifications", score: 68, icon: CertIcon, description: "Professional certifications and credentials", improvement: "Complete AWS certification +8 pts" },
  { name: "Projects & Portfolio", score: 78, icon: Award, description: "Personal and professional projects", improvement: "Add 1 more project to reach +4 pts" },
  { name: "Social & Network", score: 65, icon: Users, description: "LinkedIn presence and professional network", improvement: "Expand network by 50 connections +2 pts" },
]

const actionButtons = [
  { href: "/ai-suggestions", text: "Get AI Coach Tips", variant: "default" as const },
  { href: "#", text: "Share Score", variant: "outline" as const, icon: Share2 },
]

export function GCScoreDetail() {
  const overallScore = Math.round(scoreData.reduce((sum, item) => sum + item.score, 0) / scoreData.length)

  const ScoreCard = ({ name, score, icon: Icon, description, improvement }: typeof scoreData[0]) => (
    <Card className="p-6">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">{name}</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center gap-4">
          <Progress value={score} className="flex-1" />
          <span className="text-lg font-bold text-foreground">{score}%</span>
        </div>
        <p className="mt-3 text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-2 rounded-lg inline-block">
          <Zap className="w-3 h-3 inline mr-1" />
          {improvement}
        </p>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Score Analytics</h1>
          <p className="mt-2 text-muted-foreground">Understand your strengths and growth opportunities</p>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">Your Impact</h2>
          <EngagementMetrics />
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall GC Score</p>
                <p className="mt-2 text-5xl font-bold text-foreground">{overallScore}</p>
                <p className="mt-2 text-sm text-muted-foreground">You're in the top 35% of candidates</p>
                <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Avg +2.3 pts/month with GC services
                </p>
              </div>
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                <span className="text-3xl font-bold text-primary">{overallScore}%</span>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Score Breakdown & Quick Wins</h2>
            {scoreData.map(ScoreCard)}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {actionButtons.map(({ href, text, variant, icon: Icon }) => (
              <Button key={text} asChild variant={variant} className="flex-1">
                <Link href={href}>
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  {text}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
