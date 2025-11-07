"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function CareerDiversion() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const diversions = [
    {
      title: "Product Manager",
      successRate: 78,
      difficulty: "Medium",
      timeframe: "6-12 months",
      withGC: "3-4 months",
      recruiterDemand: "↑ 34% hiring increase",
      avgSalary: "$145K - $180K",
      challenges: [
        "Transition from IC to leadership mindset required",
        "Build cross-functional collaboration experience",
        "Learn business strategy and OKR frameworks",
      ],
      roadmap: [
        "Complete product management certification (Reforge)",
        "Lead 2 cross-functional projects as project lead",
        "Build product portfolio with case studies",
        "Network with 50+ product leaders",
      ],
      skills: ["Business Strategy", "Data Analysis", "Stakeholder Management"],
    },
    {
      title: "Data Scientist",
      successRate: 65,
      difficulty: "Hard",
      timeframe: "12-18 months",
      withGC: "6-8 months",
      recruiterDemand: "↑ 52% hiring increase",
      avgSalary: "$155K - $200K",
      challenges: [
        "Master advanced mathematics and statistics",
        "Deep learning in machine learning frameworks",
        "Competing with PhDs in the market",
      ],
      roadmap: [
        "Complete Andrew Ng's ML Specialization (Coursera)",
        "Build 3 end-to-end ML projects (Kaggle competitions)",
        "Publish 2 research papers or technical articles",
        "Contribute to ML open-source projects",
      ],
      skills: ["Python/R", "Statistics", "TensorFlow", "SQL"],
    },
    {
      title: "DevOps Engineer",
      successRate: 82,
      difficulty: "Medium",
      timeframe: "6-9 months",
      withGC: "3-4 months",
      recruiterDemand: "↑ 41% hiring increase",
      avgSalary: "$140K - $175K",
      challenges: [
        "Master cloud platforms (AWS, GCP, Azure) architecture",
        "Understand infrastructure-as-code deep concepts",
        "Rapid evolution of DevOps tools ecosystem",
      ],
      roadmap: [
        "Get AWS Solutions Architect Associate certification",
        "Master Kubernetes and Docker containerization",
        "Build 3 CI/CD pipelines for different tech stacks",
        "Contribute to DevOps tooling projects",
      ],
      skills: ["Docker", "Kubernetes", "AWS/GCP", "CI/CD", "Terraform"],
    },
    {
      title: "Solutions Architect",
      successRate: 75,
      difficulty: "Medium",
      timeframe: "8-12 months",
      withGC: "4-5 months",
      recruiterDemand: "↑ 28% hiring increase",
      avgSalary: "$160K - $210K",
      challenges: [
        "Broad technical depth across multiple domains",
        "Client communication and presentation skills",
        "Business acumen combined with technical expertise",
      ],
      roadmap: [
        "Get Solutions Architect Professional certification",
        "Design 5 enterprise architecture solutions",
        "Build soft skills in presentation and sales",
        "Develop case studies of implemented projects",
      ],
      skills: ["System Design", "Cloud Architecture", "Communication", "Business Analysis"],
    },
  ]

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? diversions.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === diversions.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border bg-gradient-to-br from-purple-500/10 via-background to-pink-500/5 px-4 py-6 sm:py-8 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
          <Link
            href="/"
            className="mb-4 sm:mb-6 inline-flex items-center text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Career Pivot Analysis</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Explore alternative career paths and your likelihood of success
          </p>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 lg:px-8 bg-blue-500/10 border-b border-blue-200 dark:border-blue-900">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 dark:text-blue-100 text-sm">
                Success Timeline with GC Services
              </p>
              <p className="text-xs text-blue-800 dark:text-blue-200 mt-1">
                See how our coaching & peer groups accelerate your career pivot journey. Compare timelines below.
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
                    {diversions.map((diversion, idx) => (
                      <div key={idx} className="w-full flex-shrink-0">
                        <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 shadow-lg">
                          <div className="p-4 sm:p-6 space-y-4">
                            <div className="mb-4 flex items-start justify-between">
                              <div>
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">{diversion.title}</h3>
                                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                                  {diversion.recruiterDemand}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">Success Rate</p>
                                <p className="text-2xl font-bold text-primary">{diversion.successRate}%</p>
                              </div>
                            </div>

                            <div>
                              <Progress value={diversion.successRate} className="h-2" />
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-muted/50 rounded-lg p-2">
                                <p className="text-muted-foreground">Standard</p>
                                <p className="font-semibold text-foreground">{diversion.timeframe}</p>
                              </div>
                              <div className="bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900 rounded-lg p-2">
                                <p className="text-emerald-700 dark:text-emerald-300 font-semibold">With GC</p>
                                <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                                  {diversion.withGC}
                                </p>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-border">
                              <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm">
                                <AlertCircle className="h-4 w-4 text-amber-500" />
                                Key Challenges
                              </h4>
                              <ul className="space-y-1">
                                {diversion.challenges.slice(0, 2).map((challenge, i) => (
                                  <li key={i} className="text-xs text-muted-foreground">
                                    • {challenge}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground text-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Your Path
                              </h4>
                              <ol className="space-y-1">
                                {diversion.roadmap.slice(0, 2).map((step, i) => (
                                  <li key={i} className="text-xs text-muted-foreground">
                                    {i + 1}. {step}
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <Button className="mt-4 w-full">Explore This Path</Button>
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
                {diversions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      idx === carouselIndex ? "bg-primary w-6" : "bg-muted w-2",
                    )}
                    aria-label={`Go to diversion ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop List */}
          <div className="md:space-y-6">
            {diversions.map((diversion, idx) => (
              <Card
                key={idx}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-0.5 bg-background/50 backdrop-blur-sm border-border/50"
              >
                <div className="p-6 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{diversion.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{diversion.recruiterDemand}</p>
                      <p className="mt-1 text-sm font-semibold text-green-600">Avg. Salary: {diversion.avgSalary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <p className="text-4xl font-bold text-primary">{diversion.successRate}%</p>
                    </div>
                  </div>

                  <div>
                    <Progress value={diversion.successRate} className="h-2" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Standard Timeline</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{diversion.timeframe}</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900 rounded-lg p-3">
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">With GC Services</p>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                        {diversion.withGC}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-2">
                        {diversion.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Your Roadmap
                      </h4>
                      <ol className="space-y-2">
                        {diversion.roadmap.map((step, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {i + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">Key Skills Required:</span> {diversion.skills.join(" • ")}
                    </p>
                  </div>

                  <Button className="w-full">Explore This Path</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
