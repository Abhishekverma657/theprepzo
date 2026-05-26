import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PrepzoStore = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="h-20 w-20 bg-prepzo-light-green rounded-full flex items-center justify-center mb-6">
        <ShoppingBag className="h-10 w-10 text-prepzo-green" />
      </div>
      <h1 className="text-4xl font-black text-gray-900 mb-4">Prepzo Official Store</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Buy official Prepzo merchandise, hardcopy study materials, planners, and more. Our online store is launching soon!
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="h-32 w-32 bg-gray-100 rounded-xl mb-4 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepzoStore;
