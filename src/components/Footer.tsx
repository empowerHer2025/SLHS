import {  Mail, Calendar, Users } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                {/* WTM Logo */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm"></div>
                  </div>
                </div>
                <span className="font-bold text-white">WTM</span>
              </div>
              
              <span className="text-gray-400 text-xl">×</span>
              
              <div className="flex items-center gap-3">
                {/* EmpowerHer Logo */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <span className="font-bold text-white">EmpowerHer</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Soft Life, Hard Skills
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-lg text-lg">
              A monthly conversation space for women in tech & beyond. 
              Where practical skills meet real-life wisdom and authentic community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <div className="space-y-4">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 text-lg"
              >
                About the Series
              </button>
              <button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 text-lg"
              >
                Schedule
              </button>
              <button 
                onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 text-lg"
              >
                RSVP
              </button>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-300 text-lg">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@softlifehardskills.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-lg">Oct 2025 - Mar 2026</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-lg">Google Meet Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom */}
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-lg">
              © 2025 Soft Life, Hard Skills. Powered by WTM & EmpowerHer.
            </div>
            <div className="flex items-center gap-8 text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors duration-300 text-lg">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300 text-lg">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300 text-lg">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
