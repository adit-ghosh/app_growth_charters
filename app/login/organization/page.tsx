"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OrganizationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg text-center space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Organization Features</h1>
          <p className="text-muted-foreground">Coming soon! We're building organization management tools.</p>
        </div>

        <Button onClick={() => router.push("/login")} variant="outline" className="w-full">
          Back to Login
        </Button>
      </Card>
    </div>
  )
}
