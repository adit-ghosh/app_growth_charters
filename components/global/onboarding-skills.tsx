"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, X } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  startDate: string
  endDate: string
  projectUrl: string
  githubUrl: string
}

interface WorkExperience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  currentlyWorking: boolean
}

interface SkillsData {
  skills: string[]
  projects: Project[]
  workExperience: WorkExperience[]
}

interface OnboardingSkillsProps {
  onSave: (data: SkillsData) => void
  initialData?: SkillsData
}

export function OnboardingSkills({ onSave, initialData }: OnboardingSkillsProps) {
  const [data, setData] = useState<SkillsData>(
    initialData || {
      skills: [],
      projects: [],
      workExperience: [],
    },
  )
  const [skillInput, setSkillInput] = useState("")

  const addSkill = () => {
    if (skillInput.trim()) {
      setData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }))
      setSkillInput("")
    }
  }

  const removeSkill = (index: number) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addProject = () => {
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now().toString(),
          title: "",
          description: "",
          technologies: [],
          startDate: "",
          endDate: "",
          projectUrl: "",
          githubUrl: "",
        },
      ],
    }))
  }

  const removeProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }))
  }

  const addWorkExperience = () => {
    setData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          description: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
        },
      ],
    }))
  }

  const removeWorkExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((w) => w.id !== id),
    }))
  }

  const updateWorkExperience = (id: string, field: keyof WorkExperience, value: string | boolean) => {
    setData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((w) => (w.id === id ? { ...w, [field]: value } : w)),
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Skills & Experience</h3>
        <p className="text-sm text-muted-foreground">Showcase your projects, work experience, and technical skills</p>
      </div>

      {/* Skills Section */}
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Technical Skills</h4>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., React, Python, AWS"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
          />
          <Button onClick={addSkill} variant="outline">
            Add
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
              <span className="text-sm font-medium">{skill}</span>
              <button onClick={() => removeSkill(idx)} className="hover:opacity-70">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Work Experience</h4>
          <Button onClick={addWorkExperience} variant="outline" size="sm" className="gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add Experience
          </Button>
        </div>

        {data.workExperience.map((exp, idx) => (
          <Card key={exp.id} className="p-4 space-y-4">
            <div className="flex items-start justify-between">
              <h5 className="font-medium text-foreground">Experience {idx + 1}</h5>
              <Button
                onClick={() => removeWorkExperience(exp.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Company *</Label>
                <Input
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={(e) => updateWorkExperience(exp.id, "company", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Position *</Label>
                <Input
                  placeholder="Job Title"
                  value={exp.position}
                  onChange={(e) => updateWorkExperience(exp.id, "position", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <textarea
                placeholder="Describe your responsibilities and achievements..."
                value={exp.description}
                onChange={(e) => updateWorkExperience(exp.id, "description", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => updateWorkExperience(exp.id, "startDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  disabled={exp.currentlyWorking}
                  value={exp.endDate}
                  onChange={(e) => updateWorkExperience(exp.id, "endDate", e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`currently-${exp.id}`}
                checked={exp.currentlyWorking}
                onChange={(e) => updateWorkExperience(exp.id, "currentlyWorking", e.target.checked)}
                className="w-4 h-4 rounded border-input"
              />
              <Label htmlFor={`currently-${exp.id}`} className="font-normal cursor-pointer">
                I currently work here
              </Label>
            </div>
          </Card>
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Projects</h4>
          <Button onClick={addProject} variant="outline" size="sm" className="gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>

        {data.projects.map((project, idx) => (
          <Card key={project.id} className="p-4 space-y-4">
            <div className="flex items-start justify-between">
              <h5 className="font-medium text-foreground">Project {idx + 1}</h5>
              <Button
                onClick={() => removeProject(project.id)}
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Project Title *</Label>
              <Input
                placeholder="Project Name"
                value={project.title}
                onChange={(e) => updateProject(project.id, "title", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <textarea
                placeholder="Describe your project..."
                value={project.description}
                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project URL</Label>
                <Input
                  placeholder="https://..."
                  value={project.projectUrl}
                  onChange={(e) => updateProject(project.id, "projectUrl", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>GitHub URL</Label>
                <Input
                  placeholder="https://github.com/..."
                  value={project.githubUrl}
                  onChange={(e) => updateProject(project.id, "githubUrl", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={project.startDate}
                  onChange={(e) => updateProject(project.id, "startDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={project.endDate}
                  onChange={(e) => updateProject(project.id, "endDate", e.target.value)}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={() => onSave(data)} className="w-full">
        Save Skills & Experience
      </Button>
    </div>
  )
}
