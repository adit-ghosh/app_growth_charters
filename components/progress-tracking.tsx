"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

const milestones = [
  { id: 1, title: "Complete Leadership Course", completed: true, dueDate: "Oct 15" },
  { id: 2, title: "Lead 2 Team Projects", completed: true, dueDate: "Oct 20" },
  { id: 3, title: "Mentor 1 Junior Developer", completed: false, dueDate: "Nov 5" },
  { id: 4, title: "Present at Team Meeting", completed: false, dueDate: "Nov 10" },
]

export function ProgressTracking() {
  const completed = milestones.filter((m) => m.completed).length
  const total = milestones.length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Tracking</CardTitle>
        <CardDescription>
          {completed} of {total} milestones completed
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Overall Progress</span>
            <span>{Math.round((completed / total) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-3 pt-4">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="flex items-start gap-3">
              {milestone.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    milestone.completed ? "text-muted-foreground line-through" : "text-foreground"
                  }`}
                >
                  {milestone.title}
                </p>
                <p className="text-xs text-muted-foreground">{milestone.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
