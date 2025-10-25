"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Corp",
    match: 92,
    description: "Lead technical initiatives and mentor junior developers",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovation Labs",
    match: 85,
    description: "Drive product strategy and cross-functional collaboration",
  },
  {
    id: 3,
    title: "Engineering Manager",
    company: "Growth Systems",
    match: 78,
    description: "Build and scale high-performing engineering teams",
  },
]

export function CareerRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Career Recommendations</CardTitle>
        <CardDescription>Roles matched to your profile</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-foreground truncate">{rec.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{rec.company}</p>
                <p className="text-xs text-muted-foreground">{rec.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{rec.match}%</div>
                  <div className="text-xs text-muted-foreground">Match</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button className="w-full bg-transparent" variant="outline">
          View All Opportunities
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
