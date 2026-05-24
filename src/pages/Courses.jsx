import { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Zap, Shield, Award } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const categories = ['JEE', 'NEET', 'Board', 'Olympiad'];

const courseData = {
  JEE: [
    {
      title: 'JEE Main + Advanced — Full Year',
      tag: 'Most Popular',
      tagColor: 'bg-blue-100 text-blue-700',
      desc: 'Complete 2-year program with live classes, DPPs, and All India Test Series for Class 11 & 12.',
      faculty: 'Rajiv Mehta, IIT Bombay',
      students: '12,400+',
      rating: '4.9',
      duration: '1 Year',
      price: '₹89,000',
      originalPrice: '₹1,20,000',
      badge: 'BESTSELLER',
      badgeColor: 'bg-blue-600',
      features: ['500+ Hours Live Classes', '1000+ DPPs', 'Doubt Sessions', 'Mock Tests'],
      gradient: 'from-blue-50 to-indigo-50',
      accent: 'border-blue-200',
    },
    {
      title: 'JEE Advanced Crash Course',
      tag: 'Droppers Special',
      tagColor: 'bg-orange-100 text-orange-700',
      desc: 'Intensive 4-month crash course for JEE Advanced aspirants targeting AIR under 500.',
      faculty: 'Anil Sharma, Ex-FIITJEE HOD',
      students: '3,800+',
      rating: '4.8',
      duration: '4 Months',
      price: '₹55,000',
      originalPrice: '₹75,000',
      badge: 'NEW BATCH',
      badgeColor: 'bg-orange-500',
      features: ['Focus on IIT Topics', 'Previous Year Analysis', 'Rank Booster', 'Personal Mentorship'],
      gradient: 'from-orange-50 to-amber-50',
      accent: 'border-orange-200',
    },
    {
      title: 'JEE Main Target Series',
      tag: 'Class 12 & Droppers',
      tagColor: 'bg-purple-100 text-purple-700',
      desc: 'Strategically designed for maximum marks in JEE Main with a focus on NTA exam pattern.',
      faculty: 'Priya Nair, IIT Delhi',
      students: '9,200+',
      rating: '4.7',
      duration: '6 Months',
      price: '₹49,000',
      originalPrice: '₹65,000',
      badge: null,
      features: ['Chapter-wise Tests', 'Speed Techniques', 'Full Syllabus Coverage', 'Live Doubt Classes'],
      gradient: 'from-purple-50 to-pink-50',
      accent: 'border-purple-200',
    },
  ],
  NEET: [
    {
      title: 'NEET UG — Complete Foundation',
      tag: 'Most Popular',
      tagColor: 'bg-green-100 text-green-700',
      desc: 'Full-year program covering Biology, Physics, and Chemistry with NCERT-first approach and mock tests.',
      faculty: 'Dr. Sunita Rao, MBBS (AIIMS)',
      students: '18,700+',
      rating: '4.9',
      duration: '1 Year',
      price: '₹79,000',
      originalPrice: '₹1,10,000',
      badge: 'BESTSELLER',
      badgeColor: 'bg-green-600',
      features: ['NCERT-Based Classes', 'Medical Case Studies', 'Full Mock Tests', 'Biology Video Library'],
      gradient: 'from-green-50 to-emerald-50',
      accent: 'border-green-200',
    },
    {
      title: 'NEET Dropper Batch — Intensive',
      tag: 'Droppers Special',
      tagColor: 'bg-red-100 text-red-700',
      desc: 'Laser-focused batch for repeaters aiming for a 700+ score and AIIMS/JIPMER admission.',
      faculty: 'Dr. Vikram Khanna, MD, IOM',
      students: '5,100+',
      rating: '4.8',
      duration: '9 Months',
      price: '₹65,000',
      originalPrice: '₹90,000',
      badge: 'GUARANTEED RESULTS',
      badgeColor: 'bg-red-600',
      features: ['Rank Guarantee Program', '700+ Score Focus', 'Daily Revision Tests', 'Counselling Support'],
      gradient: 'from-red-50 to-rose-50',
      accent: 'border-red-200',
    },
    {
      title: 'NEET Crash Course (90 Days)',
      tag: 'Last-Minute Prep',
      tagColor: 'bg-teal-100 text-teal-700',
      desc: 'A high-intensity 90-day sprint covering high-weightage chapters with rapid revision techniques.',
      faculty: 'Dr. Anita Kapoor, BHU Varanasi',
      students: '7,300+',
      rating: '4.7',
      duration: '3 Months',
      price: '₹38,000',
      originalPrice: '₹55,000',
      badge: null,
      features: ['High Weightage Only', 'Rapid Revision', 'Past 10yr Papers', 'Speed Tests'],
      gradient: 'from-teal-50 to-cyan-50',
      accent: 'border-teal-200',
    },
  ],
  Board: [
    {
      title: 'Class 12 — CBSE Board Booster',
      tag: 'PCM + PCB',
      tagColor: 'bg-yellow-100 text-yellow-700',
      desc: 'Score 95%+ in CBSE Class 12 boards with structured chapter coverage, sample papers, and past year practice.',
      faculty: 'Ravi Joshi, 15 Yrs Experience',
      students: '22,000+',
      rating: '4.8',
      duration: '5 Months',
      price: '₹28,000',
      originalPrice: '₹40,000',
      badge: 'BESTSELLER',
      badgeColor: 'bg-yellow-500',
      features: ['All Subjects Covered', 'Sample Paper Series', 'Marking Scheme Tips', 'Live Q&A'],
      gradient: 'from-yellow-50 to-amber-50',
      accent: 'border-yellow-200',
    },
    {
      title: 'Class 10 — CBSE Final Prep',
      tag: 'Boards + Competitive',
      tagColor: 'bg-indigo-100 text-indigo-700',
      desc: 'Comprehensive board prep with a foundation for JEE/NEET. Covers Maths, Science, English & SST.',
      faculty: 'Meera Singh, M.Sc. Gold Medalist',
      students: '15,500+',
      rating: '4.9',
      duration: '4 Months',
      price: '₹22,000',
      originalPrice: '₹32,000',
      badge: null,
      features: ['5 Subjects', 'CBSE Pattern Tests', 'Concept Videos', 'Project Guidance'],
      gradient: 'from-indigo-50 to-violet-50',
      accent: 'border-indigo-200',
    },
    {
      title: 'Class 11 & 12 — Science Foundation',
      tag: 'PCM / PCB',
      tagColor: 'bg-pink-100 text-pink-700',
      desc: 'Dual benefit program aligned with boards and competitive exams for a stronger future.',
      faculty: 'Team of 8 Expert Faculty',
      students: '11,000+',
      rating: '4.7',
      duration: '1 Year',
      price: '₹52,000',
      originalPrice: '₹70,000',
      badge: 'DUAL BENEFIT',
      badgeColor: 'bg-pink-600',
      features: ['Boards + JEE/NEET Aligned', 'Weekly Tests', 'Concept Building', 'Live Support'],
      gradient: 'from-pink-50 to-rose-50',
      accent: 'border-pink-200',
    },
  ],
  Olympiad: [
    {
      title: 'International Maths Olympiad (IMO)',
      tag: 'Class 4-10',
      tagColor: 'bg-sky-100 text-sky-700',
      desc: 'From SOF IMO to IMO International — we prepare students for every level of mathematical excellence.',
      faculty: 'Prof. Aakash Gupta, Ph.D. IISc',
      students: '4,200+',
      rating: '4.9',
      duration: '6 Months',
      price: '₹18,000',
      originalPrice: '₹28,000',
      badge: 'GOLD MEDAL FOCUS',
      badgeColor: 'bg-sky-600',
      features: ['Level 1 & 2 Prep', 'Logic Puzzles', 'Past Olympiad Papers', 'Medal Strategy'],
      gradient: 'from-sky-50 to-cyan-50',
      accent: 'border-sky-200',
    },
    {
      title: 'National Science Olympiad (NSO)',
      tag: 'Class 4-10',
      tagColor: 'bg-lime-100 text-lime-700',
      desc: 'Sharpen scientific aptitude with concept-deep classes, experiential learning, and mock olympiads.',
      faculty: 'Dr. Pooja Sharma, M.Sc Chemistry',
      students: '3,400+',
      rating: '4.8',
      duration: '5 Months',
      price: '₹15,000',
      originalPrice: '₹22,000',
      badge: null,
      features: ['Physics + Chemistry + Bio', 'Aptitude Training', 'SOF Pattern', 'Scholarships'],
      gradient: 'from-lime-50 to-green-50',
      accent: 'border-lime-200',
    },
    {
      title: 'NTSE Scholarship Program',
      tag: 'Class 9-10',
      tagColor: 'bg-violet-100 text-violet-700',
      desc: 'India\'s top scholarship exam prep: MAT + SAT with intensive problem-solving and mental ability training.',
      faculty: 'Seema Kapoor, NTSE Mentor',
      students: '2,800+',
      rating: '4.9',
      duration: '8 Months',
      price: '₹20,000',
      originalPrice: '₹30,000',
      badge: 'SCHOLARSHIP PREP',
      badgeColor: 'bg-violet-600',
      features: ['MAT & SAT Both', 'Stage 1 & 2 Strategy', 'Mental Ability Focus', 'Mock Scholarship Tests'],
      gradient: 'from-violet-50 to-purple-50',
      accent: 'border-violet-200',
    },
  ],
};

