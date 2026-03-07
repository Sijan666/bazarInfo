// 📂 src/App.jsx
import React, { useState, useEffect } from 'react'
import { initialProducts } from './constants'
import Header from '../src/components/layouts/Header'
import ProductCard from '../src/components/layouts/ProductCard'

export default function App () {
  const [products, setProducts] = useState(initialProducts)
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [ticker, setTicker] = useState(0)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTicker(t => t + 1), 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSave = id => {
    const val = parseFloat(editValue)
    if (!isNaN(val) && val > 0) {
      setProducts(prev =>
        prev.map(p =>
          p.id === id ? { ...p, prevPrice: p.price, price: val } : p
        )
      )
      setLastUpdated(new Date())
    }
    setEditingId(null)
  }

  return (
    <div className='min-h-screen bg-amber-50 pb-20'>
      <Header lastUpdated={lastUpdated} ticker={ticker} products={products} />

      <main className='max-w-6xl mx-auto px-4 mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {products.map(item => (
            <ProductCard
              key={item.id}
              product={item} // এখানে item-কে 'product' প্রপস হিসেবে পাঠানো হচ্ছে
              isEditing={editingId === item.id}
              editValue={editValue}
              setEditValue={setEditValue}
              onEdit={p => {
                setEditingId(p.id)
                setEditValue(p.price.toString())
              }}
              onSave={handleSave}
              onCancel={() => setEditingId(null)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
