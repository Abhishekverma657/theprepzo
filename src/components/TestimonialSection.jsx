import { Star, Quote } from 'lucide-react';

const testimonials = [
  { body: "Prepzo's faculty is on a completely different level. The way they explain complex JEE topics is unmatched. I cleared JEE Advanced with AIR 254 and couldn't have done it without Prepzo.", author: 'Rohan Sharma', handle: 'AIR 254 – JEE Advanced 2024', initials: 'RS', color: 'bg-blue-600' },
  { body: "I scored 685/720 in NEET after joining Prepzo's dropper batch. The test series gave me real exam confidence and the faculty is always available for doubts. Truly life-changing.", author: 'Priya Patel', handle: 'NEET UG 2024 – 685/720', initials: 'PP', color: 'bg-green-600' },
  { body: "The Foundation course from Class 9 built my concepts so strongly. When Class 11 started, I was already ahead of everyone. The Olympiad prep also got me a Silver medal in IMO!", author: 'Aarav Gupta', handle: 'NTSE Scholar & IMO Silver', initials: 'AG', color: 'bg-purple-600' },
  { body: "Flexible timings and recorded lectures were a lifesaver. I studied alongside school and still cracked JEE Main with 99.4 percentile. Prepzo makes it possible for everyone.", author: 'Sneha Reddy', handle: '99.4 Percentile – JEE Main 2024', initials: 'SR', color: 'bg-orange-600' },
];

const TestimonialSection = () => {
  return (
    <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-prepzo-yellow-light rounded-full blur-3xl opacity-60 -z-0"></div>
      <div className="absolute -top-10 left-0 w-72 h-72 bg-prepzo-light-green rounded-full blur-3xl opacity-60 -z-0"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block text-prepzo-green font-bold text-sm uppercase tracking-widest bg-prepzo-light-green px-4 py-1.5 rounded-full border border-prepzo-green/20 mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Our students <span className="text-prepzo-green">speak</span> for us
          </h2>
          <p className="mt-4 text-lg text-gray-600">Real stories from real achievers who trusted Prepzo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              {/* Quote icon watermark */}
              <Quote className="absolute -top-2 -right-2 h-20 w-20 text-prepzo-green/5 -rotate-12" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-prepzo-yellow text-prepzo-yellow" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-base mb-6 italic">"{t.body}"</p>

              <div className="flex items-center gap-3 border-t border-gray-200 pt-5">
                <div className={`h-12 w-12 rounded-full ${t.color} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-sm text-prepzo-green font-semibold">{t.handle}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 gradient-green rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white font-black text-2xl sm:text-3xl">Ready to write your success story?</p>
            <p className="text-white/70 mt-1">Call us now: <span className="text-prepzo-yellow font-bold">+91 87963 39455</span></p>
          </div>
          <a href="tel:+918796339455" className="flex-shrink-0 flex items-center gap-2 px-8 py-4 bg-prepzo-yellow text-white font-bold rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg text-base">
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

