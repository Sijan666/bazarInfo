import React, { useContext } from 'react';
import { BazarContext } from '../../context/BazarContext';
import { 
  LayoutGrid, Wheat, Bean, Droplet, Sparkles, 
  Carrot, Fish, Apple, Milk, ShoppingBag 
} from 'lucide-react';

const getCategoryIcon = (categoryName, isActive) => {
  const iconClass = `w-7 h-7 transition-transform duration-300 ${
    isActive ? 'text-indigo-600 scale-110' : 'text-slate-500 group-hover:scale-110 group-hover:text-indigo-500'
  }`;

  switch (categoryName) {
    case 'সবগুলো': return <LayoutGrid className={iconClass} />;
    case 'চাল ও আটা': return <Wheat className={iconClass} />;
    case 'ডাল': return <Bean className={iconClass} />;
    case 'তেল': return <Droplet className={iconClass} />;
    case 'মশলা': return <Sparkles className={iconClass} />;
    case 'সবজি': return <Carrot className={iconClass} />;
    case 'মাছ ও মাংস': return <Fish className={iconClass} />;
    case 'ফলমূল': return <Apple className={iconClass} />;
    case 'দুগ্ধজাত পণ্য': return <Milk className={iconClass} />;
    case 'অন্যান্য মুদি': return <ShoppingBag className={iconClass} />;
    default: return <LayoutGrid className={iconClass} />;
  }
};

const CategoryFilter = () => {
  const { categories, activeCategory, setActiveCategory } = useContext(BazarContext);

  return (
    <div className="mb-10 w-full overflow-hidden">
      <div className="flex items-start gap-4 md:gap-8 overflow-x-auto pb-6 pt-4 px-2 scrollbar-hide snap-x snap-mandatory">
        {categories?.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="snap-center group flex flex-col items-center gap-3 min-w-[72px] outline-none"
            >
              {/* Circular Icon Box */}
              <div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-50 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                    : 'bg-white border border-slate-200 shadow-sm group-hover:border-indigo-200 group-hover:bg-slate-50 group-hover:shadow-md'
                }`}
              >
                {getCategoryIcon(category, isActive)}
              </div>
              {/* Category Text */}
              <span 
                className={`text-xs md:text-sm font-bold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-indigo-700' : 'text-slate-600 group-hover:text-slate-900'
                }`}
              >
                {category}
              </span>
              {/* Active Dot Indicator under text */}
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 mt-0.5 ${
                isActive ? 'bg-indigo-500 scale-100' : 'bg-transparent scale-0'
              }`}></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;