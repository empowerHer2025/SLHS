"use client"

import { Shield, Heart, Users, CheckCircle, AlertTriangle, MessageCircle } from "lucide-react"

const CodeOfConduct = () => {
  const principles = [
    {
      title: "Respect & Inclusivity",
      description: "We welcome women from all backgrounds, experience levels, and walks of life. Every voice matters.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-primary to-primary/80",
    },
    {
      title: "Safe Space",
      description: "Our sessions are judgment-free zones where vulnerability and authenticity are celebrated.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-secondary to-secondary/80",
    },
    {
      title: "Supportive Community",
      description: "We lift each other up, share resources, and celebrate wins together as a community.",
      icon: <Users className="w-6 h-6" />,
      color: "from-accent to-accent/80",
    },
  ]

  const guidelines = [
    "Be respectful in all interactions and communications",
    "Listen actively and give others space to share their experiences",
    "Keep personal stories shared in sessions confidential",
    "Avoid interrupting or dominating conversations",
    "Use inclusive language and be mindful of different perspectives",
    "Support fellow community members with encouragement and resources",
    "Report any concerns to organizers promptly and respectfully",
  ]

  const consequences = [
    {
      level: "First Violation",
      action: "Private conversation with organizers and guidance on expected behavior",
      icon: <MessageCircle className="w-5 h-5 text-accent" />,
    },
    {
      level: "Second Violation",
      action: "Temporary suspension from sessions with opportunity for discussion",
      icon: <AlertTriangle className="w-5 h-5 text-secondary" />,
    },
    {
      level: "Serious/Repeated Violations",
      action: "Permanent removal from the community to protect other members",
      icon: <Shield className="w-5 h-5 text-primary" />,
    },
  ]

  return (
    <section id="conduct" className="py-32 px-4 bg-gradient-to-br from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl mb-12 shadow-xl">
            <Shield className="w-7 h-7 text-primary" />
            <span className="font-bold text-foreground text-xl">Code of Conduct</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-12 text-balance">
            Creating a<span className="block gradient-text">Safe Space</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light text-pretty">
            Our community thrives on mutual respect, authenticity, and support. These guidelines ensure everyone feels
            welcome and valued.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-primary mb-8`}
              >
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:gradient-text transition-all duration-500">
                {principle.title}
              </h3>
              <p className="text-foreground text-lg leading-relaxed text-pretty">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="glass-card rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              Community Guidelines
            </h3>
            <div className="space-y-6">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground text-lg leading-relaxed text-pretty">{guideline}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-secondary" />
              Enforcement
            </h3>
            <div className="space-y-8">
              {consequences.map((consequence, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-4 mb-4">
                    {consequence.icon}
                    <h4 className="font-bold text-foreground text-lg">{consequence.level}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed ml-9 text-pretty">{consequence.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="glass-card rounded-4xl p-16 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-xl floating-animation">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              Questions or
              <span className="block gradient-text mt-2">Concerns?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              We're here to help! If you have questions about our code of conduct or need to report a concern, please
              reach out to our organizers directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:empowerher.slhs@gmail.com"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Organizers
              </a>
              <button
                onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeOfConduct
