import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50">
      <Navbar/>
      <Hero />
      <About />
      <Schedule />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
