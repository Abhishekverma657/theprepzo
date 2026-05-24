import { Trophy, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const toppers = [
  { name: 'Aarav Gupta', rank: 'AIR 1', exam: 'JEE Advanced 2024', score: '341/360', color: 'gradient-yellow', trophy: '🥇' },
  { name: 'Priya Patel', rank: 'AIR 5', exam: 'NEET UG 2024', score: '715/720', color: 'gradient-green', trophy: '🥈' },
  { name: 'Rohan Sharma', rank: 'AIR 12', exam: 'JEE Main 2024', score: '100 %ile', color: 'gradient-green', trophy: '🥉' },
  { name: 'Sneha Reddy', rank: 'AIR 24', exam: 'NEET UG 2024', score: '705/720', color: 'gradient-green', trophy: '🏅' },
  { name: 'Karan Singh', rank: 'AIR 45', exam: 'JEE Advanced 2024', score: '298/360', color: 'gradient-green', trophy: '🏅' },
  { name: 'Megha Jain', rank: 'AIR 56', exam: 'NEET UG 2024', score: '700/720', color: 'gradient-green', trophy: '🏅' },
];

const stats = [
  { num: '500+', label: 'Students in Top 1000 AIR (JEE)' },
  { num: '800+', label: 'NEET Students scored 600+' },
  { num: '200+', label: 'Selections in AIIMS & Top NITs' },
  { num: '95%', label: 'Students improve score in 90 days' },
];

const Results = () => (
  <div className="min-h-screen bg-prepzo-bg">
    {/* Hero */}
    <div className="gradient-green py-16 px-4 text-center text-white">
      <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
        <Trophy className="h-4 w-4 text-prepzo-yellow" /> Hall of Fame
      </div>
      <h1 className="text-4xl sm:text-5xl font-black mb-4">Our Students Achieve the Impossible</h1>
      <p className="text-white/70 text-lg max-w-xl mx-auto">Consistent results, year after year. Here are some of our brightest stars.</p>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <p className="text-3xl font-black text-prepzo-green mb-1">{s.num}</p>
            <p className="text-sm text-gray-600 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Toppers Grid */}
      <h2 className="text-2xl font-black text-gray-900 mb-7">⭐ Top Rankers 2024</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {toppers.map((t, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="gradient-green h-20 flex items-end px-6 pb-0 relative">
              <div className="absolute top-4 right-5 text-2xl">{t.trophy}</div>
              <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center translate-y-8 shadow-lg border-4 border-white text-2xl">
                {t.trophy}
              </div>
            </div>
            <div className="px-6 pt-12 pb-6">
              <span className="inline-block text-xs font-black text-white bg-prepzo-green px-3 py-1 rounded-full mb-3">{t.rank}</span>
              <h3 className="text-xl font-black text-gray-900">{t.name}</h3>
              <p className="text-sm text-prepzo-green font-semibold mt-1">{t.exam}</p>
              <p className="text-xs text-gray-500 mt-1">Score: <span className="font-bold text-gray-700">{t.score}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-black text-gray-900 text-2xl">You could be next! 🚀</p>
          <p className="text-gray-600 mt-2">Call <span className="font-bold text-prepzo-green">+91 93116 23522</span> to start your journey today.</p>
        </div>
        <div className="flex gap-3">
          <a href="tel:+919311623522" className="flex items-center gap-2 px-6 py-3.5 bg-prepzo-light-green border border-prepzo-green/20 text-prepzo-green font-bold rounded-full text-sm hover:bg-prepzo-green hover:text-white transition-all">
            <Phone className="h-4 w-4" /> 93116 23522
          </a>
          <Link to="/courses" className="flex items-center gap-2 px-6 py-3.5 gradient-green text-white font-bold rounded-full text-sm hover:opacity-90 transition-all">
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Results;
