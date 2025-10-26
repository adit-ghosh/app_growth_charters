"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Growth Charter</h1>
            <p className="text-muted-foreground">Choose your account type</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => router.push("/login/individual")}
              size="lg"
              className="w-full h-12 text-base font-semibold"
            >
              An Individual
            </Button>

            <Button
              onClick={() => router.push("/login/organization")}
              size="lg"
              variant="outline"
              className="w-full h-12 text-base font-semibold"
            >
              An Organization
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            We're currently focusing on individual growth. Organization features coming soon!
          </p>
        </div>
      </Card>
    </div>
  )
}
