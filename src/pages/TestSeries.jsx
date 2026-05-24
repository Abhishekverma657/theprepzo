import { Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const tests = [
  { title: 'JEE Main – Full Syllabus Test 01', date: 'Nov 10, 2024', subjects: 'Phy + Chem + Maths', type: 'JEE', status: 'Upcoming' },
  { title: 'NEET – Biology Booster Test', date: 'Nov 14, 2024', subjects: 'Bio + Phy + Chem', type: 'NEET', status: 'Upcoming' },
  { title: 'JEE Advanced – Paper 1 & 2 Mock', date: 'Dec 5, 2024', subjects: 'Full Syllabus', type: 'JEE', status: 'Upcoming' },
  { title: 'NEET UG – Full Syllabus Test 02', date: 'Dec 12, 2024', subjects: 'Bio + Phy + Chem', type: 'NEET', status: 'Upcoming' },
  { title: 'JEE Main – Part Test: Waves & Optics', date: 'Oct 28, 2024', subjects: 'Physics', type: 'JEE', status: 'Completed' },
  { title: 'Foundation – Class 10 Grand Test', date: 'Oct 20, 2024', subjects: 'All Subjects', type: 'Board', status: 'Completed' },
];

const typeColors = {
  JEE: 'bg-blue-100 text-blue-700',
  NEET: 'bg-green-100 text-green-700',
  Board: 'bg-yellow-100 text-yellow-700',
};

const TestSeries = () => {
  const { openModal } = useEnroll();
  return (
  <div className="min-h-screen bg-prepzo-bg">
    {/* Hero */}
    <div className="gradient-green py-16 px-4 text-center text-white">
      <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
        📝 All India Test Series
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-4">Benchmark Your Preparation</h1>
      <p className="text-white/70 text-lg max-w-xl mx-auto">Exact exam-level mocks with AI-powered performance analytics and rank prediction.</p>
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Feature pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {['Exact Exam Pattern', 'Detailed Solutions', 'All India Rank', 'Topic-wise Analysis', 'Percentile Prediction'].map(f => (
          <span key={f} className="flex items-center gap-1.5 text-sm font-semibold text-prepzo-green bg-prepzo-light-green px-4 py-2 rounded-full border border-prepzo-green/20">
            <CheckCircle className="h-4 w-4" /> {f}
          </span>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="gradient-green px-6 py-4 flex items-center justify-between">
          <p className="font-bold text-white text-lg">📅 Test Schedule 2024</p>
          <span className="text-white/70 text-sm">{tests.length} tests</span>
        </div>
        <ul className="divide-y divide-gray-100">
          {tests.map((test, i) => (
            <li key={i} className="p-5 sm:p-6 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl gradient-green flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{test.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${typeColors[test.type] || 'bg-gray-100 text-gray-600'}`}>{test.type}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="h-3 w-3" /> {test.date}</span>
                    <span className="text-xs text-gray-500">{test.subjects}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${test.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                  {test.status}
                </span>
                <button onClick={() => openModal(test.title)} className="px-4 py-2 gradient-green text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all">
                  {test.status === 'Upcoming' ? 'Register Free' : 'View Report'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-prepzo-light-green border border-prepzo-green/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-black text-gray-900 text-lg">Get Full Test Series Access</p>
          <p className="text-gray-600 text-sm mt-1">Call us at <span className="font-bold text-prepzo-green">+91 93116 23522</span> or enroll online.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
          <a href="tel:+919311623522" className="flex justify-center items-center gap-2 px-5 py-3 bg-white border border-prepzo-green/20 text-prepzo-green font-bold rounded-xl text-sm hover:bg-prepzo-green hover:text-white transition-all w-full sm:w-auto">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button onClick={() => openModal('Test Series')} className="flex justify-center items-center gap-2 px-5 py-3 gradient-green text-white font-bold rounded-xl text-sm hover:opacity-90 transition-all w-full sm:w-auto">
            Enroll <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default TestSeries;
