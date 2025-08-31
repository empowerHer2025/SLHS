"use client"

import { Users, Heart, Sparkles, Award, Coffee, Lightbulb } from "lucide-react"

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Organizer & WTM Ambassador",
      bio: "Passionate about creating inclusive spaces in tech. 5+ years in product management at Google.",
      expertise: ["Product Strategy", "Community Building", "Mentorship"],
      color: "from-primary to-primary/80",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "Maya Patel",
      role: "EmpowerHer Co-Founder",
      bio: "Full-stack developer turned entrepreneur. Believes in the power of authentic conversations.",
      expertise: ["Web Development", "Startup Growth", "Work-Life Balance"],
      color: "from-secondary to-secondary/80",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      name: "Jessica Rodriguez",
      role: "Content & Community Manager",
      bio: "Former career changer from marketing to UX design. Loves helping others navigate transitions.",
      expertise: ["UX Design", "Career Transitions", "Content Strategy"],
      color: "from-accent to-accent/80",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      name: "Aisha Johnson",
      role: "Guest Speaker Coordinator",
      bio: "Senior software engineer with a passion for diversity in tech and authentic storytelling.",
      expertise: ["Software Engineering", "Public Speaking", "Diversity & Inclusion"],
      color: "from-primary/80 to-secondary",
      icon: <Coffee className="w-6 h-6" />,
    },
  ]

  return (
    <section id="team" className="py-32 px-4 bg-gradient-to-br from-card/50 to-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl mb-12 shadow-xl">
            <Users className="w-7 h-7 text-secondary" />
            <span className="font-bold text-foreground text-xl">Meet the Team</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-12 text-balance">
            The Women Behind
            <span className="block gradient-text">Your Journey</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light text-pretty">
            Meet the passionate women who curate each session with care, bringing together practical wisdom and
            authentic community for your growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <div className="flex items-start gap-6 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-primary`}
                >
                  {member.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-500">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-4">{member.role}</p>
                </div>
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-8 text-pretty">{member.bio}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-lg">Expertise:</h4>
                <div className="flex flex-wrap gap-3">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-full text-sm font-medium border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-4xl p-16 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-xl floating-animation">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
              Ready to Connect with
              <span className="block gradient-text">Amazing Women?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
              Join our community where every voice matters, every story inspires, and every session brings you closer to
              your goals and authentic self.
            </p>
            <button
              onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 glow-effect"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam
