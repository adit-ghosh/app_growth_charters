"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/base/card";
import { Button } from "@/components/base/button";
import { ThemeToggle } from "@/components/base/theme-toggle";
import { cn } from "@/lib/utils";
import {
  User,
  Pencil,
  MapPin,
  Briefcase,
  Stars,
  X,
  Settings,
  LogOut,
  Crown,
  Plus,
  Key,
  Check,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types and Defaults */
/* -------------------------------------------------------------------------- */
type ProfileData = {
  fullName?: string;
  headline?: string;
  location?: string;
  email?: string;
  linkedin?: string;
  bannerUrl?: string;
  avatarUrl?: string;
  education?: Array<{ degree: string; institution: string; field?: string; gpa?: string }>;
  experience?: Array<{ company: string; role: string; duration?: string; project?: string }>;
  skills?: string[];
};

type AccountSettings = {
  email: string;
  phone: string;
  notifications: { email: boolean; push: boolean; marketing: boolean };
  privacy: { profileVisible: boolean; showEmail: boolean; showPhone: boolean };
  security: { twoFactor: boolean; lastPasswordChange: string };
};

const DEFAULT_PROFILE: ProfileData = {
  fullName: "",
  headline: "",
  location: "",
  email: "",
  linkedin: "",
  bannerUrl: "",
  avatarUrl: "",
  education: [],
  experience: [],
  skills: [],
};

const DEFAULT_SETTINGS: AccountSettings = {
  email: "",
  phone: "",
  notifications: { email: true, push: true, marketing: false },
  privacy: { profileVisible: true, showEmail: false, showPhone: false },
  security: { twoFactor: false, lastPasswordChange: "Never" },
};

/* -------------------------------------------------------------------------- */
/* Main Component */
/* -------------------------------------------------------------------------- */
export default function UserDashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE);
  const [settings, setSettings] = useState<AccountSettings>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<"overview" | "resume" | "settings">("overview");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [modal, setModal] = useState<null | "personal" | "skills">(null);

  /* Load & Save Data */
  useEffect(() => {
    try {
      const p = localStorage.getItem("profile_data");
      const s = localStorage.getItem("account_settings");
      if (p) setProfile(JSON.parse(p));
      if (s) setSettings(JSON.parse(s));
    } catch { }
  }, []);

  useEffect(() => localStorage.setItem("profile_data", JSON.stringify(profile)), [profile]);
  useEffect(() => localStorage.setItem("account_settings", JSON.stringify(settings)), [settings]);

  const completion = useMemo(() => {
    const checks: Array<[boolean, number]> = [
      [!!profile.fullName, 10],
      [!!profile.headline, 10],
      [!!profile.location, 5],
      [!!profile.email, 5],
      [!!profile.linkedin, 5],
      [!!(profile.education && profile.education.length), 10],
      [!!(profile.experience && profile.experience.length), 15],
      [!!(profile.skills && profile.skills.length >= 5), 15],
    ];
    return Math.min(100, checks.reduce((s, [ok, v]) => s + (ok ? v : 0), 0));
  }, [profile]);

  const savePartial = (partial: Partial<ProfileData>) => setProfile((p) => ({ ...p, ...partial }));
  const saveSettings = (newSettings: Partial<AccountSettings>) => setSettings((s) => ({ ...s, ...newSettings }));

  const exportData = () => {
    const data = { profile, settings, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "growth-charter-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const deleteAccount = () => {
    localStorage.clear();
    router.push("/");
  };

  const downloadResume = (format: "pdf" | "docx" | "txt") => {
    const content = `${profile.fullName || "Your Name"}\n${profile.headline || ""}\n\nContact: ${profile.email || ""}\nLocation: ${profile.location || ""}\nLinkedIn: ${profile.linkedin || ""}\n\nSkills: ${profile.skills?.join(", ") || ""}`;
    const blob = new Blob([content], {
      type:
        format === "pdf"
          ? "application/pdf"
          : format === "docx"
            ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            : "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resume.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ---------------------------------------------------------------------- */
  return (
    <main className="min-h-screen relative bg-background grid-bg">
      {/* Animated gradient glow effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Growth Charter</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">Your Professional Profile</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={() => router.push("/")} size="sm" variant="outline" className="gap-1 text-xs sm:text-sm">
              Dashboard
            </Button>
            <Button onClick={() => router.push("/pricing")} size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-xs sm:text-sm">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4" /> Pricing
            </Button>
            <Button variant="outline" onClick={() => router.push("/")} size="sm" className="gap-1 text-xs sm:text-sm">
              <LogOut className="w-3 h-3 sm:w-4 sm:h-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-card/80 backdrop-blur-md border-b border-border sticky top-[73px] sm:top-[81px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1">
          {[
            { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
            { id: "resume", label: "Resume & Skills", icon: <Briefcase className="w-4 h-4" /> },
            { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {activeTab === "overview" && (
          <OverviewTab profile={profile} completion={completion} setModal={setModal} savePartial={savePartial} />
        )}
        {activeTab === "resume" && <ResumeTab profile={profile} onDownload={downloadResume} />}
        {activeTab === "settings" && (
          <SettingsTab settings={settings} saveSettings={saveSettings} exportData={exportData} setShowDeleteConfirm={setShowDeleteConfirm} />
        )}
      </div>

      {/* Modals */}
      {modal && (
        <Modal title={modal === "personal" ? "Edit Personal Info" : "Edit Skills"} onClose={() => setModal(null)}>
          {modal === "personal" ? (
            <PersonalModal profile={profile} onSave={savePartial} onClose={() => setModal(null)} />
          ) : (
            <SkillsModal profile={profile} onSave={savePartial} onClose={() => setModal(null)} />
          )}
        </Modal>
      )}

      {/* Delete Confirm */}
      {showDeleteConfirm && (
        <Modal title="Delete Account" danger onClose={() => setShowDeleteConfirm(false)}>
          <p className="text-gray-600 mb-4">
            This action cannot be undone. All your data will be permanently deleted.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setShowDeleteConfirm(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={deleteAccount} className="flex-1 bg-red-600 hover:bg-red-700">
              Delete Account
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Components */
/* -------------------------------------------------------------------------- */

function OverviewTab({ profile, completion, setModal, savePartial }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-6">
      {/* Banner */}
      <Card className="overflow-hidden relative bg-card/50 backdrop-blur-sm border-border">
        {/* Banner Image */}
        <div className="h-32 sm:h-40 bg-gradient-to-r from-primary to-secondary relative">
          {profile.bannerUrl && (
            <img
              src={profile.bannerUrl}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="absolute bottom-2 right-2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs text-foreground hover:bg-background transition-colors"
          >
            <ImageIcon className="w-3 h-3 inline mr-1" /> Change Banner
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              e.target.files?.[0] &&
              savePartial({ bannerUrl: URL.createObjectURL(e.target.files[0]) })
            }
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 relative">
          {/* Avatar overlapping banner */}
          <div className="absolute -top-10 left-6">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden ring-4 ring-background shadow-lg bg-card flex items-center justify-center">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  className="h-full w-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Profile Text */}
          <div className="flex flex-col sm:flex-row gap-4 pl-28 sm:pl-32 pt-[-240px]">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">
                {profile.fullName || "Your Name"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {profile.headline || "Add a professional headline"}
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2">
                {profile.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {profile.location}
                  </span>
                )}
                {profile.linkedin && (
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> {profile.linkedin}
                  </span>
                )}
                {profile.email && <span>{profile.email}</span>}
              </div>
              <Button
                onClick={() => setModal("personal")}
                size="sm"
                variant="outline"
                className="mt-3"
              >
                <Pencil className="w-4 h-4 mr-1" /> Edit Profile
              </Button>
            </div>
          </div>

          {/* Completion Bar */}
          <div className="mt-2">
            <div className="flex justify-between text-sm mb-1 text-foreground">
              <span>Profile Completion</span>
              <span>{completion}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${completion}%` }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Skills, Education, Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5 bg-card/50 backdrop-blur-sm border-border">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Stars className="w-4 h-4" /> Skills
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setModal("skills")}>
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          {profile.skills?.length ? (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {s}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Add your top skills</p>
          )}
        </Card>

        <Card className="p-5 md:col-span-2 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Experience
          </h3>
          {profile.experience?.length ? (
            <div className="space-y-2">
              {profile.experience.map((ex: { company: string; role: string; duration?: string; project?: string }, i: number) => (
                <div key={i} className="p-3 border border-border rounded-lg bg-card/70 backdrop-blur-sm">
                  <p className="font-medium text-foreground text-sm">
                    {ex.role} — {ex.company}
                  </p>
                  <p className="text-xs text-muted-foreground">{ex.duration}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Add your experience</p>
          )}
        </Card>
      </div>
    </div>
  );
}

/* Modals */
function Modal({ title, children, onClose, danger }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn("text-lg font-semibold", danger ? "text-red-600" : "text-foreground")}>{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

function PersonalModal({ profile, onSave, onClose }: any) {
  const [data, setData] = useState({
    fullName: profile.fullName || "",
    headline: profile.headline || "",
    location: profile.location || "",
    email: profile.email || "",
    linkedin: profile.linkedin || "",
  });
  return (
    <div className="space-y-4">
      {Object.keys(data).map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-foreground mb-1 capitalize">
            {field.replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type="text"
            value={data[field as keyof typeof data]}
            onChange={(e) => setData({ ...data, [field]: e.target.value })}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>
      ))}
      <div className="flex gap-2 pt-2">
        <Button onClick={() => { onSave(data); onClose(); }} className="flex-1 bg-primary hover:bg-primary/90">
          Save
        </Button>
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}

function SkillsModal({ profile, onSave, onClose }: any) {
  const [skills, setSkills] = useState(profile.skills || []);
  const [skillInput, setSkillInput] = useState("");
  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#1b4332]"
          placeholder="Add a skill"
          onKeyDown={(e) => e.key === "Enter" && addSkill()}
        />
        <Button size="sm" onClick={addSkill}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
        {skills.map((skill: string, i: number) => (
          <span key={i} className="px-2 py-1 bg-[#e9f5ef] text-[#1b4332] rounded-full text-sm flex items-center gap-1">
            {skill}
            <button onClick={() => setSkills(skills.filter((s: string) => s !== skill))}>
              <X className="w-3 h-3 text-red-500" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-2">
        <Button onClick={() => { onSave({ skills }); onClose(); }} className="flex-1 bg-[#1b4332] hover:bg-[#2d6a4f]">
          Save
        </Button>
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}

/* Resume and Settings Tabs (from previous) */
function ResumeTab({ profile, onDownload }: any) {
  return (
    <div className="space-y-8">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Resume Builder</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-foreground mb-3">Download Options</h3>
            <Button onClick={() => onDownload("pdf")} className="w-full mb-2 bg-primary hover:bg-primary/90">
              Download PDF
            </Button>
            <Button onClick={() => onDownload("docx")} variant="outline" className="w-full mb-2">
              Download DOCX
            </Button>
            <Button onClick={() => onDownload("txt")} variant="outline" className="w-full">
              Download TXT
            </Button>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-3">ATS Optimization</h3>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-foreground">ATS Score: 85%</span>
              </div>
              <p className="text-xs text-muted-foreground">Your resume is well-optimized for job screening systems.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Skill Recommendations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {["Cloud Computing", "Data Analysis", "Project Management", "UI/UX Design"].map((skill) => (
            <div key={skill} className="flex items-center justify-between bg-muted/50 p-3 rounded-md">
              <span className="text-foreground">{skill}</span>
              <Button size="sm" variant="outline" className="text-xs">
                <Plus className="w-3 h-3 mr-1" /> Add
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function SettingsTab({ settings, saveSettings, exportData, setShowDeleteConfirm }: any) {
  return (
    <div className="space-y-8">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Account Information</h3>
        <div className="space-y-4">
          <input
            type="email"
            value={settings.email}
            onChange={(e) => saveSettings({ email: e.target.value })}
            placeholder="Email"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary text-foreground"
          />
          <input
            type="tel"
            value={settings.phone}
            onChange={(e) => saveSettings({ phone: e.target.value })}
            placeholder="Phone"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>
      </Card>

      <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Privacy & Security</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">Enable 2FA</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => saveSettings({ security: { ...settings.security, twoFactor: !settings.security.twoFactor } })}
            className="text-xs"
          >
            {settings.security.twoFactor ? <Check className="w-4 h-4 mr-1" /> : <Key className="w-4 h-4 mr-1" />}
            {settings.security.twoFactor ? "Enabled" : "Enable"}
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Data Management</h3>
        <div className="flex gap-4">
          <Button onClick={exportData} className="flex-1 bg-primary hover:bg-primary/90">
            Export Data
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowDeleteConfirm(true)}
            className="flex-1 text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}
