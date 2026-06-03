import React, { useContext, useState, useEffect } from 'react';
import { Search, CalendarDays, ShoppingCart, Clock } from 'lucide-react';
import { BazarContext } from '../../context/BazarContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(BazarContext);
  
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = currentDateTime.toLocaleTimeString('bn-BD', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-indigo-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <Link to={'/'}>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                বাজার<span className="text-indigo-600">ইনফো</span>
              </h1>
            </Link>
            {/* Date and Time Section */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-0.5">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>{formattedDate}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{formattedTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex relative w-96 group">
          <input 
            type="text" 
            placeholder="পণ্যের নাম খুঁজুন..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100/80 border border-slate-200 text-slate-900 px-5 py-2.5 pl-11 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;