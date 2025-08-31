import { Target, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Vision */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm px-6 py-3 rounded-2xl mb-8 shadow-lg">
            <Target className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-gray-700 text-lg">Our Vision</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            Where Tech Meets
            <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Real Life
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A monthly series that blends <strong className="text-pink-600">practical tech & career skills</strong> with 
            <strong className="text-purple-600"> authentic conversations</strong> about identity, love, ambition, and balance.
          </p>
        </div>

        {/* Enhanced Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Perfect for Beginners</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Designed for women just starting their tech journey or navigating career transitions with confidence.
            </p>
          </div>

          <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Authentic Conversations</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Honest discussions about balancing career ambitions with personal life, relationships, and well-being.
            </p>
          </div>

          <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Practical Skills</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Actionable tech skills, career strategies, and tools you can implement immediately in your journey.
            </p>
          </div>
        </div>

        {/* Enhanced Episode format */}
        <div className="bg-gradient-to-br from-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-4xl p-12 md:p-16 shadow-2xl border border-white/50">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            What to Expect Each Session
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { title: 'Welcome', duration: '5 min', description: 'Intro & warm-up', icon: '👋', color: 'from-pink-400 to-rose-400' },
              { title: 'Starter Pack', duration: '10 min', description: 'Quick lesson & tips', icon: '📚', color: 'from-purple-400 to-violet-400' },
              { title: 'Spotlight', duration: '25 min', description: 'Guest speaker deep-dive', icon: '✨', color: 'from-indigo-400 to-blue-400' },
              { title: 'Q&A Hot Seat', duration: '20 min', description: 'Live coaching & questions', icon: '🔥', color: 'from-teal-400 to-cyan-400' },
              { title: 'Takeaways', duration: '5 min', description: 'Worksheet & next steps', icon: '🎯', color: 'from-emerald-400 to-green-400' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-3xl">{phase.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{phase.title}</h4>
                <p className="text-purple-600 font-bold mb-3 text-lg">{phase.duration}</p>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
