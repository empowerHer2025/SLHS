import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const Schedule = () => {
  const episodes = [
    {
      month: 'October 2025',
      title: 'Your First Tech Role, Zero Chaos',
      description: 'Navigate your first tech position with confidence and clarity',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-50/80 to-rose-50/80',
      icon: '🚀'
    },
    {
      month: 'November 2025',
      title: 'Money 101 for New Techies',
      description: 'Master your finances and negotiate your worth in tech',
      color: 'from-purple-400 to-violet-400',
      bgColor: 'from-purple-50/80 to-violet-50/80',
      icon: '💰'
    },
    {
      month: 'December 2025',
      title: 'Love, Family & Ambition',
      description: 'Balance relationships and career growth during the holidays',
      color: 'from-teal-400 to-cyan-400',
      bgColor: 'from-teal-50/80 to-cyan-50/80',
      icon: '💕'
    },
    {
      month: 'January 2026',
      title: 'Portfolio in a Weekend',
      description: 'Build a stunning portfolio that showcases your unique value',
      color: 'from-indigo-400 to-blue-400',
      bgColor: 'from-indigo-50/80 to-blue-50/80',
      icon: '🎨'
    },
    {
      month: 'February 2026',
      title: 'AI as Your Study Buddy',
      description: 'Leverage AI tools to accelerate your learning and productivity',
      color: 'from-emerald-400 to-green-400',
      bgColor: 'from-emerald-50/80 to-green-50/80',
      icon: '🤖'
    },
    {
      month: 'March 2026',
      title: 'Your Online Reputation',
      description: 'Build a powerful personal brand for International Women\'s Day',
      color: 'from-pink-400 to-purple-400',
      bgColor: 'from-pink-50/80 to-purple-50/80',
      isFinale: true,
      icon: '👑'
    }
  ];

  return (
    <section id="schedule" className="py-32 px-4 bg-gradient-to-br from-purple-50/60 via-pink-50/60 to-teal-50/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl mb-8 shadow-xl">
            <Calendar className="w-6 h-6 text-purple-500" />
            <span className="font-bold text-gray-700 text-lg">Season 1 Schedule</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            6 Months of
            <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Join us monthly for transformative conversations that blend practical skills with real-life wisdom
          </p>
        </div>

        {/* Enhanced Episodes Timeline */}
        <div className="space-y-12">
          {episodes.map((episode, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Enhanced timeline line */}
              {index < episodes.length - 1 && (
                <div className="absolute left-12 top-32 w-1 h-20 bg-gradient-to-b from-gray-200 via-gray-300 to-transparent hidden lg:block"></div>
              )}
              
              <div className={`relative bg-gradient-to-br ${episode.bgColor} backdrop-blur-md rounded-4xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-3 border border-white/50`}>
                {/* Enhanced episode number */}
                <div className="absolute -left-6 top-12 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-gray-50 hidden lg:flex group-hover:scale-110 transition-transform duration-500">
                  <span className="text-lg font-bold text-gray-700">{index + 1}</span>
                </div>

                {episode.isFinale && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                    Season Finale ✨
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{episode.icon}</div>
                      <div>
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${episode.color} mb-2`}></div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          {episode.month}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                      {episode.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xl leading-relaxed mb-8">
                      {episode.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500">
                      <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">60-75 minutes</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">Interactive Session</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button className={`group/btn bg-gradient-to-r ${episode.color} text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center gap-3 text-lg`}>
                      Coming Soon
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/90 backdrop-blur-md rounded-4xl p-12 md:p-16 shadow-2xl border border-gray-100">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Tech Journey?
              </span>
            </h3>
            <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              Reserve your spot for the entire series and never miss a session that could change your career trajectory.
            </p>
            <button 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex items-center gap-3 mx-auto"
            >
              Join the Series
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
