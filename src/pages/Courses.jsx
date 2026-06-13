import React, { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Zap, Shield, Award, Target, BookOpen, Activity } from 'lucide-react';
import { useEnroll } from '../context/EnrollContext';

const courseData = {
  JEE: [
    {
      _id: 'jee1',
      badge: 'Most Preferred',
      badgeColor: 'bg-blue-500',
      title: 'JEE Main + Advanced Complete Program',
      desc: 'A comprehensive classroom + test preparation program for students targeting top engineering colleges through JEE Main and Advanced.',
      faculty: 'Mentored by Experienced IIT Alumni & Subject Experts',
      features: ['600+ Hours of Interactive Classes', 'Weekly Practice Tests & DPPs', 'Advanced Concept Building Sessions', 'Dedicated Doubt Solving Support'],
      duration: 'Duration: 1 Year',
      students: '10,000+ Students Enrolled',
      rating: 'Highly Rated by Aspirants',
      price: 'Starting at ₹88,999',
      btn: 'Enroll Now →',
      gradient: 'from-blue-50 to-white',
      accent: 'border-blue-200',
    },
    {
      _id: 'jee2',
      badge: 'Limited Seats',
      badgeColor: 'bg-red-500',
      title: 'JEE Advanced Intensive Batch',
      desc: 'An accelerated preparation program specially crafted for high-performing students aiming for top AIR rankings.',
      faculty: 'Guided by Senior JEE Mentors & Problem-Solving Experts',
      features: ['Advanced Level Practice Problems', 'Rank Improvement Strategy Sessions', 'Previous Year Question Analysis', 'Personal Mentorship & Monitoring'],
      duration: 'Focused Small Batch Learning',
      students: 'High Performance Training',
      rating: '',
      price: 'Starting at ₹54,999',
      btn: 'Join Batch →',
      gradient: 'from-indigo-50 to-white',
      accent: 'border-indigo-200',
    },
    {
      _id: 'jee3',
      badge: 'For Class 12 & Droppers',
      badgeColor: 'bg-purple-500',
      title: 'JEE Main Score Booster Course',
      desc: 'Designed to maximize performance in JEE Main with smart preparation strategies, speed improvement, and exam-focused practice.',
      faculty: 'Expert Faculty for Physics, Chemistry & Mathematics',
      features: ['Full Syllabus Revision', 'Chapter-wise Mock Tests', 'Speed & Accuracy Training', 'Live Doubt Clearing Sessions'],
      duration: 'Exam-Oriented Preparation',
      students: 'Structured Practice Modules',
      rating: '',
      price: 'Starting at ₹48,999',
      btn: 'Start Learning',
      gradient: 'from-violet-50 to-white',
      accent: 'border-violet-200',
    }
  ],
  NEET: [
    {
      _id: 'neet1',
      badge: 'Top Rated Program',
      badgeColor: 'bg-green-500',
      title: 'NEET UG Complete Preparation',
      desc: 'A structured long-term program covering Physics, Chemistry, and Biology with concept-based learning, regular assessments, and intensive practice support.',
      faculty: 'Expert Medical Faculty',
      features: ['NCERT-Focused Learning Approach', 'Full-Length Mock Test Series', 'Concept Strengthening Sessions', 'Comprehensive Biology Practice Modules'],
      duration: 'Duration: 1 Year',
      students: 'Personalized Progress Tracking',
      rating: 'Regular Performance Analysis',
      price: 'Starting from ₹78,999',
      btn: 'Enroll Now →',
      gradient: 'from-green-50 to-white',
      accent: 'border-green-200',
    },
    {
      _id: 'neet2',
      badge: 'High Performance Batch',
      badgeColor: 'bg-emerald-500',
      title: 'NEET Repeaters Intensive Program',
      desc: 'A focused preparation program for droppers aiming to improve scores through disciplined revision, advanced practice, and exam-oriented preparation.',
      faculty: 'Guided Preparation Roadmap',
      features: ['Daily Revision & Practice Tests', 'High-Weightage Topic Coverage', 'Strategic Question Solving Sessions', 'Guided Preparation Roadmap'],
      duration: 'Duration: 1 Year',
      students: 'Structured Study Schedule',
      rating: 'Performance Monitoring Support',
      price: 'Starting from ₹64,999',
      btn: 'Enroll Now→',
      gradient: 'from-teal-50 to-white',
      accent: 'border-teal-200',
    },
    {
      _id: 'neet3',
      badge: 'Fast-Track Preparation',
      badgeColor: 'bg-cyan-500',
      title: 'NEET Rapid Revision Course',
      desc: 'A short-term intensive revision program designed to strengthen important concepts, improve speed, and maximize exam readiness before NEET.',
      faculty: 'Smart Revision Strategy',
      features: ['Rapid Syllabus Revision', 'Important Questions Practice', 'Previous Year Paper Discussions', 'Speed & Accuracy Enhancement'],
      duration: 'Duration: 90 Days',
      students: 'Exam-Focused Practice Sessions',
      rating: 'Smart Revision Strategy',
      price: 'Starting from ₹37,999',
      btn: 'Enroll Now→',
      gradient: 'from-cyan-50 to-white',
      accent: 'border-cyan-200',
    }
  ],
  Board: [
    {
      _id: 'board1',
      badge: 'Most Enrolled',
      badgeColor: 'bg-yellow-500',
      title: 'CBSE Board Excellence Program',
      desc: 'A complete board preparation program focused on concept clarity, structured revision, sample paper practice, and scoring techniques for Class 12 students.',
      faculty: 'Expert Board Faculty',
      features: ['Complete Subject-Wise Coverage', 'Chapter Revision & Practice Tests', 'Board Pattern Sample Papers', 'Answer Writing & Presentation Tips'],
      duration: 'Duration: 5 Months',
      students: 'Regular Performance Evaluation',
      rating: 'Smart Revision Strategy',
      price: 'Starting from ₹27,999',
      btn: 'Enroll Now →',
      gradient: 'from-yellow-50 to-white',
      accent: 'border-yellow-200',
    },
    {
      _id: 'board2',
      badge: 'Boards + Foundation',
      badgeColor: 'bg-orange-500',
      title: 'Class 10 Complete Success Program',
      desc: 'A balanced preparation program designed to help students excel in board exams while building a strong academic foundation for future competitive studies.',
      faculty: 'Foundation Experts',
      features: ['Full Syllabus Preparation', 'Concept-Based Learning Modules', 'Regular Assessments & Practice', 'Interactive Doubt Support Sessions'],
      duration: 'Duration: 4 Months',
      students: 'Multi-Subject Coverage',
      rating: 'Structured Learning Plan',
      price: 'Starting from ₹21,999',
      btn: 'Start Learning →',
      gradient: 'from-orange-50 to-white',
      accent: 'border-orange-200',
    },
    {
      _id: 'board3',
      badge: 'Dual Preparation Advantage',
      badgeColor: 'bg-amber-500',
      title: 'Science Foundation Program (PCM / PCB)',
      desc: 'An integrated academic program combining board syllabus preparation with early-stage competitive exam readiness for science students.',
      faculty: 'Mentorship & Support',
      features: ['Boards + Competitive Alignment', 'Concept Strengthening Sessions', 'Weekly Practice & Assessments', 'Live Mentorship & Academic Support'],
      duration: 'Duration: 1 Year',
      students: 'Stream-Specific Learning Paths',
      rating: 'Continuous Progress Tracking',
      price: 'Starting from ₹51,999',
      btn: 'Join Program →',
      gradient: 'from-amber-50 to-white',
      accent: 'border-amber-200',
    }
  ],
  Olympiad: [
    {
      _id: 'oly1',
      badge: 'Class 4 – 10',
      badgeColor: 'bg-pink-500',
      title: 'International Maths Olympiad (IMO)',
      desc: 'A structured olympiad preparation program designed to strengthen logical thinking, problem-solving ability, and competitive exam performance for national and international olympiads.',
      faculty: 'Top Achievers Program',
      features: ['Level 1 & Level 2 Olympiad Preparation', 'Advanced Logical Reasoning Practice', 'Previous Year Olympiad Question Sets', 'Smart Accuracy & Time Management Training'],
      duration: 'Duration: 6 Months',
      students: 'Interactive Learning Sessions',
      rating: 'Performance Tracking & Analysis',
      price: 'Starting from ₹17,999',
      btn: 'Enroll Now →',
      gradient: 'from-pink-50 to-white',
      accent: 'border-pink-200',
    },
    {
      _id: 'oly2',
      badge: 'Class 4 – 10',
      badgeColor: 'bg-rose-500',
      title: 'National Science Olympiad (NSO)',
      desc: 'A concept-focused olympiad preparation program crafted to develop scientific thinking, analytical skills, and problem-solving ability through interactive learning and structured practice.',
      faculty: 'Science Excellence Program',
      features: ['Physics, Chemistry & Biology Foundation', 'Scientific Reasoning & Aptitude Training', 'Olympiad-Level Practice Worksheets', 'Mock Tests Based on Latest Exam Patterns'],
      duration: 'Duration: 5 Months',
      students: 'Activity-Based Learning Sessions',
      rating: 'Continuous Performance Evaluation',
      price: 'Starting from ₹14,999',
      btn: 'Enroll Now →',
      gradient: 'from-rose-50 to-white',
      accent: 'border-rose-200',
    },
    {
      _id: 'oly3',
      badge: 'Class 9 – 10',
      badgeColor: 'bg-fuchsia-500',
      title: 'NTSE Preparation Program',
      desc: 'A specialized scholarship-focused program designed to strengthen mental ability, analytical reasoning, and academic problem-solving skills for NTSE and other competitive scholarship exams.',
      faculty: 'Scholarship Achievers Program',
      features: ['MAT & SAT Comprehensive Preparation', 'Logical & Analytical Reasoning Practice', 'Scholarship-Oriented Mock Test Series', 'Stage-Wise Exam Preparation Strategy'],
      duration: 'Duration: 8 Months',
      students: 'Advanced Problem-Solving Sessions',
      rating: 'Performance Analysis & Progress Tracking',
      price: 'Starting from ₹19,999',
      btn: 'Enroll Now →',
      gradient: 'from-fuchsia-50 to-white',
      accent: 'border-fuchsia-200',
    }
  ],
  Foundation: [
    {
      _id: 'found1',
      badge: 'OLYMPIAD + NCERT',
      badgeColor: 'bg-blue-500',
      title: 'Class 6',
      desc: 'Build strong fundamentals in Mathematics and Science with concept-based learning and Olympiad preparation.',
      features: ['Olympiads + NCERT Course'],
      duration: 'Duration: 1 Year',
      price: '₹38,999 + Taxes',
      btn: 'Enroll Now',
      gradient: 'from-blue-50 to-white',
      accent: 'border-blue-200',
    },
    {
      _id: 'found2',
      badge: 'OLYMPIAD + NCERT',
      badgeColor: 'bg-green-500',
      title: 'Class 7',
      desc: 'Strengthen analytical thinking and academic concepts through structured NCERT and Olympiad preparation.',
      features: ['Olympiads + NCERT Course'],
      duration: 'Duration: 1 Year',
      price: '₹38,999',
      btn: 'Enroll Now',
      gradient: 'from-green-50 to-white',
      accent: 'border-green-200',
    },
    {
      _id: 'found3',
      badge: 'ADVANCED FOUNDATION',
      badgeColor: 'bg-purple-500',
      title: 'Class 8',
      desc: 'Develop problem-solving abilities and prepare for competitive exams while mastering school academics.',
      features: ['Olympiads + NCERT Course'],
      duration: 'Duration: 1 Year',
      price: '₹40,499',
      btn: 'Enroll Now',
      gradient: 'from-purple-50 to-white',
      accent: 'border-purple-200',
    },
    {
      _id: 'found4',
      badge: 'COMPETITIVE EDGE',
      badgeColor: 'bg-orange-500',
      title: 'Class 9',
      desc: 'Build advanced concepts and critical thinking skills to excel in school exams and Olympiads.',
      features: ['Olympiads + NCERT Course'],
      duration: 'Duration: 1 Year',
      price: '₹42,499',
      btn: 'Enroll Now',
      gradient: 'from-orange-50 to-white',
      accent: 'border-orange-200',
    },
    {
      _id: 'found5',
      badge: 'BOARD + OLYMPIAD',
      badgeColor: 'bg-red-500',
      title: 'Class 10',
      desc: 'Achieve excellence in board examinations while building a strong foundation for future competitive exams.',
      features: ['Olympiads + NCERT Course'],
      duration: 'Duration: 1 Year',
      price: '₹42,499',
      btn: 'Enroll Now',
      gradient: 'from-red-50 to-white',
      accent: 'border-red-200',
    }
  ]
};

