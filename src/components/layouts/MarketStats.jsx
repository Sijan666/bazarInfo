// 📂 src/components/MarketStats.jsx
const MarketStats = ({ total, rising, falling }) => {
  return (
    <div className='bg-white border-b border-amber-200 shadow-sm'>
      <div className='max-w-6xl mx-auto px-4 py-3 grid grid-cols-3 gap-4 text-center'>
        <div>
          <p className='text-2xl font-black text-gray-800'>{total}</p>
          <p className='text-xs text-gray-500 uppercase tracking-wide'>
            মোট পণ্য
          </p>
        </div>
        <div>
          <p className='text-2xl font-black text-red-600'>↑{rising}</p>
          <p className='text-xs text-gray-500 uppercase tracking-wide'>
            দাম বেড়েছে
          </p>
        </div>
        <div>
          <p className='text-2xl font-black text-green-600'>↓{falling}</p>
          <p className='text-xs text-gray-500 uppercase tracking-wide'>
            দাম কমেছে
          </p>
        </div>
      </div>
    </div>
  )
}

export default MarketStats
