import React from 'react';
import { BookOpen } from 'lucide-react';

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Prepzo Blogs</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights, tips, and strategies for crushing your competitive exams.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((blog) => (
          <div key={blog} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-prepzo-light-green/30 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-prepzo-green opacity-50" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-prepzo-yellow uppercase tracking-wider">Exam Tips</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">How to Manage Board Exams and JEE Preparation Together</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                Balancing board exams with competitive exam preparation can be daunting. Here are some proven strategies to help you excel in both without burning out.
              </p>
              <button className="text-sm font-bold text-prepzo-green hover:underline">Read Article &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