const categories = ['JEE', 'NEET', 'Board', 'Olympiad', 'Foundation'];
const tabIcons = { JEE: '⚛️', NEET: '🧬', Board: '📘', Olympiad: '🏅', Foundation: '📖' };

const CourseCard = ({ course }) => {
  const { openModal } = useEnroll();
  return (
    <div className={`relative bg-gradient-to-br ${course.gradient} border ${course.accent} rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
      {course.badge && (
        <span className={`absolute top-4 right-4 ${course.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase`}>
          {course.badge}
        </span>
      )}

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-2 mt-4">{course.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{course.desc}</p>

        {course.faculty && (
          <div className="flex items-start gap-2 mb-5 text-sm text-gray-500">
            <span className="font-semibold text-gray-800 border-l-2 border-prepzo-green pl-2">{course.faculty}</span>
          </div>
        )}

        {/* Stats */}
        {(course.duration || course.students || course.rating) && (
          <div className="flex flex-col gap-2 text-xs text-gray-500 mb-5 border-t border-black/5 pt-4">
            {course.duration && <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gray-400" /> {course.duration}</span>}
            {course.students && <span className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-gray-400" /> {course.students}</span>}
            {course.rating && <span className="flex items-center gap-2"><Activity className="h-3.5 w-3.5 text-gray-400" /> {course.rating}</span>}
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2 mb-6 border-t border-black/5 pt-4">
          {course.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="h-4 w-4 rounded-full bg-white border border-prepzo-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="h-2.5 w-2.5 text-prepzo-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex-grow" />

        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-black/5">
          <span className="text-lg xl:text-xl font-black text-prepzo-green">{course.price}</span>
          <button onClick={() => openModal(course.title)} className="flex-1 min-w-[110px] flex justify-center items-center gap-2 px-4 py-2.5 gradient-green text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-md whitespace-nowrap">
            {course.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState('JEE');

  const tabHeadings = {
    JEE: {
      heading: 'Programs Built for Serious Aspirants',
      sub: 'Choose the right learning path designed to help students excel in competitive exams, board preparation, and olympiads.'
    },
    NEET: {
      heading: 'NEET Programs Designed for Future Medical Aspirants',
      sub: 'Comprehensive preparation programs focused on concept clarity, NCERT mastery, and consistent performance improvement.'
    },
    Board: {
      heading: 'Academic Excellence & Foundation Programs',
      sub: 'Well-structured programs designed to strengthen board performance while building a solid foundation for future competitive exams.'
    },
    Olympiad: {
      heading: 'Programs Designed for Every Academic Goal',
      sub: 'Structured learning paths built to help students succeed in competitive exams, boards, and olympiads.'
    },
    Foundation: {
      heading: 'Foundation Programs (Class 6–10)',
      sub: 'Strengthen concepts, excel in Olympiads, and master NCERT with a structured foundation program for Classes 6 to 10.'
    }
  };

  return (
    <div className="min-h-screen bg-prepzo-bg">
      <div className="gradient-green pt-14 pb-20 px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
          <Zap className="h-3.5 w-3.5 text-prepzo-yellow" />
          EXPLORE OUR PROGRAMS
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
          Find the Perfect Course
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
          From JEE to NEET, Boards to Olympiads — choose the program designed for your success.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: <Shield className="h-5 w-5" />, label: '50,000+ Students Enrolled' },
            { icon: <Award className="h-5 w-5" />, label: '95% Success Rate' },
            { icon: <Star className="h-5 w-5 fill-current" />, label: '4.9/5 Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/80">
              <span className="text-prepzo-yellow">{stat.icon}</span>
              <span className="font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex gap-2 flex-wrap sm:flex-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === cat
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

      <div className={`mx-auto px-4 sm:px-6 lg:px-8 py-14 ${activeTab === 'Foundation' ? 'max-w-[1400px]' : 'max-w-7xl'}`}>
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-3">{tabHeadings[activeTab].heading}</h2>
          <p className="text-gray-600">{tabHeadings[activeTab].sub}</p>
        </div>

        <div className={`grid grid-cols-1 ${activeTab === 'Foundation' ? 'md:grid-cols-3 lg:grid-cols-5 gap-4' : 'md:grid-cols-2 xl:grid-cols-3 gap-7'}`}>
          {courseData[activeTab]?.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
