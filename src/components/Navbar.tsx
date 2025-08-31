import  { useState, useEffect } from 'react';
import {  Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* WTM Logo */}
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
              
              <span className="text-gray-400 text-xl font-light">+</span>
              
              {/* EmpowerHer Logo */}
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Soft Life, Hard Skills
              </div>
              <div className="text-xs text-gray-500 font-medium">WTM × EmpowerHer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-gray-700 hover:text-purple-500 font-medium transition-colors duration-300"
            >
              Schedule
            </button>
            <button 
              onClick={() => scrollToSection('rsvp')}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium py-2 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="block w-full text-left text-gray-700 hover:text-purple-500 font-medium py-2 transition-colors duration-300"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('rsvp')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-4"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar
