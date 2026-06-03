import { Phone, Mail, MapPin, ArrowRight, Target, Heart, Lightbulb } from 'lucide-react';
import founderImg from '../assets/prepzo-founder.jpeg';

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

      {/* Meet the Founder */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-prepzo-green/5 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-prepzo-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-prepzo-green/10 rounded-full blur-3xl"></div>
        
        {/* Modern Image Frame */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex-shrink-0 group mx-auto md:mx-0">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-prepzo-green to-prepzo-yellow rounded-full rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 scale-105"></div>
          <div className="absolute inset-0 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden z-10 flex items-center justify-center p-2">
            <img 
              src={founderImg} 
              alt="Ritansha Hada" 
              className="w-full h-full object-contain rounded-full" 
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 relative z-10 text-center md:text-left">
          <h2 className="text-xs font-bold uppercase tracking-widest text-prepzo-green mb-2">Meet the Founder</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Ritansha Hada</h3>
          <p className="text-lg font-medium text-gray-500 mb-8">Founder & CEO, Prepzo</p>
          <div className="relative inline-block md:block">
            <svg className="absolute -top-4 -left-6 sm:-left-8 h-8 w-8 text-prepzo-green/10 hidden sm:block" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-gray-600 leading-relaxed italic relative z-10 sm:pl-2">
              "My mission is to democratize high-quality education. At Prepzo, we believe that with the right guidance, smart strategies, and relentless support, any student can unlock their true potential and achieve their biggest dreams."
            </p>
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
             <div className="h-1.5 w-12 gradient-green rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-10">
        <h2 className="text-2xl font-black text-gray-900 mb-7">Contact Us</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Phone, label: 'Call Us', val: '+91 87963 39455', href: 'tel:+918796339455' },
            { icon: Mail, label: 'Email Us', val: 'theprepzo05@gmail.com', href: 'mailto:theprepzo05@gmail.com' },
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