const CourseCard = ({ course }) => {
  const { openModal } = useEnroll();
  return (
  <div className={`relative bg-gradient-to-br ${course.gradient} border ${course.accent} rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
    {/* Badge */}
    {course.badge && (
      <span className={`absolute top-4 right-4 ${course.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase`}>
        {course.badge}
      </span>
    )}

    <div className="p-7 flex flex-col flex-grow">
      {/* Tag + Title */}
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${course.tagColor}`}>{course.tag}</span>
      <h3 className="text-lg font-extrabold text-gray-900 leading-tight mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">{course.desc}</p>

      {/* Faculty */}
      <div className="flex items-center gap-2 mb-5 text-sm text-gray-500">
        <div className="h-7 w-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-base shadow-sm">🎓</div>
        <span className="font-medium text-gray-700">{course.faculty}</span>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 border-t border-black/5 pt-4">
        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gray-400" /> {course.duration}</span>
        <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-gray-400" /> {course.students}</span>
        <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> {course.rating}</span>
      </div>

      {/* Features */}
      <ul className="grid grid-cols-2 gap-1.5 mb-6">
        {course.features.map((f, i) => (
          <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span className="h-4 w-4 rounded-full bg-white border border-prepzo-green/20 flex items-center justify-center flex-shrink-0">
              <svg className="h-2.5 w-2.5 text-prepzo-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
        <div>
          <span className="text-2xl font-black text-prepzo-green">{course.price}</span>
          <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
        </div>
        <button onClick={() => openModal(course.title)} className="flex items-center gap-2 px-5 py-2.5 gradient-green text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg group-hover:-translate-x-0 hover:-translate-y-0.5">
          Enroll <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState('JEE');

  const tabIcons = { JEE: '⚛️', NEET: '🧬', Board: '📘', Olympiad: '🏅' };

  return (
    <div className="min-h-screen bg-prepzo-bg">
      {/* Page Hero */}
      <div className="gradient-green pt-14 pb-20 px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
          <Zap className="h-3.5 w-3.5 text-prepzo-yellow" />
          Explore Our Programs
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
          Find the Perfect Course
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
          From JEE to NEET, Board exams to Olympiads — we have a program crafted just for you.
        </p>

        {/* Stats Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: <Shield className="h-5 w-5" />, label: '50,000+ Students Enrolled' },
            { icon: <Award className="h-5 w-5" />, label: '95% Success Rate' },
            { icon: <Star className="h-5 w-5" />, label: '4.9/5 Avg Rating' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/80">
              <span className="text-prepzo-yellow">{stat.icon}</span>
              <span className="font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Selector — overlapping the hero */}
      <div className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex gap-2 flex-wrap sm:flex-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === cat
                  ? 'gradient-green text-white shadow-md'
                  : 'text-gray-500 hover:text-prepzo-green hover:bg-prepzo-light-green/50'
              }`}
            >
              <span className="text-base">{tabIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900">{activeTab} Courses</h2>
            <p className="text-sm text-gray-500 mt-1">{courseData[activeTab].length} programs available</p>
          </div>
          <span className="text-xs font-semibold text-prepzo-green bg-prepzo-light-green px-3 py-1.5 rounded-full border border-prepzo-green/20">
            {tabIcons[activeTab]} {activeTab} Category
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {courseData[activeTab].map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
