"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
    <main className="min-h-screen bg-gradient-to-br from-[#f3f6f5] via-[#f8faf9] to-[#eef2f0] flex flex-col lg:flex-row">
      {/* ---------- SIDEBAR (Laptop/Desktop Only) ---------- */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-white/90 border-r border-[#2f5f38]/10 backdrop-blur-md p-6 shadow-[0_0_40px_-20px_rgba(47,95,56,0.2)]">
        <div>
          <h2 className="text-lg font-bold text-[#2f5f38] mb-1">Growth Charter</h2>
          <p className="text-sm text-[#3b7546]/80 mb-6">AI Employability Onboarding</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-2 rounded-full bg-[#2f5f38]/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#2f5f38] to-[#3b7546] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs mt-2 text-[#3b7546]/70">{progress}% complete</p>
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
                    ? "bg-[#2f5f38]/10 text-[#2f5f38] shadow-inner border border-[#2f5f38]/20"
                    : "text-[#3b7546]/80 hover:bg-[#2f5f38]/5"
                )}
              >
                <div
                  className={cn(
                    "h-6 w-6 grid place-items-center rounded-md transition-all",
                    active
                      ? "bg-[#2f5f38] text-white"
                      : "bg-[#2f5f38]/10 text-[#3b7546]"
                  )}
                >
                  {s.icon}
                </div>
                <span className="font-medium text-sm">{s.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto p-4 bg-[#f8faf9] border border-[#2f5f38]/10 rounded-2xl shadow-inner">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#2f5f38]" />
            <p className="text-sm font-medium text-[#2f5f38]">AI Tip</p>
          </div>
          <p className="text-xs text-[#3b7546]/80 leading-relaxed">
            Uploading a resume + adding LinkedIn boosts your accuracy and score significantly.
          </p>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="flex-1 flex flex-col items-center py-6 sm:py-10 px-3 sm:px-6">
        {/* Progress bar (visible on mobile & tablet) */}
        <div className="lg:hidden relative w-full max-w-3xl h-2 mb-6 sm:mb-8 rounded-full overflow-hidden bg-[#2f5f38]/10 shadow-inner">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#3b7546] via-[#2f5f38] to-[#3b7546] animate-wave"
            style={{
              width: `${progress}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />
        </div>

        {/* Card */}
        <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_60px_-10px_rgba(47,95,56,0.15)] border border-[#2f5f38]/10 overflow-hidden transition-all duration-700">
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
                className="w-full sm:w-auto gap-2 text-[#2f5f38] border-[#2f5f38]/30 hover:bg-[#2f5f38]/5"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              {step !== "evaluate" ? (
                <Button
                  onClick={goNext}
                  className="w-full sm:w-auto gap-2 bg-[#2f5f38] hover:bg-[#3b7546] shadow-lg hover:shadow-[#2f5f38]/30 transition-all"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="w-full sm:w-auto gap-2 bg-[#2f5f38] hover:bg-[#3b7546] shadow-lg hover:shadow-[#2f5f38]/30 transition-all"
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
      <h2 className="text-2xl font-semibold text-[#2f5f38] mb-2">Resume Overview</h2>
      <p className="text-gray-600 mb-6 text-sm">
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
            className="border-2 border-dashed border-[#2f5f38]/30 rounded-lg p-6 text-center cursor-pointer hover:border-[#2f5f38]/50 hover:bg-[#2f5f38]/5 transition-all"
          >
            <UploadCloud className="w-8 h-8 text-[#2f5f38] mx-auto mb-2" />
            <p className="text-[#2f5f38] font-medium mb-1">Upload Resume</p>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
          </div>
        ) : (
          <div className="border border-[#2f5f38]/20 rounded-lg p-4 bg-[#2f5f38]/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#2f5f38]" />
                <div>
                  <p className="font-medium text-[#2f5f38]">{uploadedFile.name}</p>
                  <p className="text-xs text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="text-gray-400 hover:text-red-500 transition-colors"
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
          icon={<Linkedin className="w-4 h-4 text-[#2f5f38]" />}
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
      <h2 className="text-2xl font-semibold text-[#2f5f38] mb-2">Education</h2>
      <p className="text-gray-600 mb-6 text-sm">
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
      <h2 className="text-2xl font-semibold text-[#2f5f38] mb-2">Experience & Skills</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Add your top projects, work experience, and technical strengths.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Input label="Company" placeholder="TechCorp Pvt. Ltd." />
        <Input label="Role" placeholder="Frontend Developer" />
        <Input label="Duration" placeholder="Jan 2023 - Present" />
        <Input label="Project" placeholder="Built AI-powered Resume Analyzer" />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Skills</label>
        <div className="flex gap-2 mt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addSkill())
            }
            placeholder="Type a skill and press Enter"
            className="flex-1 border border-[#2f5f38]/30 rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f5f38]/40"
          />
          <Button onClick={addSkill} className="bg-[#2f5f38] hover:bg-[#3b7546]">
            Add
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[#2f5f38]/10 text-[#2f5f38] text-sm flex items-center gap-1"
            >
              {s}
              <button
                onClick={() => setSkills(skills.filter((x) => x !== s))}
                className="hover:text-[#183a24]"
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
      <h2 className="text-2xl font-semibold text-[#2f5f38] mb-2">
        AI Evaluation
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Analyzing your profile and generating your employability score...
      </p>

      {!done ? (
        <div className="border rounded-xl p-6 bg-white/70 text-center">
          <Cpu className="w-8 h-8 text-[#2f5f38] mx-auto mb-3 animate-pulse" />
          <p className="text-sm text-gray-700 mb-3">
            Scanning your resume, skills, and data consistency...
          </p>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3b7546] to-[#2f5f38] animate-wave"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 bg-white/80 text-center shadow-[0_10px_40px_-20px_rgba(47,95,56,0.2)]">
            <p className="text-xs text-gray-500 mb-1">Employability Score</p>
            <div className="text-5xl font-bold text-[#2f5f38]">{score}</div>
            <p className="text-sm text-gray-600 mt-2">Out of 100</p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/80">
            <p className="text-xs text-gray-500 mb-2 font-medium">AI Insights</p>
            <ul className="space-y-2 text-sm text-gray-700">
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
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center gap-2 border border-[#2f5f38]/20 rounded-lg px-3 h-11 bg-white focus-within:ring-2 focus-within:ring-[#2f5f38]/40">
        {icon}
        <input
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
        />
      </div>
    </div>
  )
}

function AIHint({ text }: any) {
  return (
    <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#f8faf9] to-white border border-[#2f5f38]/10 shadow-inner">
      <p className="text-sm font-medium text-[#2f5f38] mb-1">AI Insight</p>
      <p className="text-xs text-gray-600">{text}</p>
    </div>
  )
}
