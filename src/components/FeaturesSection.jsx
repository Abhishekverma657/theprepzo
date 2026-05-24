import { BookOpen, Users, Trophy, Video, Target, Clock, TrendingUp, Headphones } from 'lucide-react';

const features = [
  { name: 'IIT & AIIMS Expert Faculty', description: 'Learn directly from educators who cracked the exams you are targeting. Our faculty average 10+ years of coaching experience.', icon: Users, color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'Live & Recorded Classes', description: 'Never miss a class. Watch live or access recordings anytime. Smart note-taking tools built right in.', icon: Video, color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { name: 'Comprehensive Study Material', description: 'Structured modules, DPPs, formula sheets, and chapter-wise revision notes crafted by toppers.', icon: BookOpen, color: 'bg-green-50 text-green-600 border-green-100' },
  { name: 'All India Test Series', description: 'Get real exam experience with full-length mocks, section-wise tests, and in-depth performance analytics.', icon: Trophy, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { name: 'Personalised Mentorship', description: 'One-on-one sessions with dedicated mentors who guide your preparation strategy and track your progress.', icon: Target, color: 'bg-red-50 text-red-600 border-red-100' },
  { name: 'Flexible Learning Schedule', description: 'Study at your own pace. All content is accessible 24/7 so you can prepare from home, school or anywhere.', icon: Clock, color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { name: 'Performance Analytics', description: 'AI-driven insights that pinpoint your weak areas, track improvement, and predict your rank in real-time.', icon: TrendingUp, color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { name: '24×7 Doubt Support', description: 'Get your doubts resolved anytime via chat, voice, or video by our expert panel. No question goes unanswered.', icon: Headphones, color: 'bg-pink-50 text-pink-600 border-pink-100' },
];

const FeaturesSection = () => {
  return (
    <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-prepzo-light-green rounded-full blur-3xl opacity-60 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-prepzo-yellow-light rounded-full blur-3xl opacity-60 -z-0"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-prepzo-green font-bold text-sm uppercase tracking-widest bg-prepzo-light-green px-4 py-1.5 rounded-full border border-prepzo-green/20 mb-4">
            Why Choose Prepzo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Everything you need <br/>
            <span className="text-prepzo-green">to excel</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A complete ecosystem built for serious aspirants. From classroom to rank, we are with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute -bottom-3 -right-1 text-8xl font-black text-gray-50 select-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className={`h-12 w-12 rounded-xl border flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 relative z-10">{feature.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">{feature.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-prepzo-green to-prepzo-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
