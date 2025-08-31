"use client"

import { Calendar, Clock, Users, ArrowRight, Rocket, DollarSign, Heart, Palette, Bot, Crown } from "lucide-react"

const Schedule = () => {
  const episodes = [
    {
      month: "October 2025",
      title: "Your First Tech Role, Zero Chaos",
      description: "Navigate your first tech position with confidence and clarity",
      color: "from-primary to-primary/80",
      bgColor: "from-primary/10 to-primary/5",
      icon: Rocket,
    },
    {
      month: "November 2025",
      title: "Money 101 for New Techies",
      description: "Master your finances and negotiate your worth in tech",
      color: "from-secondary to-secondary/80",
      bgColor: "from-secondary/10 to-secondary/5",
      icon: DollarSign,
    },
    {
      month: "December 2025",
      title: "Love, Family & Ambition",
      description: "Balance relationships and career growth during the holidays",
      color: "from-accent to-accent/80",
      bgColor: "from-accent/10 to-accent/5",
      icon: Heart,
    },
    {
      month: "January 2026",
      title: "Portfolio in a Weekend",
      description: "Build a stunning portfolio that showcases your unique value",
      color: "from-primary/80 to-secondary",
      bgColor: "from-primary/5 to-secondary/10",
      icon: Palette,
    },
    {
      month: "February 2026",
      title: "AI as Your Study Buddy",
      description: "Leverage AI tools to accelerate your learning and productivity",
      color: "from-secondary/80 to-accent",
      bgColor: "from-secondary/5 to-accent/10",
      icon: Bot,
    },
    {
      month: "March 2026",
      title: "Your Online Reputation",
      description: "Build a powerful personal brand for International Women's Day",
      color: "from-accent/80 to-primary",
      bgColor: "from-accent/5 to-primary/10",
      isFinale: true,
      icon: Crown,
    },
  ]

  return (
    <section id="schedule" className="py-32 px-4 bg-gradient-to-br from-card/50 to-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl mb-12 shadow-xl">
            <Calendar className="w-7 h-7 text-secondary" />
            <span className="font-bold text-foreground text-xl">Schedule</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-12 text-balance">
            6 Months of
            <span className="block gradient-text">Undiluted Conversations</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light text-pretty">
            Join us monthly for transformative conversations that blend practical skills with real-life wisdom
          </p>
        </div>

        {/* Enhanced Episodes Timeline */}
        <div className="space-y-12">
          {episodes.map((episode, index) => (
            <div key={index} className="group relative">
              {/* Enhanced timeline line */}
              {index < episodes.length - 1 && (
                <div className="absolute left-12 top-32 w-1 h-20 bg-gradient-to-b from-gray-200 via-gray-300 to-transparent hidden lg:block"></div>
              )}

              <div
                className={`relative glass-card rounded-4xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-3`}
              >
                {/* Enhanced episode number */}
                <div className="absolute -left-6 top-12 w-12 h-12 bg-background rounded-2xl flex items-center justify-center shadow-xl border-4 border-card hidden lg:flex group-hover:scale-110 transition-transform duration-500">
                  <span className="text-lg font-bold text-foreground">{index + 1}</span>
                </div>

                {episode.isFinale && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-2xl text-sm font-bold shadow-lg">
                    Season Finale ✨
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-8">
                      <episode.icon className="w-8 h-8 text-primary" />
                      <div>
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${episode.color} mb-2`}></div>
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                          {episode.month}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 group-hover:gradient-text transition-all duration-500 text-balance">
                      {episode.title}
                    </h3>

                    <p className="text-muted-foreground text-xl leading-relaxed mb-8 text-pretty">
                      {episode.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-3 bg-muted/30 px-6 py-3 rounded-xl">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">60-75 minutes</span>
                      </div>
                      <div className="flex items-center gap-3 bg-muted/30 px-6 py-3 rounded-xl">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">Interactive Session</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      className={`group/btn bg-gradient-to-r ${episode.color} text-blue-700 px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center gap-3 text-lg`}
                    >
                      Coming Soon
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-10">
          <div className="glass-card rounded-2xl p-16 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
              Ready to Transform Your
              <span className="block gradient-text mt-3">Journey?</span>
            </h3>
            <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light text-pretty">
              Reserve your spot for the entire series and never miss a session 
            </p>
            <button
              onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 mx-auto glow-effect"
            >
              Join the Series
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
