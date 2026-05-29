import { Phone, Mail, MapPin, ArrowRight, Target, Heart, Lightbulb } from 'lucide-react';

const values = [
  { icon: Target, title: 'Result Focused', desc: 'Everything we do is built to help students achieve top results in competitive exams.', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Heart, title: 'Students Come First', desc: 'We focus on every student’s growth, confidence, and learning journey.', color: 'bg-red-50 text-red-600 border-red-100' },
  { icon: Lightbulb, title: 'Smart Learning Approach', desc: 'Modern teaching methods, adaptive practice, and detailed performance tracking for better preparation.', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
];

const AboutUs = () => (
  <div className="min-h-screen bg-prepzo-bg">
    {/* Hero */}
    <div className="gradient-green py-16 px-4 text-center text-white">
      <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
        🏫 About Prepzo
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-4">Smart Prep. Real Results.</h1>
      <p className="text-white/70 text-lg max-w-xl mx-auto">
        We are on a mission to make high-quality coaching accessible to every student in India.
      </p>
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="h-12 w-12 gradient-green rounded-xl flex items-center justify-center text-2xl mb-5">🎯</div>
          <h2 className="text-xl font-black text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">To provide every Indian student access to world-class coaching, study material, and mentorship that was once only available in big cities — now available anywhere, anytime through Prepzo.</p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="h-12 w-12 bg-prepzo-yellow-light border border-prepzo-yellow/30 rounded-xl flex items-center justify-center text-2xl mb-5">🔭</div>
          <h2 className="text-xl font-black text-gray-900 mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">To become India's most trusted and result-oriented learning platform — where smart preparation meets guaranteed success for JEE, NEET, and beyond.</p>
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-black text-gray-900 mb-6">Our Core Values</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${v.color}`}>
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Placeholder */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Meet the Founder</h2>
        <div className="h-24 w-24 rounded-full bg-gray-100 border-gray-200 mx-auto mb-4 flex items-center justify-center text-3xl">👨‍🏫</div>
        <h3 className="text-xl font-bold text-gray-900">Founder details to be added</h3>
        <p className="text-gray-500 mt-2">Placeholder for founder details.</p>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10">
        <h2 className="text-2xl font-black text-gray-900 mb-7">Contact Us</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Phone, label: 'Call Us', val: '+91 87963 39455', href: 'tel:+918796339455' },
            { icon: Mail, label: 'Email Us', val: 'prepzo333@gmail.com', href: 'mailto:prepzo333@gmail.com' },
            { icon: MapPin, label: 'Visit Us', val: 'Kota, Rajasthan', href: '#' },
          ].map((c, i) => (
            <a key={i} href={c.href} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-prepzo-green/30 hover:bg-prepzo-light-green/30 transition-all group">
              <div className="h-10 w-10 gradient-green rounded-xl flex items-center justify-center flex-shrink-0">
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{c.label}</p>
                <p className="text-sm font-bold text-gray-800 group-hover:text-prepzo-green transition-colors mt-1">{c.val}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="tel:+918796339455" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 gradient-green text-white font-bold rounded-full hover:opacity-90 transition-all">
          <Phone className="h-5 w-5" /> Call +91 87963 39455 Now <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
