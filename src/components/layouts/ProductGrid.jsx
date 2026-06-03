import React, { useContext, useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard'; 
import { BazarContext } from '../../context/BazarContext';

const ProductGrid = () => {
    const { filteredProducts, activeCategory, searchQuery } = useContext(BazarContext);
    
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;

    const [prevCategory, setPrevCategory] = useState(activeCategory);
    const [prevSearch, setPrevSearch] = useState(searchQuery);

    if (activeCategory !== prevCategory || searchQuery !== prevSearch) {
        setCurrentPage(1);
        setPrevCategory(activeCategory);
        setPrevSearch(searchQuery);
    }

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 mb-8">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">কোনো পণ্য পাওয়া যায়নি!</h3>
                <p className="text-slate-500">অন্য কোনো নাম লিখে খুঁজুন অথবা "সবগুলো" ক্যাটাগরি সিলেক্ট করুন।</p>
            </div>
        );
    }

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const getPaginationItems = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, '...', totalPages];
        } 
        else if (currentPage >= totalPages - 2) {
            return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } 
        else {
            return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10 px-2">
                    {/* prev */}
                    <button 
                        onClick={handlePrevious} 
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                            currentPage === 1 
                                ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}>
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <div className="flex flex-wrap items-center justify-center gap-1 md:gap-1.5">
                        {getPaginationItems().map((page, index) => {
                            if (page === '...') {
                                return (
                                    <span key={index} className="px-1 md:px-2 text-slate-400 font-medium">
                                        ...
                                    </span>
                                );
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg text-xs md:text-sm font-semibold transition-colors cursor-pointer ${
                                        currentPage === page
                                            ? 'bg-slate-900 text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                    {/* next */}
                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                            currentPage === totalPages 
                                ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}>
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;