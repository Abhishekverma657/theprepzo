import React from 'react';
import { Newspaper } from 'lucide-react';

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
        <div className="h-14 w-14 bg-prepzo-light-green rounded-xl flex items-center justify-center flex-shrink-0">
          <Newspaper className="h-7 w-7 text-prepzo-green" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-gray-900">Latest News & Updates</h1>
          <p className="text-gray-600 mt-1">Official announcements, exam date changes, and more.</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {[1, 2, 3].map((news) => (
          <div key={news} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:border-prepzo-green/30 transition-colors">
            <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-xl flex-shrink-0"></div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-prepzo-yellow/10 text-prepzo-yellow text-xs font-bold rounded-full">Announcement</span>
                <span className="text-xs text-gray-500 font-medium">October 15, 2026</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">JEE Main 2027 Registration Dates Announced</h3>
              <p className="text-gray-600 text-sm">
                The National Testing Agency (NTA) has officially released the schedule for the upcoming JEE Main 2027 examinations. Students can start registering from next week.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
