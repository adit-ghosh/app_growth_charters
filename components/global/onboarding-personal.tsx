"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PersonalData {
  fullName: string
  email: string
  phone: string
  location: string
  linkedinUrl: string
  portfolioUrl: string
  bio: string
}

interface OnboardingPersonalProps {
  onSave: (data: PersonalData) => void
  initialData?: PersonalData
}

export function OnboardingPersonal({ onSave, initialData }: OnboardingPersonalProps) {
  const [data, setData] = useState<PersonalData>(
    initialData || {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedinUrl: "",
      portfolioUrl: "",
      bio: "",
    },
  )

  const handleChange = (field: keyof PersonalData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
        <p className="text-sm text-muted-foreground">Help us know you better</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={data.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+1 (555) 000-0000"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="City, Country"
              value={data.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
          <Input
            id="linkedinUrl"
            placeholder="https://linkedin.com/in/johndoe"
            value={data.linkedinUrl}
            onChange={(e) => handleChange("linkedinUrl", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="portfolioUrl">Portfolio/Website URL</Label>
          <Input
            id="portfolioUrl"
            placeholder="https://johndoe.com"
            value={data.portfolioUrl}
            onChange={(e) => handleChange("portfolioUrl", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <textarea
            id="bio"
            placeholder="Tell us about yourself..."
            value={data.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
          />
        </div>
      </div>

      <Button onClick={() => onSave(data)} className="w-full">
        Save Personal Info
      </Button>
    </div>
  )
}
