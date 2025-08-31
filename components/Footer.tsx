"use client"

import { MessageCircle, Calendar, Users, Instagram, Twitter, Mail  } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-8 mb-10">
              <div className="flex items-center gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wtm.jpg-0MQ204kmuPe9ie1DZeKgLJbBII16nO.jpeg"
                  alt="Women Techmakers"
                  width={48}
                  height={48}
                  className="rounded-2xl shadow-lg"
                />
                <span className="font-bold text-background text-lg">WTM</span>
              </div>

              <span className="text-background/60 text-2xl">×</span>

              <div className="flex items-center gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emp.jpg-V5IoV5Z2owQ31CfTiDgStOuEhG28Nk.jpeg"
                  alt="EmpowerHer"
                  width={48}
                  height={48}
                  className="rounded-2xl shadow-lg"
                />
                <span className="font-bold text-background text-lg">EmpowerHer</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-8 gradient-text">Soft Life, Hard Skills</h3>
            <p className="text-background/80 leading-relaxed max-w-lg text-lg text-pretty">
              A monthly conversation space for women in tech & beyond. Where practical skills meet real-life wisdom and
              authentic community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-8 text-background">Quick Links</h4>
            <div className="space-y-4">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-background/80 hover:text-primary transition-colors duration-300 text-lg"
              >
                About the Series
              </button>
              <button
                onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-background/80 hover:text-secondary transition-colors duration-300 text-lg"
              >
                Meet the Team
              </button>
              <button
                onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-background/80 hover:text-primary transition-colors duration-300 text-lg"
              >
                Schedule
              </button>
              <button
                onClick={() => document.getElementById("conduct")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-background/80 hover:text-secondary transition-colors duration-300 text-lg"
              >
                Code of Conduct
              </button>
              <button
                onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-background/80 hover:text-accent transition-colors duration-300 text-lg"
              >
                RSVP
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-8 text-background">Get in Touch</h4>
            <div className="space-y-6">
              <a
                href="https://chat.whatsapp.com/EIyyl6v0qwZFNxoAheCMZy?mode=ems_wa_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-background/80 hover:text-green-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-lg">Join our WhatsApp Group</span>
              </a>
              <div className="flex items-center gap-4 text-background/80">
                <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-lg">Oct 2025 - Mar 2026</span>
              </div>
              <div className="flex items-center gap-4 text-background/80">
                <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-lg">Google Meet Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom */}
        <div className="border-t border-background/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-background/60 text-lg">
              © 2025 Soft Life, Hard Skills. Powered by WTM & EmpowerHer.
            </div>
            <div className="flex items-center gap-6 text-background/60">
      <a
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors duration-300"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary transition-colors duration-300"
      >
        <Instagram className="w-6 h-6" />
      </a>
       <a
        href="mailto:empowerher.slhs@gmail.com"
        className="hover:text-accent transition-colors duration-300"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
