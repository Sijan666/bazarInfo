// 📂 src/components/FilterControls.jsx
import { categories } from '../../constants'

const FilterControls = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-5'>
      <div className='flex flex-col md:flex-row gap-3'>
        <div className='flex-1 relative'>
          <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
            🔍
          </span>
          <input
            type='text'
            placeholder='পণ্য খুঁজুন... (Search products)'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full pl-10 pr-4 py-3 border-2 border-amber-300 rounded-xl focus:border-green-500 outline-none'
          />
        </div>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className='border-2 border-amber-300 rounded-xl px-4 py-3 bg-white text-gray-700'
        >
          <option value='default'>ডিফল্ট সাজান</option>
          <option value='price-asc'>দাম: কম → বেশি</option>
          <option value='price-desc'>দাম: বেশি → কম</option>
          <option value='change'>পরিবর্তন অনুযায়ী</option>
        </select>
      </div>

      <div className='flex gap-2 mt-4 flex-wrap'>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
              selectedCategory === cat
                ? 'bg-green-700 text-white border-green-700 shadow-md'
                : 'bg-white text-green-800 border-green-300 hover:bg-green-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterControls
