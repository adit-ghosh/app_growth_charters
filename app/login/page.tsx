"use client"

import { useState, useRef } from "react"
import { ArrowLeft, Building2, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ThemeToggle } from "@/components/base/theme-toggle"
import gc_logo from "@/public/gc_logo.svg"

export default function LoginPage() {
  const [state, setState] = useState<"default" | "to-org" | "to-ind" | "left-minimized">("default")
  const [mobileView, setMobileView] = useState<"individual" | "form" | "organization">("individual")

  return (
    <main className="min-h-screen relative bg-background grid-bg flex items-center justify-center p-6">
      {/* Animated gradient glow effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="relative w-full max-w-5xl bg-card/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-border z-10">

        {/* =================== DESKTOP + TABLET =================== */}
        <div className="hidden md:flex h-[640px] lg:h-[680px] relative overflow-hidden transition-all duration-700">
          {/* ---- COMPONENT 2 ---- */}
          <section
            className={[
              "relative w-1/2 bg-gradient-to-br from-primary to-secondary text-primary-foreground flex flex-col justify-center p-8 md:p-6 lg:p-12 transition-transform duration-700 ease-[cubic-bezier(.25,1,.5,1)]",
              state === "to-org" ? "translate-x-full" : "translate-x-0",
            ].join(" ")}
          >
            <Image src={gc_logo} alt="Growth Charter Logo" className="ml-[-35px] h-42 w-63 rounded-sm brightness-0 invert dark:brightness-0 dark:invert" />
            <p className="text-base lg:text-lg opacity-90 mb-6 lg:mb-8">
              Your personal career growth companion. Track progress, get AI insights, and unlock opportunities.
            </p>
            <ul className="space-y-1.5 lg:space-y-2 text-sm opacity-90">
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-primary-foreground rounded-full" /> AI-powered career recommendations
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-primary-foreground rounded-full" /> Skill tracking and development
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-primary-foreground rounded-full" /> Personalized growth insights
              </li>
            </ul>
          </section>

          {/* ---- COMPONENT 1 ---- */}
          <section
            className={[
              "relative z-20 w-1/2 p-10 lg:p-12 md:p-8 flex flex-col items-center justify-center text-center",
              "transition-transform duration-700 ease-[cubic-bezier(.68,-0.55,.27,1.55)] origin-top",
              state === "left-minimized" ? "-translate-y-[200px] scale-[.85]" : "",
              state === "to-org" ? "opacity-0 pointer-events-none" : "opacity-100",
            ].join(" ")}
          >
            <User className="w-16 h-16 lg:w-20 lg:h-20 text-primary mb-5" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Individual</h2>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm lg:text-base">
              Track your personal career growth, get AI recommendations, and unlock new opportunities.
            </p>
            <button
              onClick={() => setState("left-minimized")}
              className="w-full max-w-xs rounded-full bg-primary text-primary-foreground py-2.5 lg:py-3 font-semibold mb-2 hover:bg-primary/90 transition text-sm lg:text-base"
            >
              Continue as Individual
            </button>
            <button
              onClick={() => setState("to-org")}
              className="text-xs lg:text-sm text-muted-foreground underline hover:text-foreground"
            >
              or continue as an organization
            </button>
          </section>

          {/* ---- COMPONENT 4 ---- */}
          <section
            className={[
              "absolute right-0 top-0 h-full w-1/2 bg-card flex flex-col items-center justify-center text-center p-8 lg:p-12 md:p-6",
              "transition-all duration-700 ease-out",
              state === "left-minimized"
                ? "opacity-100 translate-y-0 z-30 pointer-events-auto"
                : "opacity-0 translate-y-10 -z-10 pointer-events-none",
            ].join(" ")}
            style={{ transitionDelay: state === "left-minimized" ? "200ms" : "0ms" }}
          >
            <FormSection onBack={() => setState("default")} />
          </section>

          {/* ---- COMPONENT 3 ---- */}
          <section
            className={[
              "absolute left-0 top-0 h-full w-1/2 bg-card flex flex-col justify-center items-center text-center p-8 md:p-6 lg:p-12 transition-transform duration-700 ease-[cubic-bezier(.25,1,.5,1)]",
              state === "to-org" ? "translate-x-0" : "-translate-x-full",
            ].join(" ")}
          >
            <Building2 className="w-16 h-16 lg:w-20 lg:h-20 text-muted-foreground mb-5" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Organization</h2>
            <p className="text-muted-foreground mb-6 lg:mb-8 max-w-sm text-sm lg:text-base">
              Manage teams, track progress, and scale growth across your organization.
            </p>
            <button className="w-full max-w-xs rounded-full border border-border py-2.5 lg:py-3 font-semibold mb-2 lg:mb-3 text-sm lg:text-base">
              Continue as Organization
            </button>
            <p className="text-[11px] lg:text-xs text-muted-foreground mb-2 lg:mb-3">
              Coming soon! We're focusing on individual growth first.
            </p>
            <button
              onClick={() => setState("to-ind")}
              className="text-xs lg:text-sm text-muted-foreground underline hover:text-foreground"
            >
              or continue as an individual
            </button>
          </section>
        </div>

        {/* =================== MOBILE =================== */}
        <div className="md:hidden w-full max-w-sm bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden mx-auto border border-border">
          {/* Account Selection - Individual View */}
          {(mobileView === "individual" || mobileView === "organization") && (
            <div className="p-4 min-h-[500px] flex flex-col">
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-primary mb-1">Growth Charter</h1>
                <p className="text-muted-foreground text-sm">Choose your account type</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                {/* Individual Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                  mobileView === "individual" 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 -translate-y-4 absolute inset-0 pointer-events-none"
                }`}>
                  <div className="text-center space-y-5">
                    <div className="text-center">
                      <User className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-foreground mb-3">Individual</h2>
                      <p className="text-muted-foreground text-sm mb-6 px-2">
                        Track your personal career growth, get AI recommendations, and unlock new opportunities
                      </p>
                      <button
                        onClick={() => setMobileView("form")}
                        className="w-full rounded-full bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90 transition text-sm mb-4"
                      >
                        Continue as Individual
                      </button>
                      <button
                        onClick={() => setMobileView("organization")}
                        className="text-sm text-muted-foreground underline hover:text-foreground transition"
                      >
                        or continue as an organization
                      </button>
                    </div>
                  </div>
                </div>

                {/* Organization Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                  mobileView === "organization" 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}>
                  <div className="text-center space-y-5">
                    <div className="text-center">
                      <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-foreground mb-3">Organization</h2>
                      <p className="text-muted-foreground text-sm mb-6 px-2">
                        Manage teams, track progress, and scale growth across your organization
                      </p>
                      <button
                        onClick={() => setMobileView("form")}
                        className="w-full rounded-full border border-border py-3 font-semibold hover:bg-muted transition text-sm mb-2"
                      >
                        Continue as Organization
                      </button>
                      <p className="text-xs text-muted-foreground mb-4">Coming soon! We're focusing on individual growth first.</p>
                      <button
                        onClick={() => setMobileView("individual")}
                        className="text-sm text-muted-foreground underline hover:text-foreground transition"
                      >
                        or continue as an individual
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Individual Form */}
          {mobileView === "form" && (
            <div className="p-4 min-h-[580px] max-h-[90vh] overflow-y-auto">
              <FormSection onBack={() => setMobileView("individual")} isMobile />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

/* ---------- Reusable Form Section ---------- */
function FormSection({ onBack, isMobile = false }: { onBack: () => void; isMobile?: boolean }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isProcessingResume, setIsProcessingResume] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() !== "") setShowPassword(true)
  }

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      
      // Start processing
      setIsProcessingResume(true)
      
      // Store file info for processing in onboarding
      localStorage.setItem('uploadedResume', JSON.stringify({
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toISOString(),
        needsProcessing: true
      }))
      
      // Here you would typically upload the file to your server and extract text
      console.log('Resume uploaded:', file.name)
      console.log('Extracting text from resume...')
      
      // Simulate text extraction process
      setTimeout(() => {
        // Store extracted text (in real implementation, this would come from your backend)
        const mockExtractedData = {
          fullName: "John Doe",
          email: "john.doe@example.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          headline: "Senior Software Engineer",
          linkedin: "linkedin.com/in/johndoe",
          skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
          experience: [
            {
              company: "Tech Corp",
              role: "Senior Software Engineer",
              duration: "2021 - Present",
              description: "Led development of scalable web applications"
            }
          ],
          education: [
            {
              degree: "Bachelor of Science in Computer Science",
              university: "University of California",
              year: "2019"
            }
          ]
        }
        
        localStorage.setItem('extractedResumeData', JSON.stringify(mockExtractedData))
        console.log('Text extraction completed')
        
        setIsProcessingResume(false)
        
        // Redirect to onboarding page
        router.push('/signup/individual/onboarding')
      }, 2000) // Simulate processing time
    }
  }

  const triggerResumeUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <button
        onClick={onBack}
        className={`flex items-center gap-2 ${isMobile ? "text-sm mb-4" : "mb-8"} text-muted-foreground hover:text-foreground transition`}
      >
        <ArrowLeft className="w-4 h-4" /> Back to selection
      </button>

      <h3 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold text-foreground mb-2`}>Join Growth Charter</h3>
      <p className={`text-muted-foreground ${isMobile ? "mb-4" : "mb-6"}`}>Sign up to get started</p>

      {/* Email Input */}
      <form onSubmit={handleEmailSubmit} className={`flex w-full ${isMobile ? "mb-3" : "max-w-sm mb-4"}`}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 ${isMobile ? "h-[38px] px-3 text-sm" : "h-[52px] px-4"} bg-background border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground`}
          required
        />
        <button
          type="submit"
          className={`${isMobile ? "w-16 h-[38px] text-xs" : "w-24 h-[52px]"} grid place-items-center bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition font-semibold`}
        >
          {isMobile ? "→" : "Next →"}
        </button>
      </form>

      {/* Password Input */}
      <div
        className={`transition-all duration-700 ease-out ${
          showPassword ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <form onSubmit={(e) => e.preventDefault()} className={`flex w-full ${isMobile ? "mb-4" : "max-w-sm mb-6"}`}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`flex-1 ${isMobile ? "h-[38px] px-3 text-sm" : "h-[52px] px-4"} bg-background border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground`}
            required
          />
          <button
            type="submit"
            className={`${isMobile ? "w-20 h-[38px] text-xs" : "w-28 h-[52px]"} grid place-items-center bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition font-semibold`}
          >
            {isMobile ? "Submit" : "Submit →"}
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className={`relative w-full ${isMobile ? "" : "max-w-sm"} text-center text-muted-foreground text-xs ${isMobile ? "my-3" : "my-4"}`}>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border" />
        <span className="relative bg-card px-2">OR CONTINUE WITH</span>
      </div>

      {/* Social Buttons */}
      <div className={`w-full ${isMobile ? "space-y-2 mb-3" : "max-w-sm space-y-3 mb-6"}`}>
        <button className={`w-full ${isMobile ? "h-[36px] text-sm" : "h-[54px]"} border border-border rounded-lg hover:bg-muted transition flex items-center justify-center gap-2 text-foreground`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>
        
        <button className={`w-full ${isMobile ? "h-[36px] text-sm" : "h-[54px]"} border border-border rounded-lg hover:bg-muted transition flex items-center justify-center gap-2 text-foreground`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" fill="#00A4EF"/>
          </svg>
          Microsoft
        </button>
        
        <button className={`w-full ${isMobile ? "h-[36px] text-sm" : "h-[54px]"} border border-border rounded-lg hover:bg-muted transition flex items-center justify-center gap-2 text-foreground`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Apple
        </button>
      </div>

      {/* Onboarding Buttons */}
      <div className={`space-y-2 ${isMobile ? "pt-2" : "pt-4"} border-t border-border`}>
        <p className={`text-center ${isMobile ? "text-xs" : "text-sm"} font-medium text-foreground`}>Or start with onboarding</p>
        <div className={`grid grid-cols-2 gap-2 ${isMobile ? "pb-2" : ""}`}>
          <Link href="/signup/individual/onboarding">
          <button className={`border border-border rounded-lg ${isMobile ? "py-1.5 text-xs" : "py-2.5"} font-medium hover:bg-muted transition text-foreground`}>
            Manual Setup
          </button>
          </Link>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="hidden"
          />
          <button 
            onClick={triggerResumeUpload}
            disabled={isProcessingResume}
            className={`border border-border rounded-lg ${isMobile ? "py-1.5 text-xs" : "py-2.5"} font-medium hover:bg-muted transition text-foreground ${isProcessingResume ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isProcessingResume ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 border border-muted-foreground border-t-transparent rounded-full animate-spin"></div>
                {isMobile ? "Processing..." : "Processing Resume..."}
              </span>
            ) : (
              "Upload Resume"
            )}
          </button>
        
        </div>
      </div>
    </>
  )
}
