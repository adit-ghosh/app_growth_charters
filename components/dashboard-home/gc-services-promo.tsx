"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Zap, BookOpen, Target, Award, Clock, TrendingUp } from "lucide-react"

export function GCServicesPromo() {
  const services = [
    {
      title: "1-on-1 AI Coaching",
      description: "Get personalized guidance from our AI coach to boost your score",
      icon: Sparkles,
      boost: "+5-8 pts/month",
      color: "from-blue-500/20 to-blue-600/20",
      users: "2,340+ users",
      successRate: "94%",
      time: "15 min/week",
      cta: "Start Coaching"
    },
    {
      title: "Growth Peer Groups", 
      description: "Join competitive growth groups and network with peers",
      icon: Users,
      boost: "+3-5 pts/month",
      color: "from-purple-500/20 to-purple-600/20",
      users: "1,850+ members",
      successRate: "88%",
      time: "2 sessions/week",
      cta: "Join Group"
    },
    {
      title: "Expert Live Coaching",
      description: "Weekly sessions with career experts and industry leaders",
      icon: Zap,
      boost: "+7-10 pts/month", 
      color: "from-amber-500/20 to-amber-600/20",
      users: "980+ coached",
      successRate: "96%",
      time: "1 hour/week",
      cta: "Book Session"
    },
    {
      title: "Skill Development Paths",
      description: "Curated learning paths to develop in-demand skills",
      icon: BookOpen,
      boost: "+4-6 pts/month",
      color: "from-emerald-500/20 to-emerald-600/20",
      users: "3,450+ learners",
      successRate: "91%",
      time: "Self-paced",
      cta: "Explore Paths"
    },
    {
      title: "Career Strategy Sessions",
      description: "Personalized career planning with certified coaches",
      icon: Target,
      boost: "+6-9 pts/month",
      color: "from-rose-500/20 to-rose-600/20", 
      users: "1,230+ planned",
      successRate: "89%",
      time: "45 min/session",
      cta: "Get Strategy"
    },
    {
      title: "Achievement Accelerator",
      description: "Structured program to fast-track your career milestones",
      icon: Award,
      boost: "+8-12 pts/month",
      color: "from-indigo-500/20 to-indigo-600/20",
      users: "650+ accelerated",
      successRate: "92%",
      time: "8 weeks program",
      cta: "Accelerate Now"
    },
  ]

  const stats = [
    { value: "2.3x", label: "Faster growth vs solo", icon: TrendingUp },
    { value: "15.8", label: "Avg monthly points gain", icon: Zap },
    { value: "94%", label: "User satisfaction", icon: Award },
    { value: "45%", label: "Time saved", icon: Clock },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Supercharge Your Growth Journey</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of professionals accelerating their careers with our proven growth services
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card key={service.title} className={`p-6 bg-gradient-to-br ${service.color} border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-background/80 group-hover:bg-background transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">{service.boost}</p>
                    <p className="text-xs text-muted-foreground">avg. boost</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-lg">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-background/50 rounded-lg">
                      <div className="font-semibold text-foreground">{service.users}</div>
                      <div className="text-muted-foreground">active</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded-lg">
                      <div className="font-semibold text-foreground">{service.successRate}</div>
                      <div className="text-muted-foreground">success</div>
                    </div>
                  </div>

                  {/* Time Commitment */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{service.time}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full gap-2 group-hover:scale-105 transition-transform">
                  {service.cta}
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center">
        <h4 className="text-xl font-bold text-foreground mb-2">Ready to Accelerate Your Growth?</h4>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Join our community of high-achievers and unlock your full potential
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Zap className="w-4 h-4" />
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            View Success Stories
          </Button>
        </div>
      </Card>
    </div>
  )
}