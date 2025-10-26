"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard-overview"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    // For now, we'll allow access to dashboard
    // In production, implement proper auth check
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      // Uncomment to redirect to login
      // router.push('/login')
    }
  }, [router])

  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}
