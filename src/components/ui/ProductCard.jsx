import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const getTrendIndicator = (current, prev) => {
    const diff = current - prev;
    if (diff > 0) return (
      <div className="flex items-center gap-1 text-rose-500 bg-rose-50 px-2 py-1 rounded-md">
        <TrendingUp className="w-3.5 h-3.5" />
        <span className="text-xs font-bold">+{diff} ৳</span>
      </div>
    );
    if (diff < 0) return (
      <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">
        <TrendingDown className="w-3.5 h-3.5" />
        <span className="text-xs font-bold">{diff} ৳</span>
      </div>
    );
    return (
      <div className="flex items-center gap-1 text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
        <Minus className="w-3.5 h-3.5" />
        <span className="text-xs font-bold">অপরিবর্তিত</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 flex flex-col h-full group">
      {/* Top Section: Category & Unit */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-full tracking-wide">
          {product.category}
        </span>
        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
          {product.unit}
        </span>
      </div>
      {/* Product Name */}
      <div className="grow mb-5">
        <h3 className="text-[17px] font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
      </div>
      {/* Dashed Divider */}
      <div className="w-full border-t border-dashed border-slate-200 mb-4"></div>
      {/* Bottom Section: Price & Trend */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">বর্তমান বাজারদর</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 tracking-tight">৳{product.price}</span>
            {product.price !== product.prevPrice && (
              <span className="text-sm font-medium text-slate-400 line-through">
                ৳{product.prevPrice}
              </span>
            )}
          </div>
        </div>
        {/* Trend Indicator */}
        <div className="mb-1">
          {getTrendIndicator(product.price, product.prevPrice)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;