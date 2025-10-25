"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Zap } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "achievement",
    title: "Earned 'Team Player' Badge",
    description: "Recognized for exceptional collaboration",
    timestamp: "2 hours ago",
    icon: Award,
  },
  {
    id: 2,
    type: "learning",
    title: "Completed 'Advanced Leadership' Course",
    description: "Finished module 5 of 8",
    timestamp: "1 day ago",
    icon: BookOpen,
  },
  {
    id: 3,
    type: "network",
    title: "Connected with 3 New Professionals",
    description: "Expanded your professional network",
    timestamp: "2 days ago",
    icon: Users,
  },
  {
    id: 4,
    type: "skill",
    title: "Skill Assessment: Communication +5",
    description: "Your communication score improved",
    timestamp: "3 days ago",
    icon: Zap,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your growth journey updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm">{activity.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
