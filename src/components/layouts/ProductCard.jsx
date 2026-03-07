// 📂 src/components/ProductCard.jsx
import React from 'react'

const ProductCard = ({
  product,
  isEditing,
  editValue,
  setEditValue,
  onEdit,
  onSave,
  onCancel
}) => {
  // প্রপস হিসেবে product না আসলে এই কম্পোনেন্ট কিছুই রেন্ডার করবে না (এরর হ্যান্ডলিং)
  if (!product) return null

  const change = product.price - product.prevPrice
  const pct =
    product.prevPrice !== 0
      ? ((change / product.prevPrice) * 100).toFixed(1)
      : '0.0'
  const isUp = change > 0
  const isDown = change < 0

  return (
    <div
      className={`bg-white rounded-2xl border-2 shadow-sm transition-all overflow-hidden ${
        isUp
          ? 'border-red-200'
          : isDown
          ? 'border-green-200'
          : 'border-gray-200'
      }`}
    >
      <div
        className={`h-1.5 ${
          isUp ? 'bg-red-500' : isDown ? 'bg-green-500' : 'bg-gray-300'
        }`}
      />
      <div className='p-4'>
        <div className='flex justify-between mb-2'>
          <span className='text-4xl'>{product.icon}</span>
          <span className='bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase'>
            {product.category}
          </span>
        </div>
        <h3 className='font-black text-gray-900 text-lg leading-tight'>
          {product.name}
        </h3>
        <p className='text-gray-400 text-xs mb-3'>{product.nameEn}</p>

        <div className='mb-3'>
          {isEditing ? (
            <input
              type='number'
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              className='w-full border-2 border-green-400 rounded-lg px-2 py-1 text-xl font-black outline-none'
              autoFocus
            />
          ) : (
            <p className='text-3xl font-black text-gray-900'>
              ৳{product.price}
              <span className='text-sm font-medium text-gray-400 ml-1'>
                /{product.unit}
              </span>
            </p>
          )}
          <div
            className={`text-xs font-bold mt-1 ${
              isUp
                ? 'text-red-700'
                : isDown
                ? 'text-green-700'
                : 'text-gray-500'
            }`}
          >
            {isUp ? '▲' : isDown ? '▼' : '—'} {Math.abs(change)} (
            {Math.abs(pct)}%)
            <span className='font-normal opacity-60 ml-1'>
              আগে ৳{product.prevPrice}
            </span>
          </div>
        </div>

        <div className='flex gap-2'>
          {isEditing ? (
            <>
              <button
                onClick={() => onSave(product.id)}
                className='flex-1 bg-green-600 text-white text-xs font-bold py-2 rounded-lg'
              >
                সংরক্ষণ
              </button>
              <button
                onClick={onCancel}
                className='flex-1 bg-gray-100 text-gray-600 text-xs font-bold py-2 rounded-lg'
              >
                বাতিল
              </button>
            </>
          ) : (
            <button
              onClick={() => onEdit(product)}
              className='w-full bg-amber-50 text-amber-800 border border-amber-300 text-xs font-bold py-2 rounded-lg hover:bg-amber-100'
            >
              ✏️ দাম আপডেট
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
