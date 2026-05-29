import { ArrowRight, PlayCircle, Star, CheckCircle, Phone } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const HeroSection = () => {
  const { openModal } = useEnroll();

  return (
    <div className="relative overflow-hidden gradient-hero">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,90,58,0.06) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      {/* Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-prepzo-yellow opacity-[0.07] rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-32 -left-32 w-[400px] h-[400px] bg-prepzo-green opacity-[0.08] rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-prepzo-yellow opacity-[0.05] rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pb-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="lg:text-left text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-prepzo-green/10 border border-prepzo-green/20 text-prepzo-green text-xs font-bold px-4 py-2 rounded-full mb-7 uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-prepzo-yellow text-prepzo-yellow" />
              India's #1 Smart Prep Platform
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Smart prep, <br />
              <span className="text-prepzo-green">learn anytime</span>{' '}
              <span className="text-prepzo-yellow">anywhere</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl lg:mx-0 mx-auto">
              Join 10,000+ aspirants preparing for JEE, NEET, and Boards with expert faculty, interactive live classes, and smart AI-driven performance analysis.
            </p>

            {/* Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md lg:mx-0 mx-auto text-left">
              {['Live & Recorded Classes', 'Expert IIT/AIIMS Faculty', 'All India Test Series', 'Personalised Mentorship'].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <CheckCircle className="h-4 w-4 text-prepzo-green flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => openModal()} className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full text-white gradient-green shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all">
                Start Learning Now <ArrowRight className="h-5 w-5" />
              </button>
              <a href="tel:+918796339455" className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full text-prepzo-green bg-white border-2 border-prepzo-green/20 hover:border-prepzo-green hover:bg-prepzo-light-green transition-all">
                <Phone className="h-5 w-5" /> Contact
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
              {[
                { num: '50K+', label: 'Active Students' },
                { num: '100+', label: 'Expert Faculty' },
                { num: '95%', label: 'Success Rate' },
                { num: '4.9★', label: 'Student Rating' },
              ].map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-gray-900">{s.num}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual Card Stack */}
          <div className="mt-16 lg:mt-0 relative">
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/hero_image.png"
                alt="Students with Prepzo"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prepzo-green/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg">🏆 2024 Top Results</p>
                <p className="text-white/80 text-sm mt-0.5">500+ Students cleared JEE & NEET this year</p>
              </div>
            </div>

            {/* Floating card 1 — top right */}
            <div className="hidden sm:flex absolute -top-5 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100 items-center gap-3 w-52">
              <div className="h-11 w-11 rounded-xl gradient-green flex items-center justify-center text-white text-xl flex-shrink-0">📚</div>
              <div>
                <p className="text-xs text-gray-500">Study Material</p>
                <p className="font-bold text-sm text-gray-900">10,000+ Resources</p>
              </div>
            </div>

            {/* Floating card 2 — bottom left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100 items-center gap-3 w-52">
              <div className="h-11 w-11 rounded-xl bg-prepzo-yellow-light border border-prepzo-yellow/30 flex items-center justify-center text-xl flex-shrink-0">🎯</div>
              <div>
                <p className="text-xs text-gray-500">Mock Tests</p>
                <p className="font-bold text-sm text-gray-900">500+ Test Series</p>
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/90 backdrop-blur rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 shadow-md">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-800">LIVE Classes Every Day</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust logos bar */}
      <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Trusted by Students Preparing For</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-12 items-center">
            {['JEE Main', 'JEE Advanced', 'NEET UG', 'CBSE Board', 'IMO', 'NTSE'].map(exam => (
              <span key={exam} className="text-sm font-extrabold text-gray-700 tracking-tight px-3 py-1 border border-gray-200 rounded-lg">{exam}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
