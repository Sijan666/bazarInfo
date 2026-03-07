// 📂 src/components/Header.jsx
import React from 'react'

const Header = ({ lastUpdated, ticker, products }) => {
  const today = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className='bg-green-800 text-white shadow-2xl relative overflow-hidden'>
      <div className='relative max-w-6xl mx-auto px-4 py-6'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <span className='text-5xl'>🛒</span>
            <div>
              <h1 className='text-3xl md:text-4xl font-black tracking-tight leading-none text-white'>
                চাসি বাজারদর
              </h1>
              <p className='text-green-200 text-sm font-medium tracking-widest uppercase mt-1'>
                Daily Market Prices
              </p>
            </div>
          </div>
          <div className='bg-green-700 rounded-xl px-4 py-3 border border-green-500 text-right'>
            <p className='text-green-300 text-xs uppercase tracking-widest font-bold'>
              আজকের তারিখ
            </p>
            <p className='text-white font-bold text-sm mt-1'>{today}</p>
            <p className='text-green-300 text-xs mt-1 italic'>
              আপডেট: {lastUpdated.toLocaleTimeString('bn-BD')}
            </p>
          </div>
        </div>

        <div className='mt-4 bg-red-700 rounded-lg px-4 py-2 flex items-center gap-3 overflow-hidden'>
          <span className='bg-yellow-400 text-red-900 text-xs font-black px-2 py-0.5 rounded shrink-0'>
            LIVE
          </span>
          <div className='flex gap-8 text-sm text-white animate-pulse'>
            {products?.slice(ticker % 4, (ticker % 4) + 4).map(p => (
              <span key={p.id} className='shrink-0'>
                {p.icon} {p.nameEn}: ৳{p.price}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
