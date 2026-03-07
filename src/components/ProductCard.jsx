import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ProductCard = ({ product }) => {
  
  // Price badge generator logic
  const getPriceBadge = (current, prev) => {
    const diff = current - prev;
    if (diff > 0) {
      return (
        <div className="flex items-center gap-1.5 bg-rose-50 text-rose-600 px-2.5 py-1 rounded-md text-sm font-semibold border border-rose-100/50">
          <TrendingUp className="w-4 h-4" />
          <span>+{diff} ৳</span>
        </div>
      );
    } else if (diff < 0) {
      return (
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-sm font-semibold border border-emerald-100/50">
          <TrendingDown className="w-4 h-4" />
          <span>{diff} ৳</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1.5 bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md text-sm font-semibold border border-slate-200/50">
        <Minus className="w-4 h-4" />
        <span>অপরিবর্তিত</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 group cursor-default flex flex-col h-full">
      {/* Card Header (Category & Status) */}
      <div className="flex justify-between items-start mb-5">
        <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-lg font-medium group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
          {product.category}
        </span>
        {getPriceBadge(product.price, product.prevPrice)}
      </div>

      {/* Product Info */}
      <div className="grow">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
        <p className="text-sm font-medium text-slate-400 mb-6">পরিমাণ: {product.unit}</p>
      </div>

      {/* Price Section */}
      <div className="flex items-end justify-between mt-auto pt-5 border-t border-slate-100">
        <div>
          <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">বর্তমান দাম</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">৳{product.price}</span>
            {product.price !== product.prevPrice && (
              <span className="text-sm font-medium text-slate-400 line-through">৳{product.prevPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard