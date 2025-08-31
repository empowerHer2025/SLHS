import { useState } from 'react';
import { Mail, User, Calendar, CheckCircle, AlertCircle, Loader, ArrowRight } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    interests: ''
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setMessage('Welcome to Soft Life, Hard Skills! Check your email for confirmation and calendar invite.');
      setFormData({ name: '', email: '', experience: '', interests: '' });
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="rsvp" className="py-32 px-4 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/80 to-purple-100/80 backdrop-blur-sm px-6 py-3 rounded-2xl mb-8 shadow-xl">
            <Calendar className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-gray-700 text-lg">Reserve Your Spot</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            Join the
            <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Be part of a community that's redefining what it means to thrive in tech. 
            Your journey to soft life, hard skills starts here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-4xl p-10 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-3">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experience" className="block text-lg font-bold text-gray-700 mb-3">
                  Tech Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                >
                  <option value="">Select your level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience</option>
                  <option value="career-changer">Career Changer</option>
                  <option value="early-career">Early Career (0-2 years)</option>
                  <option value="mid-career">Mid Career (3-5 years)</option>
                  <option value="experienced">Experienced (5+ years)</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label htmlFor="interests" className="block text-lg font-bold text-gray-700 mb-3">
                  What interests you most? (Optional)
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none text-lg"
                  placeholder="Career growth, work-life balance, technical skills, networking..."
                />
              </div>

              {/* Status Message */}
              {status !== 'idle' && (
                <div className={`p-6 rounded-2xl flex items-center gap-4 ${
                  status === 'success' ? 'bg-green-50 text-green-700 border-2 border-green-200' :
                  status === 'error' ? 'bg-red-50 text-red-700 border-2 border-red-200' :
                  'bg-blue-50 text-blue-700 border-2 border-blue-200'
                }`}>
                  {status === 'loading' && <Loader className="w-6 h-6 animate-spin" />}
                  {status === 'success' && <CheckCircle className="w-6 h-6" />}
                  {status === 'error' && <AlertCircle className="w-6 h-6" />}
                  <span className="text-lg font-medium">{message}</span>
                </div>
              )}

              {/* Enhanced Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    Reserving Your Spot...
                  </>
                ) : (
                  <>
                    Reserve My Spot
                    <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                By registering, you agree to receive email updates about the series. 
                You can unsubscribe at any time. No spam, just value.
              </p>
            </form>
          </div>

          {/* Enhanced Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50/90 to-purple-50/90 backdrop-blur-md rounded-4xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">What You'll Receive</h3>
              <div className="space-y-6">
                {[
                  { text: 'Monthly Google Meet sessions (60-75 minutes)', icon: 'video' },
                  { text: 'Exclusive worksheets and actionable takeaways', icon: 'docs' },
                  { text: 'Access to guest speakers and industry experts', icon: 'people' },
                  { text: 'Live Q&A and personalized coaching opportunities', icon: 'chat' },
                  { text: 'Community of like-minded women in tech', icon: 'community' },
                  { text: 'Calendar invites and email reminders', icon: 'calendar' },
                  { text: 'Session recordings (when available)', icon: 'record' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50/90 to-cyan-50/90 backdrop-blur-md rounded-4xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Perfect For You If...</h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  You're new to tech or considering a career change
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  You want to balance ambition with personal life
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  You're ready to level up your skills and confidence
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  You value authentic conversations and community
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  You're committed to consistent growth and learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RSVP;
