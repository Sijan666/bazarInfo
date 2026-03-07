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
    <header className='bg-slate-950 text-white shadow-2xl relative border-b border-indigo-500/20'>
      {/* গ্লো ইফেক্ট ব্যাকগ্রাউন্ড */}
      <div className='absolute top-0 left-1/4 w-96 h-32 bg-indigo-600/20 blur-[120px] pointer-events-none'></div>

      <div className='relative max-w-7xl mx-auto px-6 py-10'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
          {/* ব্র্যান্ডিং সেকশন - Indigo & Cyan Theme */}
          <div className='flex items-center gap-5'>
            <div className='relative'>
              <div className='absolute inset-0 bg-indigo-500 blur-lg opacity-40 animate-pulse'></div>
              <div className='relative bg-gradient-to-br from-indigo-600 to-violet-700 p-4 rounded-2xl shadow-2xl border border-white/10'>
                <span className='text-4xl'>📈</span>
              </div>
            </div>

            <div>
              <h1 className='text-4xl md:text-6xl font-black tracking-tighter'>
                Ajker
                <span className='bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent'>
                  Dam
                </span>
              </h1>
              <div className='flex items-center gap-2 mt-1'>
                <span className='h-[2px] w-8 bg-indigo-500'></span>
                <p className='text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]'>
                  Smart Market Tracker
                </p>
              </div>
            </div>
          </div>

          {/* ডেট কার্ড - Dark Glassmorphism */}
          <div className='flex flex-col md:flex-row items-center gap-4'>
            <div className='text-right border-r border-slate-800 pr-6 hidden md:block'>
              <p className='text-slate-400 text-xs font-medium italic'>
                সর্বশেষ আপডেট
              </p>
              <p className='text-cyan-400 font-mono font-bold'>
                {lastUpdated.toLocaleTimeString('bn-BD')}
              </p>
            </div>

            <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 shadow-2xl'>
              <p className='text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1'>
                Today's Overview
              </p>
              <p className='text-xl font-bold text-slate-100 tracking-tight'>
                {today}
              </p>
            </div>
          </div>
        </div>

        {/* ট্রেন্ডিং সেকশন - Sleek Dark Slider */}
        <div className='mt-10 group relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-2xl'></div>
          <div className='relative flex items-center bg-slate-900/40 rounded-2xl p-2 border border-slate-800'>
            <div className='bg-indigo-600 text-[10px] font-black px-4 py-3 rounded-xl shadow-lg flex items-center gap-2'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-400'></span>
              </span>
              TRENDING NOW
            </div>

            <div className='flex gap-12 text-sm font-semibold text-slate-300 px-8 overflow-hidden'>
              <div className='flex gap-12 whitespace-nowrap'>
                {products?.slice(ticker % 4, (ticker % 4) + 4).map(p => (
                  <div
                    key={p.id}
                    className='flex items-center gap-3 hover:text-white transition-colors cursor-default'
                  >
                    <span className='bg-slate-800 p-1.5 rounded-lg border border-slate-700'>
                      {p.icon}
                    </span>
                    <span className='text-slate-400'>{p.nameEn}:</span>
                    <span className='text-indigo-300 font-bold'>
                      ৳{p.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
