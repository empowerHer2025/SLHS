"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-xl font-bold gradient-text">Soft Life, Hard Skills</div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary font-medium transition-colors duration-300 text-sm"
            >
              About
            </button>
            <Link
              href="/meet-the-team"
              className="text-foreground hover:text-secondary font-medium transition-colors duration-300 text-sm"
            >
              Meet the Team
            </Link>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-foreground hover:text-primary font-medium transition-colors duration-300 text-sm"
            >
              Schedule
            </button>
            <Link
              href="/code-of-conduct"
              className="text-foreground hover:text-secondary font-medium transition-colors duration-300 text-sm"
            >
              Code of Conduct
            </Link>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Join Now
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-xl glass-card">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-4">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground hover:text-primary font-medium py-2 transition-colors duration-300 text-sm"
              >
                About
              </button>
              <Link
                href="/meet-the-team"
                className="block w-full text-left text-foreground hover:text-secondary font-medium py-2 transition-colors duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meet the Team
              </Link>
              <button
                onClick={() => scrollToSection("schedule")}
                className="block w-full text-left text-foreground hover:text-primary font-medium py-2 transition-colors duration-300 text-sm"
              >
                Schedule
              </button>
              <Link
                href="/code-of-conduct"
                className="block w-full text-left text-foreground hover:text-secondary font-medium py-2 transition-colors duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Code of Conduct
              </Link>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-3 rounded-full font-semibold shadow-lg mt-4 text-sm"
              >
                RSVP Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
