"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Trophy } from "lucide-react"

export function GroupCompetition() {
  const groups = [
    {
      name: "TechPath Achievers",
      members: 24,
      avgScore: 76,
      yourRank: 3,
      topSkills: ["Python", "System Design", "Cloud"],
    },
    {
      name: "Product Manager Collective",
      members: 18,
      avgScore: 72,
      yourRank: 5,
      topSkills: ["Product Strategy", "Analytics", "Leadership"],
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Your Growth Groups</h3>
        <Button size="sm" variant="outline">
          Join New Group
        </Button>
      </div>
      <div className="space-y-3">
        {groups.map((group) => (
          <Card key={group.name} className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  {group.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{group.members} members</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Trophy className="w-4 h-4" />
                  Rank #{group.yourRank}
                </div>
                <p className="text-xs text-muted-foreground">Avg score: {group.avgScore}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {group.topSkills.map((skill) => (
                <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
