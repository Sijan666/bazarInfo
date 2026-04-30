import React, { useContext } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../ui/ProductCard'; 
import { BazarContext } from '../../context/BazarContext';

const ProductGrid = () => {
    const { filteredProducts } = useContext(BazarContext);

    if (filteredProducts.length === 0) {
        return (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">কোনো পণ্য পাওয়া যায়নি!</h3>
            <p className="text-slate-500">অন্য কোনো নাম লিখে খুঁজুন অথবা "সবগুলো" ক্যাটাগরি সিলেক্ট করুন।</p>
        </div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    );
};

export default ProductGrid;