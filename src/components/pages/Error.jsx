import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-slate-300 mb-4">৪0৪</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">পেজটি পাওয়া যায়নি!</h2>
      <p className="text-slate-500 mb-8">আপনি যে পেজটি খুঁজছেন তা হয়তো ডিলিট হয়ে গেছে বা লিঙ্কটি ভুল।</p>
      <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default Error;