"use client"

import { Target, Users, Heart, Sparkles, Hand, BookOpen, Star, Flame, Crosshair } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Vision */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-xl mb-8">
            <Target className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Our Vision</span>
          </div>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight text-balance">
            Where Tech Meets
            <span className="block gradient-text">Everyday Life</span>
          </h2> */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            A monthly space where we mix{" "}
            <strong className="text-primary font-semibold">hands-on tech know-how</strong> with{" "}
            <strong className="text-secondary font-semibold">real conversations</strong> about work, identity,
            relationships, and balance.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
              <Users className="w-6 h-6  text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Starting Out</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Whether you’re new to tech or considering a career shift, this space is built to meet you where you are.
            </p>
          </div>

          <div className="group glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
              <Heart className="w-6 h-6  text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Real Talk</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Honest chats about careers, self-growth, relationships, and the messy but beautiful balance between them.
            </p>
          </div>

          <div className="group glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
              <Sparkles className="w-6 h-6  text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Skills That Stick</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Practical tools, strategies, and tips you can actually use—no fluff, just things that make life a little easier.
            </p>
          </div>
        </div>

        {/* Episode format */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center text-balance">
            What You’ll Find in Each Session
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "Welcome",
                duration: "5 min",
                description: "A gentle start & ice-breaker",
                icon: Hand,
                color: "from-primary to-primary/80",
              },
              {
                title: "Starter Pack",
                duration: "10 min",
                description: "Quick tips & simple lessons",
                icon: BookOpen,
                color: "from-secondary to-secondary/80",
              },
              {
                title: "Spotlight",
                duration: "25 min",
                description: "Guest speaker sharing their story",
                icon: Star,
                color: "from-accent to-accent/80",
              },
              {
                title: "Q&A Hot Seat",
                duration: "20 min",
                description: "Open questions & Answers",
                icon: Flame,
                color: "from-primary/80 to-secondary",
              },
              {
                title: "Takeaways",
                duration: "5 min",
                description: "Reflections & next steps",
                icon: Crosshair,
                color: "from-secondary/80 to-accent",
              },
            ].map((phase, index) => {
              const IconComponent = phase.icon
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300`}
                  >
                    <IconComponent className="w-7 h-7  text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-primary font-semibold mb-3">{phase.duration}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{phase.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
