import React from 'react'

const Header = () => {
  return (
    <div
      id="top"
      className="mt-24 bg-[#451E0A] py-16 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
  <span className="inline-block text-yellow-400 animate-bounce">POOL TPV</span>
</h1>

      <h2 className="text-xl md:text-2xl text-white mb-6 font-semibold">
      <span className="inline-block text-yellow-400 animate-pulse "> Site officiel </span>
      </h2>
      <p className="text-white max-w-xl mb-8">
        Your one-stop solution for all business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#work"
          className="no-underline bg-white text-forest-green font-semibold px-8 py-3 rounded-md shadow-md hover:bg-golden hover:text-white transition"
        >
          Explore Our Products
        </a>
        <a
          href="https://www.indiamart.com/sahilenterprises-faridabad-haryana/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline bg-golden text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-white hover:text-golden transition"
        >
          Visit IndiaMART
        </a>
      </div>
    </div>
  )
}

export default Header