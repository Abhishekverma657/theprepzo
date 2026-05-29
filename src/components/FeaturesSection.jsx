import { BookOpen, Users, Trophy, Video, Target, Clock, TrendingUp, Headphones } from 'lucide-react';

const features = [
  { name: 'Top Faculty from IITs & AIIMS', description: 'Learn from experienced educators who understand the exams and know how to help students succeed.', icon: Users, color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'Live + Recorded Classes', description: 'Attend live sessions or watch recordings anytime at your convenience.', icon: Video, color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { name: 'Complete Study Material', description: 'Get notes, practice sheets, DPPs, and revision material all in one place.', icon: BookOpen, color: 'bg-green-50 text-green-600 border-green-100' },
  { name: 'All India Test Series', description: 'Practice with real exam-level mock tests and improve with detailed analysis.', icon: Trophy, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { name: 'Personal Mentorship', description: 'Get guidance from dedicated mentors for planning, motivation, and progress tracking.', icon: Target, color: 'bg-red-50 text-red-600 border-red-100' },
  { name: 'Flexible Learning', description: 'Study anytime, anywhere with 24/7 access to all classes and resources.', icon: Clock, color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { name: 'Performance Tracking', description: 'Monitor your progress, identify weak areas, and improve with smart insights.', icon: TrendingUp, color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { name: '24×7 Doubt Support', description: 'Get instant help for your doubts through chat or live support anytime.', icon: Headphones, color: 'bg-pink-50 text-pink-600 border-pink-100' },
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
            Why Choose Prepzo?
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
              className="group h-56 w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-2xl shadow-sm transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-6 text-center [backface-visibility:hidden]">
                  <div className={`h-16 w-16 rounded-xl border flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-prepzo-green text-white rounded-2xl p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-prepzo-yellow" />
                  </div>
                  <h3 className="text-base font-bold text-prepzo-yellow mb-2">{feature.name}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{feature.description}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

