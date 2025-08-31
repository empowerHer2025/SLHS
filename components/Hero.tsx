"use client"
import { Sparkles, Heart, Calendar, Clock, Users, ArrowRight, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center  overflow-hidden mt-20">
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl floating-animation"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-36 h-36 bg-accent/10 rounded-full blur-2xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div> */}

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="group flex items-center gap-3 glass-card px-6 py-3 rounded-2xl hover:shadow-lg transition-all duration-300">
            <Image
              src="./wtm.jpg"
              alt="Women Techmakers"
              width={62}
              height={62}
              className="rounded-xl"
            />
            <div>
              <div className="font-semibold text-foreground text-sm">Women Techmakers</div>
              <div className="text-xs text-muted-foreground">Google Developer Group</div>
            </div>
          </div>

          <div className="text-muted-foreground text-2xl font-light">×</div>

          <div className="group flex items-center gap-3 glass-card px-6 py-3 rounded-2xl hover:shadow-lg transition-all duration-300">
            <Image
              src="./emp.jpg"
              alt="EmpowerHer"
              width={92}
              height={92}
              className="rounded-xl"
            />
            <div>
              <div className="font-semibold text-foreground text-sm">EmpowerHer</div>
              <div className="text-xs text-muted-foreground">Tech Community</div>
            </div>
          </div>
        </div>

        {/* <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground text-sm">Where Tech Meets Life</span>
          <Heart className="w-4 h-4 text-secondary" />
        </div> */}

        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-balance">
          <span className="block gradient-text">Soft Life,</span>
          <span className="block gradient-text">Hard Skills</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground mb-5 max-w-3xl mx-auto leading-relaxed text-pretty">
          Just another monthly hangout for women who happen to work in tech
        </p>

        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          We talk about code, life, and everything in between. 
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-2xl">
            <Calendar className="w-5 h-5 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground text-sm">Oct 2025 - Mar 2026</div>
              <div className="text-xs text-muted-foreground">6 Month Journey</div>
            </div>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-2xl">
            <Clock className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <div className="font-semibold text-foreground text-sm">60-75 minutes</div>
              <div className="text-xs text-muted-foreground">Monthly Sessions</div>
            </div>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-2xl">
            <Users className="w-5 h-5 text-accent" />
            <div className="text-left">
              <div className="font-semibold text-foreground text-sm">Google Meet</div>
              <div className="text-xs text-muted-foreground">Virtual Sessions</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>Reserve Your Spot</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-4 h-4 text-primary" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-4 h-4 text-secondary" />
            </a>
          </div>
        </div>

        <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="text-muted-foreground text-xs font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
