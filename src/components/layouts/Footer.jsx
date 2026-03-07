// 📂 src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className='bg-green-900 text-green-100 text-center py-8 mt-10'>
      <p className='font-bold text-white text-lg mb-1'>চাসি বাজারদর 🌿</p>
      <p className='text-sm opacity-70'>
        প্রতিদিনের বাজারের দর — আপনার পাশে সবসময়
      </p>
      <p className='text-xs opacity-50 mt-4'>
        © {new Date().getFullYear()} Chassi Bajderdoor. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
