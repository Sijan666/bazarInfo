import React, { useContext } from 'react';
import { BazarContext } from '../../context/BazarContext';

const CategoryFilter = () => {
  const { categories, activeCategory, setActiveCategory } = useContext(BazarContext);

  return (
    <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;