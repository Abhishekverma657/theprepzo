import { Download, BookOpen, FileText, Zap, Phone, ArrowRight } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const materials = [
  { title: 'Physics – Kinematics & Laws of Motion', category: 'Class 11 Physics', type: 'Module', icon: '⚡', size: '4.2 MB' },
  { title: 'Organic Chemistry – Named Reactions', category: 'Class 12 Chemistry', type: 'Notes', icon: '🧪', size: '2.8 MB' },
  { title: 'Calculus – Advanced DPP Set (50 Qs)', category: 'Class 12 Maths', type: 'DPP', icon: '📐', size: '1.5 MB' },
  { title: 'Human Anatomy – Diagram Atlas', category: 'Class 11 Biology', type: 'Cheat Sheet', icon: '🧬', size: '6.1 MB' },
  { title: 'JEE Previous Year Papers (2015–2024)', category: 'JEE Main & Advanced', type: 'PYQ Pack', icon: '📝', size: '18 MB' },
  { title: 'NEET 10-Year Solved Papers', category: 'NEET UG', type: 'PYQ Pack', icon: '💊', size: '15 MB' },
  { title: 'Formula Sheets – Physics All Chapters', category: 'Revision', type: 'Formula Sheet', icon: '📌', size: '1.1 MB' },
  { title: 'Inorganic Chemistry Quick Revision', category: 'Class 12 Chemistry', type: 'Notes', icon: '🔬', size: '2.3 MB' },
];

const typeColors = { Module: 'bg-blue-100 text-blue-700', Notes: 'bg-purple-100 text-purple-700', DPP: 'bg-orange-100 text-orange-700', 'Cheat Sheet': 'bg-pink-100 text-pink-700', 'PYQ Pack': 'bg-green-100 text-green-700', 'Formula Sheet': 'bg-yellow-100 text-yellow-700' };

const StudyMaterial = () => {
  const { openModal } = useEnroll();
  return (
  <div className="min-h-screen bg-prepzo-bg">
    {/* Hero */}
    <div className="gradient-green py-16 px-4 text-center text-white">
      <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
        <BookOpen className="h-4 w-4" /> Study Material Library
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-4">Premium Resources. Free to Access.</h1>
      <p className="text-white/70 text-lg max-w-xl mx-auto">Modules, DPPs, formula sheets, PYQ packs crafted by IIT & AIIMS experts.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {[{ n: '2,000+', l: 'Study Modules' }, { n: '500+', l: 'DPP Sets' }, { n: '200+', l: 'Formula Sheets' }].map(s => (
          <div key={s.l}>
            <p className="text-2xl font-black">{s.n}</p>
            <p className="text-white/60 text-sm">{s.l}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="h-6 w-6 text-prepzo-yellow" />
        <h2 className="text-2xl font-black text-gray-900">Featured Downloads</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materials.map((mat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between hover:shadow-lg hover:border-prepzo-green/20 transition-all group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-prepzo-light-green flex items-center justify-center text-2xl flex-shrink-0 border border-prepzo-green/10">
                {mat.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-prepzo-green transition-colors">{mat.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${typeColors[mat.type] || 'bg-gray-100 text-gray-600'}`}>{mat.type}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 whitespace-nowrap"><FileText className="h-3 w-3" /> {mat.category}</span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{mat.size}</span>
                </div>
              </div>
            </div>
            <button className="flex-shrink-0 p-3 rounded-xl border border-gray-200 text-prepzo-green hover:bg-prepzo-green hover:text-white hover:border-transparent transition-all ml-3">
              <Download className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Enroll CTA */}
      <div className="mt-12 gradient-green rounded-3xl p-8 text-center">
        <p className="text-white font-black text-2xl mb-2">Unlock 10,000+ Premium Resources</p>
        <p className="text-white/70 mb-6">Enroll in any course to get full access to all study material, DPPs, and test series.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+918796339455" className="flex items-center justify-center gap-2 px-7 py-3.5 bg-prepzo-yellow text-white font-bold rounded-full hover:opacity-90 transition-all">
            <Phone className="h-5 w-5" /> +91 87963 39455
          </a>
          <button onClick={() => openModal('Study Material Access')} className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-prepzo-green font-bold rounded-full hover:bg-prepzo-light-green transition-all">
            Enroll Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default StudyMaterial;
