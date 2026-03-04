import React from 'react';

const Header = () => {
  // Get current date to show users today's status
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Name */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
            Ajker<span className="text-blue-600">Dam</span>
          </h1>
          <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            Market Tracker
          </span>
        </div>

        {/* Search Input - Clean & Normal */}
        <div className="flex-1 max-w-xs mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search product (Rice, Egg, Oil)..."
              className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:border-blue-400 transition"
            />
          </div>
        </div>

        {/* Info Section (Instead of Login) */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:block text-right">
            <p className="text-[11px] text-gray-400 uppercase font-bold">Today's Date</p>
            <p className="text-sm font-semibold text-gray-700">{today}</p>
          </div>
          
          <div className="h-8 w-[1px] bg-gray-200 hidden sm:block"></div>

          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Compare
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
            Archive
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;