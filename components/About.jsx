import React from 'react'

function About() {
  return (
    <div id='about' className='w-full px-[12%] text-center py-10 scroll-mt-5 bg-white'>
      <h2 className="text-3xl md:text-4xl font-bold  mb-4 tracking-tight drop-shadow-sm">
        About Us
      </h2>
      <div className='mt-6'>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Established as a Proprietor firm in the year 2022, we <span className="font-semibold text-forest-green">“Sahil Enterprises”</span> are a leading Trader - Retailer of a wide range of HDPE Scrap, HDPE Drum, etc.<br />
          Sahil Enterprises is a trusted name in the trading of high-quality HDPE Scrap, HDPE Drums, and related plastic waste materials, catering to a wide range of industrial and recycling needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex items-center justify-center gap-4 bg-forest-green/5 rounded-xl p-5 shadow hover:shadow-lg transition">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl shadow">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold text-forest-green">Nature of Business</p>
              <p>Trader - Retailer</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-forest-green/5 rounded-xl p-5 shadow hover:shadow-lg transition">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl shadow">
              <i className="fa-solid fa-scale-balanced"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold text-forest-green">Legal Status of Firm</p>
              <p>Proprietorship</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-forest-green/5 rounded-xl p-5 shadow hover:shadow-lg transition">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl shadow">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold text-forest-green">Annual Turnover</p>
              <p>0-40L</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-forest-green/5 rounded-xl p-5 shadow hover:shadow-lg transition">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl shadow">
              <i className="fa-solid fa-calendar"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold text-forest-green">GST Registration Date</p>
              <p>21-Nov-2022</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-forest-green/5 rounded-xl p-5 shadow hover:shadow-lg transition">
            <span className="flex items-center justify-center rounded-full bg-forest-green text-white w-16 h-16 text-3xl shadow">
              <i className="fa-solid fa-file"></i>
            </span>
            <div className="flex flex-col items-start">
              <p className="font-bold text-forest-green">GST Number</p>
              <p>06MLAPK5607G1Z3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About