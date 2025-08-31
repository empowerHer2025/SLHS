import Hero from "@/components/Hero"
import About from "@/components/About"
import Schedule from "@/components/Schedule"
import RSVP from "@/components/RSVP"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <RSVP />
      <Footer />
    </div>
  )
}
