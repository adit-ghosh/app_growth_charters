"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  Users,
  TrendingUp,
  Download,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Globe,
} from "lucide-react"
import { useState } from "react"

export function CompanyMatches() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const companies = [
    {
      name: "TechCorp Global",
      role: "Senior Software Engineer",
      match: 92,
      location: "San Francisco, CA",
      employees: "5000+",
      salary: "$180K - $220K",
      hiring: "Active hiring",
      insight: "92% match - Strong tech stack alignment. Your system design skills are in high demand.",
      recruiterViews: 45,
      industryFit: "FAANG-tier",
      benefits: "401k • Healthcare • Stock Options",
      recrutierName: "Sarah Chen",
    },
    {
      name: "InnovateLabs",
      role: "Full Stack Developer",
      match: 88,
      location: "Remote",
      employees: "200-500",
      salary: "$150K - $190K",
      hiring: "Urgently hiring",
      insight: "88% match - Remote-first company. Great work-life balance culture.",
      recruiterViews: 32,
      industryFit: "Fast-Growing Startup",
      benefits: "Equity • Remote • Growth",
      recrutierName: "Alex Patel",
    },
    {
      name: "DataFlow AI",
      role: "ML Engineer",
      match: 85,
      location: "New York, NY",
      employees: "1000-5000",
      salary: "$170K - $210K",
      hiring: "Active hiring",
      insight: "85% match - Growing ML team. Opportunity to lead ML infrastructure projects.",
      recruiterViews: 28,
      industryFit: "Enterprise AI",
      benefits: "Training • Health • Gym",
      recrutierName: "James Wilson",
    },
    {
      name: "CloudNine Systems",
      role: "DevOps Engineer",
      match: 82,
      location: "Austin, TX",
      employees: "500-1000",
      salary: "$160K - $200K",
      hiring: "Active hiring",
      insight: "82% match - DevOps expertise critical. Your GCP skills valued at premium.",
      recruiterViews: 25,
      industryFit: "Cloud Infrastructure",
      benefits: "PTO • Wellness • Conference",
      recrutierName: "Maria Garcia",
    },
    {
      name: "StartupXYZ",
      role: "Full Stack Engineer",
      match: 79,
      location: "Remote",
      employees: "50-200",
      salary: "$140K - $180K",
      hiring: "Actively recruiting",
      insight: "79% match - Fast-growing startup. Equity upside + competitive salary.",
      recruiterViews: 18,
      industryFit: "High-Growth Startup",
      benefits: "Equity • Remote • Flexible",
      recrutierName: "David Kim",
    },
  ]

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border bg-gradient-to-br from-rose-500/10 via-background to-red-500/5 px-4 py-6 sm:py-8 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
          <Link
            href="/"
            className="mb-4 sm:mb-6 inline-flex items-center text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Job Matches</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Companies actively seeking profiles like yours
          </p>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 lg:px-8 bg-purple-500/10 border-b border-purple-200 dark:border-purple-900">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-purple-900 dark:text-purple-100 text-sm">Recruiter Activity</p>
              <p className="text-xs text-purple-800 dark:text-purple-200 mt-1">
                127 recruiters viewed your profile this month. Top 5 matches shown below. Increase visibility by
                boosting your GC Score.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
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
                    {companies.map((company, idx) => (
                      <div key={idx} className="w-full flex-shrink-0">
                        <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 shadow-lg">
                          <div className="p-4 sm:p-6 space-y-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{company.name}</h3>
                                <p className="mt-1 text-sm font-medium text-primary">{company.role}</p>
                                <p className="text-xs text-muted-foreground mt-1">{company.industryFit}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">Match</p>
                                <p className="text-2xl font-bold text-primary">{company.match}%</p>
                              </div>
                            </div>

                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {company.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {company.employees}
                              </div>
                              <div className="flex items-center gap-2 font-medium text-green-600">
                                <TrendingUp className="h-4 w-4" />
                                {company.salary}
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Globe className="h-4 w-4" />
                                {company.benefits}
                              </div>
                            </div>

                            <div className="pt-2 border-t border-border space-y-2">
                              <div className="bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900 rounded-lg p-2">
                                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                                  ✓ {company.hiring}
                                </p>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                <p className="font-semibold">{company.recruiterViews} recruiter views</p>
                              </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-200 dark:border-blue-900 rounded-lg p-2">
                              <p className="text-xs text-blue-700 dark:text-blue-300">{company.insight}</p>
                            </div>

                            <Button className="mt-4 w-full gap-2">
                              <Download className="h-4 w-4" />
                              Send Resume
                            </Button>
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
                {companies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      idx === carouselIndex ? "bg-primary w-6" : "bg-muted w-2",
                    )}
                    aria-label={`Go to company ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop List */}
          <div className=" md:space-y-4">
            {companies.map((company, idx) => (
              <Card
                key={idx}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5 bg-background/50 backdrop-blur-sm border-border/50"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{company.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{company.role}</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {company.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {company.employees}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                          <TrendingUp className="h-4 w-4" />
                          {company.salary}
                        </div>
                        <div className="text-xs text-muted-foreground italic">{company.industryFit}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Match Score</p>
                        <p className="text-3xl font-bold text-primary">{company.match}%</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full">
                        {company.hiring}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="bg-muted/50 rounded-lg p-3 text-sm">
                      <p className="text-xs text-muted-foreground">Recruiter Interest</p>
                      <p className="font-semibold text-foreground mt-1">{company.recruiterViews} profile views</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-200 dark:border-blue-900 rounded-lg p-3 text-sm">
                      <p className="text-xs text-blue-700 dark:text-blue-300 font-semibold">
                        Recruiter: {company.recrutierName}
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">{company.benefits}</p>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-700 dark:text-blue-300">{company.insight}</p>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Send Resume
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
