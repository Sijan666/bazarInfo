import React from 'react'
import MarketStats from '../layouts/MarketStats'
import FilterControls from '../layouts/FilterControls'
import ProductCard from '../layouts/ProductCard'

const Home = () => {
  return (
    <>
    <MarketStats/>
    <FilterControls/>
    <ProductCard/>
    </>
  )
}

export default Home