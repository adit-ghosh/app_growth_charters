"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, BookOpen, Briefcase, Award, Zap } from "lucide-react"

export function CareerRoadmap() {
  const streams = [
    {
      name: "Technology",
      icon: Briefcase,
      paths: [
        {
          title: "Software Engineer",
          level: "Entry → Senior",
          duration: "5-10 years",
          skills: ["Programming", "System Design", "Leadership"],
          insight: "85% of candidates reach Senior level. GC coaching speeds this by 2 years.",
        },
        {
          title: "DevOps Engineer",
          level: "Entry → Lead",
          duration: "4-8 years",
          skills: ["Cloud", "Infrastructure", "Automation"],
          insight: "Highest demand role. Companies actively recruiting DevOps experts.",
        },
        {
          title: "Tech Lead",
          level: "Mid → Senior",
          duration: "3-7 years",
          skills: ["Architecture", "Mentoring", "Strategy"],
          insight: "Requires strong foundation. Build this pathway with goal tracking.",
        },
      ],
    },
    {
      name: "Business",
      icon: Award,
      paths: [
        {
          title: "Product Manager",
          level: "Entry → Director",
          duration: "5-10 years",
          skills: ["Strategy", "Analytics", "Leadership"],
          insight: "Competitive role. Join peer groups to stand out from other candidates.",
        },
        {
          title: "Business Analyst",
          level: "Entry → Senior",
          duration: "4-8 years",
          skills: ["Analysis", "Communication", "Problem Solving"],
          insight: "Great entry point. 72% make successful transition from tech.",
        },
        {
          title: "Consultant",
          level: "Mid → Partner",
          duration: "5-12 years",
          skills: ["Strategy", "Client Management", "Industry Knowledge"],
          insight: "Requires diverse experience. Plan your journey with GC roadmap.",
        },
      ],
    },
    {
      name: "Data Science",
      icon: BookOpen,
      paths: [
        {
          title: "Data Scientist",
          level: "Entry → Senior",
          duration: "4-8 years",
          skills: ["ML", "Statistics", "Programming"],
          insight: "High growth potential. AI coaching helps master ML frameworks faster.",
        },
        {
          title: "ML Engineer",
          level: "Entry → Lead",
          duration: "5-10 years",
          skills: ["Deep Learning", "Production ML", "Optimization"],
          insight: "Production ML is in high demand. Only 15% reach this level.",
        },
        {
          title: "Analytics Engineer",
          level: "Entry → Senior",
          duration: "3-7 years",
          skills: ["SQL", "Analytics", "Data Modeling"],
          insight: "Fastest growing role. Demand up 40% YoY across tech companies.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-br from-primary/5 to-accent/5 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Growth Map</h1>
          <p className="mt-2 text-muted-foreground">
            Explore career paths across different streams with market insights
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="Technology" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {streams.map((stream) => (
                <TabsTrigger key={stream.name} value={stream.name}>
                  {stream.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {streams.map((stream) => (
              <TabsContent key={stream.name} value={stream.name} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {stream.paths.map((path, idx) => (
                    <Card key={idx} className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{path.level}</p>
                      <p className="mt-1 text-xs text-muted-foreground">~{path.duration}</p>
                      <div className="mt-4 flex-1">
                        <p className="text-xs font-semibold text-muted-foreground">Key Skills</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {path.skills.map((skill, i) => (
                            <span key={i} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 bg-blue-500/10 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-700 dark:text-blue-300">{path.insight}</p>
                        </div>
                      </div>
                      <Button className="mt-4 w-full bg-transparent" variant="outline">
                        Learn More
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
