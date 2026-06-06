import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

import imgShubhran from '../assets/testimonial/Shubhran Sharma.jpeg';
import imgAditya from '../assets/testimonial/Aditya.png';
import imgRitik from '../assets/testimonial/Ritik.jpeg';
import imgPriyam from '../assets/testimonial/Priyam Vatsa.jpeg';
import imgPranav from '../assets/testimonial/Pranav Vatsa.jpeg';
import imgUday from '../assets/testimonial/Uday.jpeg';
import imgHansika from '../assets/testimonial/Hansika Photo.jpeg';
import imgSangeeta from '../assets/testimonial/Sangeeta Photo.jpeg';

const testimonials = [
  {
    body: "Ritansha Ma’am played a key role in my JEE preparation. Her clear teaching, constant support, and personalized guidance helped me strengthen my Chemistry concepts and improve my overall performance. What sets her apart is her genuine concern for her students. She was always available to clear doubts, motivate me during challenging times, and help me stay focused on my goals. I am truly grateful for her mentorship and the confidence she instilled in me throughout my JEE journey.",
    author: 'Shubhran Sharma',
    handle: 'JEE Advance Rank 47',
    image: imgShubhran,
    initials: 'SS',
    color: 'bg-blue-600'
  },
  {
    body: "I am incredibly grateful to my Chemistry Teacher and Mentor : Ritansha Mam for her exceptional Guidance in Chemistry during my 11th and 12th standards. Her absolute Mastery over Organic, Physical and Inorganic Chemistry, simplified the Toughest JEE Concepts and completely transformed my Preperation. Ritansha Mam was always there to resolve My Doubts. Thanks to her tireless efforts & constant Motivation, I achieved 99 percentile in JEE Mains and secured Rank 1727 in JEE Adv. She is a Phenomenal Teacher & a true Mentor. I highly Recommend her to every JEE Aspirant!",
    author: 'Aditya',
    handle: 'Rank 1727 in JEE Adv.',
    image: imgAditya,
    initials: 'AD',
    color: 'bg-green-600'
  },
  {
    body: "Cracking the JEE Advanced 2026 Examination has been one of the most challenging rewarding milestone of my life. I Obtained a score of 169/360 in JEE Advanced 2026 with 67/120 in chemistry, and I gave a massive part of my success to my chemistry teacher:- Ritansha Hada. Her conceptual clarity was absolute and was crucial in building my fundamental understanding from ground. Ritansha mam was always there to resolve my doubts, no matter small or complex, and answered. I am deeply grateful to her for her unwavering support, mentorship I couldn't have navigated the intense pressure of JEE advanced with without her. Thank You!!!",
    author: 'Ritik',
    handle: 'JEE Adv 2026 (3317)',
    image: imgRitik,
    initials: 'RT',
    color: 'bg-purple-600'
  },
  {
    body: "To state that Ritansha Ma'am played a crucial role in my JEE preparation would be an underestimation. With her guidance, I not only mastered Chemistry, but also achieved an impressive score of 99.9 percentile (scoring 91/100), making a huge contribution to my total percentile of 99.88%, along with a respectable 64/120 in the JEE Advanced 2026. The level of concern she has about her students' problems truly sets her apart. She was always available and ready to break down complex concepts for me, and her tailored teaching strategy established a unique relationship between us — one that could help many others to pass the tough period of preparing for the exam successfully.",
    author: 'Priyam Vatsa',
    handle: 'JEE Advance Rank – 6331',
    image: imgPriyam,
    initials: 'PV',
    color: 'bg-orange-600'
  },
  {
    body: "Ritansha Ma'am did far more than just help me prepare for JEE — her impact was truly beyond words. Under her guidance, I scored 99 percentile in JEE Mains Session 2. I also managed to score 51/120 in JEE Advanced 2026 (Chemistry), which wouldn't have been possible without her support. What makes her stand out is how genuinely she cares about her students. She was always available whenever I needed help, and she took the time to understand my strengths and weaknesses so she could teach me in a way that actually worked for me. This made our student-teacher bond something special — the kind that makes even the toughest exam preparation feel manageable.",
    author: 'Pranav Vatsa',
    handle: 'JEE Advance Rank – 18905',
    image: imgPranav,
    initials: 'PV',
    color: 'bg-indigo-600'
  },
  {
    body: "Ritansha Ma'am is an exceptional educator who completely transformed how I approach complex scientific concepts. As a current B.Tech CSE student at IIT Patna, I can confidently say that the strong foundational chemistry knowledge and analytical skills I developed under her guidance have been invaluable to my academic journey. Her patience, structured teaching methodology, and ability to break down intricate topics made learning genuinely engaging. I am incredibly grateful for her mentorship.",
    author: 'Uday Dubey',
    handle: 'B.Tech CSE, IIT Patna',
    image: imgUday,
    initials: 'UD',
    color: 'bg-teal-600'
  },
  {
    body: "My Name is Hansika Agarwal, I am 1st year MBBS student at Government medical college Auraiya. Ritansha ma'am was my Chemistry teacher during NEET preperation In 11th and 12th grade. She played a pivotal role in helping me secure admission to a government medical college in my First attempt. Her exceptional teaching methodology, constant guidance, and unwavering support transformed chemistry into one of my strongest subjects. She ensured that every Concept was throroughly understood, building a strong foundation from basic principles to advanced applications. Because of these reasons I was able to score good marks in chemistry. What truly set her apart was her focus on strategic Problem-solving and exam-oriented preparation. She trained us to approach difficult and tricky questions with clarity, speed and accuracy, even under intense exam pressure. Through regular assessments, detailed doubt-solving sessions, and personalized mentoring, she consistently helped me improve my Performance and confidence. Beyond academics, she motivated me to stay disciplined, focused, and mentally composed throughout the preparation journey. Her encouragement and mentorship were instrumental in enabling me to perform at my best on exam day. I sincerely credit her guidance as one of the key reasons behind my success in securing a government medical college seat in my very first attempt.",
    author: 'Hansika Agarwal',
    handle: 'NEET-UG',
    image: imgHansika,
    initials: 'HA',
    color: 'bg-pink-600'
  },
  {
    body: "I would like to express my deepest gratitude and sincere appreciation to you ritansha maam for your exceptional guidance and unwaving dedication as my chemistry teacher. your passion for the subject, combined with your patience and clarity in teaching, transformed what once felt challenging into something truly engaging and understandable. you always believed in me, even when I doubted myself and your constant encouragement kept me motivated throughout this journey. Thank you for being such an inspiring teacher and mentor. I will always carry your lesson with me.",
    author: 'Sangeeta Manna',
    handle: 'MBBS, Lady Hardinge Medical College',
    image: imgSangeeta,
    initials: 'SM',
    color: 'bg-rose-600'
  }
];

