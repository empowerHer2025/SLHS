import { Sparkles, Heart, Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-indigo-200/20 rounded-full blur-lg animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Enhanced Partner Logos */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            {/* WTM Logo */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-teal-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-800">Women Techmakers</div>
              <div className="text-xs text-gray-500">Google Developer Group</div>
            </div>
          </div>

          <div className="text-gray-400 text-3xl font-light animate-pulse">×</div>

          <div className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            {/* EmpowerHer Logo */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-800">EmpowerHer</div>
              <div className="text-xs text-gray-500">Tech Community</div>
            </div>
          </div>
        </div>

        {/* Enhanced tagline */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
          <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />
          <span className="font-semibold text-gray-700">Where Tech Meets Life</span>
          <Heart className="w-5 h-5 text-purple-500 animate-pulse delay-500" />
        </div>

        {/* Main heading with enhanced typography */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
          <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Soft Life,
          </span>
          <span className="block bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hard Skills
          </span>
        </h1>

        {/* Enhanced subtitle */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
          A monthly conversation space for women in tech & beyond
        </p>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Blending practical tech skills with real-life conversations about identity, love, ambition, and balance
        </p>

        {/* Enhanced key details */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-gray-600">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Calendar className="w-6 h-6 text-pink-500" />
            <div className="text-left">
              <div className="font-semibold text-gray-800">Oct 2025 - Mar 2026</div>
              <div className="text-sm text-gray-500">6 Month Journey</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Clock className="w-6 h-6 text-purple-500" />
            <div className="text-left">
              <div className="font-semibold text-gray-800">60-75 minutes</div>
              <div className="text-sm text-gray-500">Monthly Sessions</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="w-6 h-6 text-teal-500" />
            <div className="text-left">
              <div className="font-semibold text-gray-800">Google Meet</div>
              <div className="text-sm text-gray-500">Virtual Sessions</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="space-y-6">
          <button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Reserve Your Spot</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          </button>
          
          {/* <p className="text-gray-500 text-sm max-w-md mx-auto">
            Limited spots available. Join a community of ambitious women creating their ideal life in tech.
          </p> */}
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-gray-400 text-sm font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
