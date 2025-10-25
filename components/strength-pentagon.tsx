"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"

const data = [
  { category: "Leadership", value: 85 },
  { category: "Technical", value: 78 },
  { category: "Communication", value: 82 },
  { category: "Problem Solving", value: 88 },
  { category: "Collaboration", value: 75 },
]

export function StrengthPentagon() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Strength Pentagon</CardTitle>
        <CardDescription>Your core competency profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis dataKey="category" tick={{ fill: "var(--color-foreground)", fontSize: 12 }} />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
              />
              <Radar
                name="Score"
                dataKey="value"
                stroke="var(--color-primary)"
                fill="var(--color-primary)"
                fillOpacity={0.25}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border">
          {data.map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{item.category}</span>
              <span className="font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