const TestimonialCard = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;
  const shouldTruncate = t.body.length > maxLength;

  return (
    <div className="relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col z-10 shadow-sm">
      <Quote className="absolute -top-4 -right-4 h-24 w-24 text-prepzo-green/5 -rotate-12 transition-transform group-hover:rotate-0 duration-500" />

      <div className="flex gap-1 mb-5 relative z-10">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-prepzo-yellow text-prepzo-yellow" />
        ))}
      </div>

      <div className="flex-grow relative z-10 flex flex-col">
        <p 
          className="text-gray-700 leading-relaxed text-[15px] italic transition-all duration-300"
          style={!isExpanded && shouldTruncate ? {
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          } : {}}
        >
          "{t.body}"
        </p>
        
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-prepzo-green font-bold text-sm mt-3 hover:text-prepzo-yellow transition-colors self-start inline-flex items-center gap-1"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 border-t border-gray-100 pt-5 mt-6 relative z-10">
        {t.image ? (
          <img src={t.image} alt={t.author} className="h-12 w-12 rounded-full object-cover flex-shrink-0 shadow-inner" />
        ) : (
          <div className={`h-12 w-12 rounded-full ${t.color} flex items-center justify-center text-white font-extrabold text-base flex-shrink-0 shadow-inner`}>
            {t.initials}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900 leading-tight">{t.author}</p>
          <p className="text-xs text-prepzo-green font-bold mt-1">{t.handle}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-prepzo-yellow-light/40 rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-prepzo-light-green/40 rounded-full blur-3xl opacity-50 -z-0 -translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-prepzo-green font-bold text-sm uppercase tracking-widest bg-prepzo-light-green/60 px-5 py-2 rounded-full border border-prepzo-green/20 mb-4 backdrop-blur-sm">
            Student Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Hear from our <span className="text-prepzo-green">top achievers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">Real stories from students who trusted Prepzo and conquered their exams.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid mb-6">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-20 gradient-green rounded-[2rem] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-white font-black text-3xl sm:text-4xl mb-2">Ready to write your success story?</h3>
            <p className="text-white/90 text-lg">Join Prepzo today and start your journey towards excellence.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
             <a href="tel:+918796339455" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-prepzo-green font-black rounded-full hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-xl text-lg">
              📞 +91 87963 39455
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

