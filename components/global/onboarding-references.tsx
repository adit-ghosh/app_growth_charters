"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

interface Reference {
  id: string
  name: string
  position: string
  company: string
  email: string
  phone: string
  relationship: string
}

interface ReferencesData {
  references: Reference[]
}

interface OnboardingReferencesProps {
  onSave: (data: ReferencesData) => void
  initialData?: ReferencesData
}

export function OnboardingReferences({ onSave, initialData }: OnboardingReferencesProps) {
  const [data, setData] = useState<ReferencesData>(
    initialData || {
      references: [],
    },
  )

  const addReference = () => {
    setData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        { id: Date.now().toString(), name: "", position: "", company: "", email: "", phone: "", relationship: "" },
      ],
    }))
  }

  const removeReference = (id: string) => {
    setData((prev) => ({
      ...prev,
      references: prev.references.filter((r) => r.id !== id),
    }))
  }

  const updateReference = (id: string, field: keyof Reference, value: string) => {
    setData((prev) => ({
      ...prev,
      references: prev.references.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Professional References</h3>
        <p className="text-sm text-muted-foreground">Add people who can vouch for your professional abilities</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Add at least 2-3 professional references</p>
          <Button onClick={addReference} variant="outline" size="sm" className="gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add Reference
          </Button>
        </div>

        {data.references.map((ref, idx) => (
          <Card key={ref.id} className="p-4 space-y-4">
            <div className="flex items-start justify-between">
              <h5 className="font-medium text-foreground">Reference {idx + 1}</h5>
              <Button
                onClick={() => removeReference(ref.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input
                  placeholder="Reference Name"
                  value={ref.name}
                  onChange={(e) => updateReference(ref.id, "name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Position *</Label>
                <Input
                  placeholder="e.g., Manager, Director"
                  value={ref.position}
                  onChange={(e) => updateReference(ref.id, "position", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company *</Label>
                <Input
                  placeholder="Company Name"
                  value={ref.company}
                  onChange={(e) => updateReference(ref.id, "company", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Relationship *</Label>
                <Input
                  placeholder="e.g., Former Manager, Colleague"
                  value={ref.relationship}
                  onChange={(e) => updateReference(ref.id, "relationship", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="reference@example.com"
                  value={ref.email}
                  onChange={(e) => updateReference(ref.id, "email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  value={ref.phone}
                  onChange={(e) => updateReference(ref.id, "phone", e.target.value)}
                />
              </div>
            </div>
          </Card>
        ))}

        {data.references.length === 0 && (
          <Card className="p-6 text-center border-dashed">
            <p className="text-muted-foreground mb-4">No references added yet</p>
            <Button onClick={addReference} variant="outline" className="gap-2 bg-transparent">
              <Plus className="w-4 h-4" />
              Add Your First Reference
            </Button>
          </Card>
        )}
      </div>

      <Button onClick={() => onSave(data)} className="w-full">
        Save References
      </Button>
    </div>
  )
}
