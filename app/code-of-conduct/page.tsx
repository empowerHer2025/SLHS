import Navbar from "@/components/Navbar"
import CodeOfConduct from "@/components/CodeOfConduct"
import Footer from "@/components/Footer"

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <Navbar />
      <div className="">
        <CodeOfConduct />
      </div>
      <Footer />
    </div>
  )
}
