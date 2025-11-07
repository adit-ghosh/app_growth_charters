"use client"

import { useState, useRef } from "react"
import { ArrowLeft, ArrowRight, Building2, User, Apple } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gc_logo from "@/public/gc_logo.svg"

export default function LoginPage() {
  const [state, setState] = useState<"default" | "to-org" | "to-ind" | "left-minimized">("default")
  const [mobileView, setMobileView] = useState<"individual" | "form" | "organization">("individual")

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f3f6f5] to-gray-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* =================== DESKTOP + TABLET =================== */}
        <div className="hidden md:flex h-[640px] lg:h-[680px] relative overflow-hidden transition-all duration-700">
          {/* ---- COMPONENT 2 ---- */}
          <section
            className={[
              "relative w-1/2 bg-gradient-to-br from-[#3b7546] to-[#2f5f38] text-white flex flex-col justify-center p-8 md:p-6 lg:p-12 transition-transform duration-700 ease-[cubic-bezier(.25,1,.5,1)]",
              state === "to-org" ? "translate-x-full" : "translate-x-0",
            ].join(" ")}
          >
            <Image src={gc_logo} alt="Growth Charter Logo" className="ml-[-35px] h-42 w-63 rounded-sm brightness-0 invert" />
            <p className="text-base lg:text-lg opacity-90 mb-6 lg:mb-8">
              Your personal career growth companion. Track progress, get AI insights, and unlock opportunities.
            </p>
            <ul className="space-y-1.5 lg:space-y-2 text-sm opacity-90">
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-white rounded-full" /> AI-powered career recommendations
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-white rounded-full" /> Skill tracking and development
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-white rounded-full" /> Personalized growth insights
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
            <User className="w-16 h-16 lg:w-20 lg:h-20 text-[#2f5f38] mb-5" />
            <h2 className="text-2xl lg:text-3xl font-bold text-[#2f5f38] mb-3">Individual</h2>
            <p className="text-gray-600 mb-6 max-w-sm text-sm lg:text-base">
              Track your personal career growth, get AI recommendations, and unlock new opportunities.
            </p>
            <button
              onClick={() => setState("left-minimized")}
              className="w-full max-w-xs rounded-full bg-[#2f5f38] text-white py-2.5 lg:py-3 font-semibold mb-2 hover:bg-[#2b5633] transition text-sm lg:text-base"
            >
              Continue as Individual
            </button>
            <button
              onClick={() => setState("to-org")}
              className="text-xs lg:text-sm text-gray-500 underline hover:text-gray-800"
            >
              or continue as an organization
            </button>
          </section>

          {/* ---- COMPONENT 4 ---- */}
          <section
            className={[
              "absolute right-0 top-0 h-full w-1/2 bg-white flex flex-col items-center justify-center text-center p-8 lg:p-12 md:p-6",
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
              "absolute left-0 top-0 h-full w-1/2 bg-white flex flex-col justify-center items-center text-center p-8 md:p-6 lg:p-12 transition-transform duration-700 ease-[cubic-bezier(.25,1,.5,1)]",
              state === "to-org" ? "translate-x-0" : "-translate-x-full",
            ].join(" ")}
          >
            <Building2 className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-5" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-3">Organization</h2>
            <p className="text-gray-500 mb-6 lg:mb-8 max-w-sm text-sm lg:text-base">
              Manage teams, track progress, and scale growth across your organization.
            </p>
            <button className="w-full max-w-xs rounded-full border border-[#e6e7e9] py-2.5 lg:py-3 font-semibold mb-2 lg:mb-3 text-sm lg:text-base">
              Continue as Organization
            </button>
            <p className="text-[11px] lg:text-xs text-gray-500 mb-2 lg:mb-3">
              Coming soon! We're focusing on individual growth first.
            </p>
            <button
              onClick={() => setState("to-ind")}
              className="text-xs lg:text-sm text-gray-500 underline hover:text-gray-800"
            >
              or continue as an individual
            </button>
          </section>
        </div>

        {/* =================== MOBILE =================== */}
        <div className="md:hidden w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto">
          {/* Account Selection - Individual View */}
          {(mobileView === "individual" || mobileView === "organization") && (
            <div className="p-4 min-h-[500px] flex flex-col">
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-[#2f5f38] mb-1">Growth Charter</h1>
                <p className="text-gray-600 text-sm">Choose your account type</p>
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
                      <User className="w-16 h-16 text-[#2f5f38] mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-[#2f5f38] mb-3">Individual</h2>
                      <p className="text-gray-600 text-sm mb-6 px-2">
                        Track your personal career growth, get AI recommendations, and unlock new opportunities
                      </p>
                      <button
                        onClick={() => setMobileView("form")}
                        className="w-full rounded-full bg-[#2f5f38] text-white py-3 font-semibold hover:bg-[#2b5633] transition text-sm mb-4"
                      >
                        Continue as Individual
                      </button>
                      <button
                        onClick={() => setMobileView("organization")}
                        className="text-sm text-gray-500 underline hover:text-gray-800 transition"
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
                      <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-gray-700 mb-3">Organization</h2>
                      <p className="text-gray-600 text-sm mb-6 px-2">
                        Manage teams, track progress, and scale growth across your organization
                      </p>
                      <button
                        onClick={() => setMobileView("form")}
                        className="w-full rounded-full border border-gray-300 py-3 font-semibold hover:bg-gray-50 transition text-sm mb-2"
                      >
                        Continue as Organization
                      </button>
                      <p className="text-xs text-gray-500 mb-4">Coming soon! We're focusing on individual growth first.</p>
                      <button
                        onClick={() => setMobileView("individual")}
                        className="text-sm text-gray-500 underline hover:text-gray-800 transition"
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
        className={`flex items-center gap-2 ${isMobile ? "text-sm mb-4" : "mb-8"} text-gray-500 hover:text-gray-800 transition`}
      >
        <ArrowLeft className="w-4 h-4" /> Back to selection
      </button>

      <h3 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold text-gray-900 mb-2`}>Join Growth Charter</h3>
      <p className={`text-gray-600 ${isMobile ? "mb-4" : "mb-6"}`}>Sign up to get started</p>

      {/* Email Input */}
      <form onSubmit={handleEmailSubmit} className={`flex w-full ${isMobile ? "mb-3" : "max-w-sm mb-4"}`}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 ${isMobile ? "h-[38px] px-3 text-sm" : "h-[52px] px-4"} border border-[#e6e7e9] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2f5f38]`}
          required
        />
        <button
          type="submit"
          className={`${isMobile ? "w-16 h-[38px] text-xs" : "w-24 h-[52px]"} grid place-items-center bg-[#2f5f38] text-white rounded-r-lg hover:bg-[#2b5633] transition font-semibold`}
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
            className={`flex-1 ${isMobile ? "h-[38px] px-3 text-sm" : "h-[52px] px-4"} border border-[#e6e7e9] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2f5f38]`}
            required
          />
          <button
            type="submit"
            className={`${isMobile ? "w-20 h-[38px] text-xs" : "w-28 h-[52px]"} grid place-items-center bg-[#2f5f38] text-white rounded-r-lg hover:bg-[#2b5633] transition font-semibold`}
          >
            {isMobile ? "Submit" : "Submit →"}
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className={`relative w-full ${isMobile ? "" : "max-w-sm"} text-center text-gray-400 text-xs ${isMobile ? "my-3" : "my-4"}`}>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#e6e7e9]" />
        <span className="relative bg-white px-2">OR CONTINUE WITH</span>
      </div>

      {/* Social Buttons */}
      <div className={`w-full ${isMobile ? "space-y-2 mb-3" : "max-w-sm space-y-3 mb-6"}`}>
        {["Google", "Microsoft", "Apple"].map((provider) => (
          <button
            key={provider}
            className={`w-full ${isMobile ? "h-[36px] text-sm" : "h-[54px]"} border border-[#e6e7e9] rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2`}
          >
            {provider === "Apple" ? <Apple className="w-4 h-4" /> : <span className="font-semibold">{provider[0]}</span>}
            {provider}
          </button>
        ))}
      </div>

      {/* Onboarding Buttons */}
      <div className={`space-y-2 ${isMobile ? "pt-2" : "pt-4"} border-t border-[#e6e7e9]`}>
        <p className={`text-center ${isMobile ? "text-xs" : "text-sm"} font-medium text-foreground`}>Or start with onboarding</p>
        <div className={`grid grid-cols-2 gap-2 ${isMobile ? "pb-2" : ""}`}>
          <Link href="/signup/individual/onboarding">
          <button className={`border border-[#e6e7e9] rounded-lg ${isMobile ? "py-1.5 text-xs" : "py-2.5"} font-medium hover:bg-gray-50 transition`}>
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
            className={`border border-[#e6e7e9] rounded-lg ${isMobile ? "py-1.5 text-xs" : "py-2.5"} font-medium hover:bg-gray-50 transition ${isProcessingResume ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isProcessingResume ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
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
