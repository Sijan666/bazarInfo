/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import { productsData, categories } from '../data/products';

export const BazarContext = createContext();

export const BazarProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState('সবগুলো');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = productsData.filter(product => {
        const matchesCategory = activeCategory === 'সবগুলো' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <BazarContext.Provider value={{
        categories,
        activeCategory, setActiveCategory,
        searchQuery, setSearchQuery,
        filteredProducts
        }}>
        {children}
        </BazarContext.Provider>
    );
};