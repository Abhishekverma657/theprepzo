import React from 'react';
import { Award } from 'lucide-react';

const Scholarship = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="h-20 w-20 bg-prepzo-light-green rounded-full flex items-center justify-center mb-6">
        <Award className="h-10 w-10 text-prepzo-green" />
      </div>
      <h1 className="text-4xl font-black text-gray-900 mb-4">Prepzo Scholarship Program</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Get up to 100% scholarship on our premium courses. Our scholarship test will be announced soon. Register your interest to get notified.
      </p>
      <button className="mt-8 px-8 py-4 bg-prepzo-yellow text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg">
        Register Interest
      </button>
    </div>
  );
};

export default Scholarship;
