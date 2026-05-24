import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const courses = [
  { emoji: '⚛️', title: 'JEE Main + Advanced', tag: 'Class 11, 12 & Droppers', features: ['500+ Hrs Live Classes', 'All India Test Series', 'IIT Expert Faculty'], from: 'from-blue-50', accent: 'border-blue-200', tagColor: 'bg-blue-100 text-blue-700', price: '₹89,000' },
  { emoji: '🧬', title: 'NEET (UG)', tag: 'Class 11, 12 & Droppers', features: ['NCERT-First Approach', 'Bio Video Library', 'AIIMS Doctor Faculty'], from: 'from-green-50', accent: 'border-green-200', tagColor: 'bg-green-100 text-green-700', price: '₹79,000' },
  { emoji: '📘', title: 'Board Exam Mastery', tag: 'Class 10 & 12 CBSE', features: ['All Subjects', 'Sample Paper Series', 'Marking Scheme Tips'], from: 'from-yellow-50', accent: 'border-yellow-200', tagColor: 'bg-yellow-100 text-yellow-700', price: '₹28,000' },
  { emoji: '🏅', title: 'Olympiad Prep', tag: 'Class 4 – 10', features: ['IMO, NSO & NTSE', 'Logic & Aptitude', 'Medal Strategy'], from: 'from-purple-50', accent: 'border-purple-200', tagColor: 'bg-purple-100 text-purple-700', price: '₹18,000' },
];

const CoursesSection = () => {
  const { openModal } = useEnroll();
  return (
    <div className="bg-prepzo-bg py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,90,58,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-prepzo-green font-bold text-sm uppercase tracking-widest bg-prepzo-light-green px-4 py-1.5 rounded-full border border-prepzo-green/20 mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Courses for <span className="text-prepzo-green">every</span> aspirant
          </h2>
          <p className="mt-4 text-lg text-gray-600">Carefully crafted programs to take you from aspiration to achievement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className={`flex flex-col bg-gradient-to-b ${course.from} to-white border ${course.accent} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group`}>
              <div className="p-7 flex flex-col flex-grow">
                <div className="text-4xl mb-4">{course.emoji}</div>
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 w-fit ${course.tagColor}`}>{course.tag}</span>
                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">{course.title}</h3>
                <ul className="space-y-2 flex-grow mb-5">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-prepzo-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-black/5 pt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-prepzo-green">{course.price}</span>
                  <button onClick={() => openModal(course.title)} className="flex items-center gap-1 text-xs font-bold text-prepzo-green hover:gap-2 transition-all">
                    Enroll <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/courses" className="inline-flex items-center gap-2 px-8 py-4 gradient-green text-white font-bold rounded-full shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all">
            View All Courses & Pricing <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
