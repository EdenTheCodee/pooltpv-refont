import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-forest-green text-white  bottom-0 left-0 flex flex-col items-center py-3 z-40">
      <div className="mb-2 font-semibold text-lg">Sahil Enterprises</div>
      <div className="flex gap-4  mt-4 text-2xl">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div>
        <p className="text-center text-sm  mt-4 mb-0">&copy; 2025 All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer