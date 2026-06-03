import React, { useContext } from 'react';
import { Search, TrendingUp, ShieldCheck, ShoppingBag } from 'lucide-react';
import { BazarContext } from '../../context/BazarContext';

const Banner = () => {
  const { searchQuery, setSearchQuery } = useContext(BazarContext);

  return (
    <div className="relative bg-linear-to-r from-indigo-600 via-blue-600 to-indigo-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-10 mt-4 md:mt-6">
      {/* Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wide mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
            লাইভ বাজার আপডেট
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-18 mb-5 drop-shadow-md">
            সঠিক দামে পণ্য কিনুন, <br className="hidden md:block"/>
            <span className="text-yellow-300">ভোক্তা অধিকার</span> নিশ্চিত করুন
          </h2>
          <p className="text-indigo-100 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            বাংলাদেশের প্রধান বাজারগুলোর নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ খুচরা ও পাইকারি দর জানুন মুহূর্তেই। সচেতন হোন, প্রতারণা থেকে বাঁচুন।
          </p>
          {/* Mobile Search Bar */}
          <div className="md:hidden relative group">
            <input 
              type="text" 
              placeholder="পণ্য খুঁজুন (যেমন: চাল, ডাল)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 px-5 py-3.5 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 backdrop-blur-md transition-all shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-200 group-focus-within:text-white" />
          </div>
        </div>
        {/* Right Content */}
        <div className="hidden md:flex flex-col gap-4 w-full md:w-1/3">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white hover:bg-white/20 transition-all duration-300 cursor-default shadow-lg">
            <div className="bg-white/20 p-3 rounded-xl">
              <ShieldCheck className="w-7 h-7 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-bold text-lg">সঠিক তথ্য</h4>
              <p className="text-xs text-indigo-100">যাচাইকৃত বাজারদর</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white hover:bg-white/20 transition-all duration-300 cursor-default shadow-lg">
            <div className="bg-white/20 p-3 rounded-xl">
              <ShoppingBag className="w-7 h-7 text-green-300" />
            </div>
            <div>
              <h4 className="font-bold text-lg">১৫০+ পণ্য</h4>
              <p className="text-xs text-indigo-100">সব ক্যাটাগরির আপডেট</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;