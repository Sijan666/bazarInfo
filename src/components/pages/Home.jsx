import React from 'react';
import CategoryFilter from '../layouts/CategoryFilter';
import Banner from '../layouts/Banner';
import ProductGrid from '../layouts/ProductGrid';

const Home = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 mt-10">
      <Banner />
      <CategoryFilter />
      <ProductGrid />
    </main>
  );
};

export default Home;