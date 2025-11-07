"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/base/theme-toggle"
import { cn } from "@/lib/utils"
import {
  User, BookOpen, Briefcase, Stars, ChevronRight, ChevronLeft, Trophy, Cpu, Linkedin, Sparkles,
  UploadCloud, FileText, X
} from "lucide-react"

type Step = "overview" | "education" | "experience" | "evaluate"

export default function AIOnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>("overview")
  const [progress, setProgress] = useState(25)

  const goNext = () => {
    if (step === "overview") setStep("education"), setProgress(50)
    else if (step === "education") setStep("experience"), setProgress(75)
    else if (step === "experience") setStep("evaluate"), setProgress(100)
  }

  const goBack = () => {
    if (step === "evaluate") setStep("experience"), setProgress(75)
    else if (step === "experience") setStep("education"), setProgress(50)
    else if (step === "education") setStep("overview"), setProgress(25)
  }

  const steps = [
    { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <BookOpen className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "evaluate", label: "Evaluate", icon: <Stars className="w-4 h-4" /> },
  ]

  return (
    <main className="min-h-screen relative bg-background grid-bg flex flex-col lg:flex-row">
      {/* Animated gradient glow effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      {/* ---------- SIDEBAR (Laptop/Desktop Only) ---------- */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-card/90 border-r border-border backdrop-blur-md p-6 shadow-[0_0_40px_-20px_rgba(0,0,0,0.1)] relative z-10">
        <div>
          <h2 className="text-lg font-bold text-primary mb-1">Growth Charter</h2>
          <p className="text-sm text-muted-foreground mb-6">AI Employability Onboarding</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs mt-2 text-muted-foreground">{progress}% complete</p>
        </div>

        {/* Steps */}
        <nav className="space-y-2">
          {steps.map((s) => {
            const active = s.id === step
            return (
              <button
                key={s.id}
                onClick={() => setStep(s.id as Step)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left",
                  active
                    ? "bg-primary/10 text-primary shadow-inner border border-primary/20"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <div
                  className={cn(
                    "h-6 w-6 grid place-items-center rounded-md transition-all",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {s.icon}
                </div>
                <span className="font-medium text-sm">{s.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto p-4 bg-muted/50 border border-border rounded-2xl shadow-inner">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm font-medium text-primary">AI Tip</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Uploading a resume + adding LinkedIn boosts your accuracy and score significantly.
          </p>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="flex-1 flex flex-col items-center py-6 sm:py-10 px-3 sm:px-6 relative z-10">
        {/* Progress bar (visible on mobile & tablet) */}
        <div className="lg:hidden relative w-full max-w-3xl h-2 mb-6 sm:mb-8 rounded-full overflow-hidden bg-muted shadow-inner">
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-wave"
            style={{
              width: `${progress}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />
        </div>

        {/* Card */}
        <Card className="w-full max-w-3xl bg-card/90 backdrop-blur-md rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-border overflow-hidden transition-all duration-700">
          <div className="relative p-6 sm:p-8 md:p-10">
            <div key={step} className="animate-fade-slide">
              {step === "overview" && <ResumeOverview />}
              {step === "education" && <Education />}
              {step === "experience" && <Experience />}
              {step === "evaluate" && <Evaluation />}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <Button
                onClick={goBack}
                disabled={step === "overview"}
                variant="outline"
                className="w-full sm:w-auto gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              {step !== "evaluate" ? (
                <Button
                  onClick={goNext}
                  className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg transition-all"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => router.push("/user")}
                  className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg transition-all"
                >
                  Go to Dashboard <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </Card>
      </section>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes fade-slide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide {
          animation: fade-slide 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-wave {
          background-size: 200% 200%;
          animation: wave 3s ease infinite;
        }
      `}</style>
    </main>
  )
}

/* ---------------- Step Components ---------------- */

function ResumeOverview() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document')
        return
      }
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      
      setUploadedFile(file)
      // Here you would typically upload the file to your server
      console.log('File uploaded:', file.name)
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  const removeFile = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Resume Overview</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Upload your resume or fill the details manually to begin.
      </p>

      {/* File Upload Section */}
      <div className="mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
        
        {!uploadedFile ? (
          <div 
            onClick={triggerFileUpload}
            className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <UploadCloud className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-primary font-medium mb-1">Upload Resume</p>
            <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 5MB</p>
          </div>
        ) : (
          <div className="border border-border rounded-lg p-4 bg-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{uploadedFile.name}</p>
                  <p className="text-xs text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="text-muted-foreground hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Full Name" placeholder="Jane Doe" />
        <Input label="Headline" placeholder="Software Engineer | AI Enthusiast" />
        <Input
          label="LinkedIn"
          placeholder="linkedin.com/in/janedoe"
          icon={<Linkedin className="w-4 h-4 text-primary" />}
        />
        <Input label="Location" placeholder="Bangalore, India" />
      </div>

      <AIHint text="Resume parsing helps prefill your profile faster, reducing manual typing." />
    </div>
  )
}

function Education() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Education</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Enter your highest degree and relevant certifications.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Degree" placeholder="B.Tech / M.Sc / PhD" />
        <Input label="University" placeholder="University of Delhi" />
        <Input label="Field" placeholder="Computer Science" />
        <Input label="GPA / Percentage" placeholder="8.7 CGPA" />
      </div>

      <AIHint text="Strong academic credentials add to your employability score." />
    </div>
  )
}

function Experience() {
  const [skills, setSkills] = useState<string[]>([])
  const [input, setInput] = useState("")

  const addSkill = () => {
    if (input && !skills.includes(input.trim())) {
      setSkills([...skills, input.trim()])
      setInput("")
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Experience & Skills</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Add your top projects, work experience, and technical strengths.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Input label="Company" placeholder="TechCorp Pvt. Ltd." />
        <Input label="Role" placeholder="Frontend Developer" />
        <Input label="Duration" placeholder="Jan 2023 - Present" />
        <Input label="Project" placeholder="Built AI-powered Resume Analyzer" />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground">Skills</label>
        <div className="flex gap-2 mt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addSkill())
            }
            placeholder="Type a skill and press Enter"
            className="flex-1 bg-background border border-border rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
          <Button onClick={addSkill} className="bg-primary hover:bg-primary/90">
            Add
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center gap-1"
            >
              {s}
              <button
                onClick={() => setSkills(skills.filter((x) => x !== s))}
                className="hover:text-primary/70"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      <AIHint text="Projects and measurable skills contribute most to your employability ranking." />
    </div>
  )
}

function Evaluation() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        const np = Math.min(100, p + Math.random() * 15)
        if (np >= 100) {
          clearInterval(timer)
          setTimeout(() => setDone(true), 600)
        }
        return np
      })
    }, 300)
    return () => clearInterval(timer)
  }, [])

  const score = 85

  return (
    <div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        AI Evaluation
      </h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Analyzing your profile and generating your employability score...
      </p>

      {!done ? (
        <div className="border border-border rounded-xl p-6 bg-card/70 text-center">
          <Cpu className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
          <p className="text-sm text-foreground mb-3">
            Scanning your resume, skills, and data consistency...
          </p>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary animate-wave"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-6 bg-card/80 text-center shadow-lg">
            <p className="text-xs text-muted-foreground mb-1">Employability Score</p>
            <div className="text-5xl font-bold text-primary">{score}</div>
            <p className="text-sm text-muted-foreground mt-2">Out of 100</p>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-card/80">
            <p className="text-xs text-muted-foreground mb-2 font-medium">AI Insights</p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>✅ Balanced academic and skill distribution</li>
              <li>✅ Strong project portfolio</li>
              <li>🔹 Add certifications for higher ranking</li>
              <li>🔹 Update LinkedIn headline to improve visibility</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

/* ---------------- Reusables ---------------- */

function Input({ label, placeholder, icon }: any) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
      <div className="flex items-center gap-2 border border-border rounded-lg px-3 h-11 bg-background focus-within:ring-2 focus-within:ring-primary">
        {icon}
        <input
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground"
        />
      </div>
    </div>
  )
}

function AIHint({ text }: any) {
  return (
    <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border shadow-inner">
      <p className="text-sm font-medium text-primary mb-1">AI Insight</p>
      <p className="text-xs text-muted-foreground">{text}</p>
    </div>
  )
}
