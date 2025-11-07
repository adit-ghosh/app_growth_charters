"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Lightbulb, TrendingUp, Clock, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function AISuggestions() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const suggestions = [
    {
      id: 1,
      title: "Master AWS Solutions Architect",
      description:
        "Achieve AWS certification and build 3 cloud infrastructure projects to strengthen your systems design foundation",
      impact: "+18 points",
      difficulty: "Medium",
      timeframe: "4 months",
      status: "recommended",
      gcBoost: "With GC coaching: +22 pts",
      completionRate: 87,
      successStories: "2,340 users succeeded",
    },
    {
      id: 2,
      title: "Build Production-Grade Full-Stack App",
      description:
        "Create and deploy a SaaS application with real users, implementing authentication, payments, and analytics",
      impact: "+22 points",
      difficulty: "Hard",
      timeframe: "6-8 weeks",
      status: "high-impact",
      gcBoost: "With GC groups: +28 pts",
      completionRate: 76,
      successStories: "1,892 users validated",
    },
    {
      id: 3,
      title: "Revamp Your LinkedIn Presence",
      description:
        "Professional headshot, compelling headline, detailed experience descriptions, and 50+ endorsements from your network",
      impact: "+12 points",
      difficulty: "Easy",
      timeframe: "1 week",
      status: "quick-win",
      gcBoost: "Instant recruiter visibility",
      completionRate: 94,
      successStories: "4,521 profile views gained",
    },
    {
      id: 4,
      title: "Become Open Source Contributor",
      description:
        "Contribute 5+ meaningful PRs to established projects, fixing bugs and adding features that get merged",
      impact: "+16 points",
      difficulty: "Medium",
      timeframe: "8-12 weeks",
      status: "recommended",
      gcBoost: "With live coaching: +20 pts",
      completionRate: 68,
      successStories: "1,456 repos contributed",
    },
    {
      id: 5,
      title: "Launch Technical Content Series",
      description: "Write and publish 8 high-quality technical articles on Medium/Dev.to covering your expertise areas",
      impact: "+14 points",
      difficulty: "Medium",
      timeframe: "10-12 weeks",
      status: "recommended",
      gcBoost: "With peer groups: +18 pts",
      completionRate: 81,
      successStories: "3,240 followers attracted",
    },
  ]

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? suggestions.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border bg-gradient-to-br from-amber-500/10 via-background to-orange-500/5 px-4 py-6 sm:py-8 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
          <Link
            href="/"
            className="mb-4 sm:mb-6 inline-flex items-center text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">AI Coach Tips</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Personalized recommendations to boost your GC Score
          </p>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 lg:px-8 bg-emerald-500/10 border-b border-emerald-200 dark:border-emerald-900">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm">
                Insight: GC Services Impact
              </p>
              <p className="text-xs text-emerald-800 dark:text-emerald-200 mt-1">
                Users with AI Coaching achieve 2.3x faster results. See which services boost each recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-300"
                  style={{
                    transform: `translateX(-${carouselIndex * 100}%)`,
                  }}
                >
                  <div className="flex">
                    {suggestions.map((suggestion) => (
                      <div key={suggestion.id} className="w-full flex-shrink-0">
                        <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 shadow-lg">
                          <div className="p-4 sm:p-6">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                              <h3 className="text-base sm:text-lg font-semibold text-foreground">{suggestion.title}</h3>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{suggestion.description}</p>

                            <div className="mt-4 space-y-3">
                              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="h-4 w-4 text-green-500" />
                                  <span className="font-semibold text-green-600">{suggestion.impact}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-blue-500" />
                                  <span className="text-muted-foreground">{suggestion.timeframe}</span>
                                </div>
                                <div className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                  {suggestion.difficulty}
                                </div>
                              </div>

                              <div className="text-xs text-muted-foreground">
                                <p className="font-semibold">{suggestion.successStories}</p>
                                <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                                  <div
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full"
                                    style={{ width: `${suggestion.completionRate}%` }}
                                  />
                                </div>
                                <p className="text-xs mt-1">{suggestion.completionRate}% completion rate</p>
                              </div>
                            </div>

                            <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-2">
                              <p className="text-xs text-primary font-medium">{suggestion.gcBoost}</p>
                            </div>
                            <Button className="mt-4 w-full">Start Now</Button>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Carousel Indicators */}
              <div className="mt-4 flex justify-center gap-2">
                {suggestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      idx === carouselIndex ? "bg-primary w-6" : "bg-muted w-2",
                    )}
                    aria-label={`Go to suggestion ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop List */}
          <div className="md:space-y-4">
            {suggestions.map((suggestion) => (
              <Card
                key={suggestion.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5 bg-background/50 backdrop-blur-sm border-border/50"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                        <h3 className="text-lg font-semibold text-foreground">{suggestion.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{suggestion.description}</p>

                      <div className="mt-4 grid grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="font-semibold text-green-600">{suggestion.impact}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-muted-foreground">{suggestion.timeframe}</span>
                        </div>
                        <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground w-fit">
                          {suggestion.difficulty}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold">
                            {suggestion.completionRate}% success
                          </p>
                          <div className="w-full bg-muted rounded-full h-1 mt-1">
                            <div
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1 rounded-full"
                              style={{ width: `${suggestion.completionRate}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground mt-2 italic">{suggestion.successStories}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                        {suggestion.gcBoost}
                      </div>
                      <Button className="whitespace-nowrap">Start Now</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
