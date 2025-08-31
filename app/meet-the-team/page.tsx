import Navbar from "@/components/Navbar"
import MeetTheTeam from "@/components/MeetTheTeam"
import Footer from "@/components/Footer"

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <Navbar />
      <div className="">
        <MeetTheTeam />
      </div>
      <Footer />
    </main>
  )
}
