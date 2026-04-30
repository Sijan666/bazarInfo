import React, { useContext } from 'react';
import { Search } from 'lucide-react';
import { BazarContext } from '../../context/BazarContext';

const Banner = () => {
  const { searchQuery, setSearchQuery } = useContext(BazarContext);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">নিত্যপ্রয়োজনীয় বাজারদর</h2>
        <p className="text-slate-500">ভোক্তা অধিকার নিশ্চিতে বাজারের সর্বশেষ আপডেট জানুন।</p>
      </div>
      <div className="md:hidden relative mb-8 group">
        <input 
          type="text" 
          placeholder="পণ্য খুঁজুন..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-200 text-slate-900 px-5 py-3 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500" />
      </div>
    </>
  );
};

export default Banner;