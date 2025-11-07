"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  cgpa: string
  startYear: string
  endYear: string
}

interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate: string
  credentialUrl: string
}

interface AcademicData {
  education: Education[]
  certifications: Certification[]
}

interface OnboardingAcademicProps {
  onSave: (data: AcademicData) => void
  initialData?: AcademicData
}

export function OnboardingAcademic({ onSave, initialData }: OnboardingAcademicProps) {
  const [data, setData] = useState<AcademicData>(
    initialData || {
      education: [{ id: "1", institution: "", degree: "", field: "", cgpa: "", startYear: "", endYear: "" }],
      certifications: [],
    },
  )

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now().toString(), institution: "", degree: "", field: "", cgpa: "", startYear: "", endYear: "" },
      ],
    }))
  }

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }))
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }))
  }

  const addCertification = () => {
    setData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { id: Date.now().toString(), name: "", issuer: "", issueDate: "", expiryDate: "", credentialUrl: "" },
      ],
    }))
  }

  const removeCertification = (id: string) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }))
  }

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Academic Background</h3>
        <p className="text-sm text-muted-foreground">Share your educational qualifications and certifications</p>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Education</h4>
          <Button onClick={addEducation} variant="outline" size="sm" className="gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add Education
          </Button>
        </div>

        {data.education.map((edu, idx) => (
          <Card key={edu.id} className="p-4 space-y-4">
            <div className="flex items-start justify-between">
              <h5 className="font-medium text-foreground">Education {idx + 1}</h5>
              {data.education.length > 1 && (
                <Button
                  onClick={() => removeEducation(edu.id)}
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Institution *</Label>
                <Input
                  placeholder="University Name"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Degree *</Label>
                <Select value={edu.degree} onValueChange={(value) => updateEducation(edu.id, "degree", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">Bachelor's</SelectItem>
                    <SelectItem value="master">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Field of Study *</Label>
                <Input
                  placeholder="e.g., Computer Science"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>CGPA</Label>
                <Input
                  placeholder="3.8"
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  value={edu.cgpa}
                  onChange={(e) => updateEducation(edu.id, "cgpa", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Year</Label>
                <Input
                  placeholder="2020"
                  type="number"
                  value={edu.startYear}
                  onChange={(e) => updateEducation(edu.id, "startYear", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>End Year</Label>
                <Input
                  placeholder="2024"
                  type="number"
                  value={edu.endYear}
                  onChange={(e) => updateEducation(edu.id, "endYear", e.target.value)}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Certifications</h4>
          <Button onClick={addCertification} variant="outline" size="sm" className="gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add Certification
          </Button>
        </div>

        {data.certifications.map((cert, idx) => (
          <Card key={cert.id} className="p-4 space-y-4">
            <div className="flex items-start justify-between">
              <h5 className="font-medium text-foreground">Certification {idx + 1}</h5>
              <Button
                onClick={() => removeCertification(cert.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Certification Name *</Label>
                <Input
                  placeholder="e.g., AWS Solutions Architect"
                  value={cert.name}
                  onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Issuing Organization *</Label>
                <Input
                  placeholder="e.g., Amazon Web Services"
                  value={cert.issuer}
                  onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Issue Date</Label>
                <Input
                  type="date"
                  value={cert.issueDate}
                  onChange={(e) => updateCertification(cert.id, "issueDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Expiry Date</Label>
                <Input
                  type="date"
                  value={cert.expiryDate}
                  onChange={(e) => updateCertification(cert.id, "expiryDate", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Credential URL</Label>
              <Input
                placeholder="https://..."
                value={cert.credentialUrl}
                onChange={(e) => updateCertification(cert.id, "credentialUrl", e.target.value)}
              />
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={() => onSave(data)} className="w-full">
        Save Academic Info
      </Button>
    </div>
  )
}
