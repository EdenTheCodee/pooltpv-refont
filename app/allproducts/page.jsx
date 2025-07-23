import React from 'react'

function AllProducts() {
  return (
    <div className='mt-24 px-[12%] py-10'>
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <div className='max-w-4xl mx-auto bg-white rounded-xl p-8'>
        {/* Product 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-black-drum-scrap.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 40/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Black Drum Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Grinded HDPE Blow Black Scrap refers to shredded or ground plastic material derived from black High-Density Polyethylene (HDPE) blow-molded products, such as drums, containers, or bottles. Once these items have reached the end of their life cycle, they are collected, cleaned, and mechanically ground into small flakes or granules.
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-create-scrap.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 55/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Blue Can Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HDPE Plastic Crates Scrap refers to discarded or no-longer-in-use crates made from High-Density Polyethylene (HDPE), a strong, durable, and recyclable plastic commonly used in the packaging and transportation industries. These crates are often used to carry fruits, vegetables, dairy products, or industrial materials, and once they've served their purpose—due to wear and tear or excess—they are collected as scrap material.
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-crate-scrap.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 58/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Cream Crate Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Grinded Natural HDPE Crate Scrap refers to mechanically shredded or ground plastic flakes derived from uncolored or natural High-Density Polyethylene (HDPE) crates. These crates are often used in logistics, storage, and agricultural transport due to their toughness and lightweight design.
              <br />
              Unlike pigmented variants, natural HDPE has no added color, making this scrap more flexible for recycling applications.
            </p>
          </div>
        </div>

        {/* Product 4 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-crate-scrap-2.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 55/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Light Green Crate Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HDPE Crate Scrap refers to discarded or used crates made from High-Density Polyethylene (HDPE), a tough, resilient plastic known for its long-lasting performance and excellent recyclability. These crates are typically used in industries like agriculture, retail, logistics, and dairy to store and transport goods.
            </p>
          </div>
        </div>

        {/* Product 5 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/product.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 55/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Blue Crate Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              Blue HDPE Crate Scrap refers to used or discarded crates made from High-Density Polyethylene (HDPE) that are colored blue. These crates are widely used in the transportation and storage of fruits, vegetables, dairy, and other goods—especially in industries where color-coding aids organization and sorting.
              <br />
              Once these crates are no longer usable—due to wear, damage, or surplus—they are collected as scrap, cleaned, and ground into flakes or granules.
            </p>
          </div>
        </div>

        {/* Product 6 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-crates-scrap-3.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 50/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Multicolor Crate Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HDPE Crates Scrap refers to used or discarded plastic crates made from High-Density Polyethylene (HDPE), collected primarily for recycling purposes. These crates are commonly found in supply chains for transporting fruits, vegetables, dairy, and other goods due to their strength and durability.
            </p>
          </div>
        </div>

        {/* Product 7 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-create-scrap.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 55/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Blue Drum Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HDPE Plastic Crates Scrap refers to discarded or no-longer-in-use crates made from High-Density Polyethylene (HDPE), a strong, durable, and recyclable plastic commonly used in the packaging and transportation industries. These crates are often used to carry fruits, vegetables, dairy products, or industrial materials, and once they've served their purpose—due to wear and tear or excess—they are collected as scrap material.
            </p>
          </div>
        </div>

        {/* Product 8 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/hdpe-crate-scrap-4.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 55/kg</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">HDPE Green Crate Scrap</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 100 Kg
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              HDPE Crate Scrap refers to worn-out, damaged, or surplus crates made from High-Density Polyethylene (HDPE) plastic. These crates are widely used in industries like agriculture, dairy, logistics, and food distribution for their durability, stackability, and resistance to moisture and chemicals.
              <br />
              Once no longer suitable for use, they're collected as scrap and typically undergo cleaning, shredding, and reprocessing into HDPE granules.
            </p>
          </div>
        </div>

        {/* Product 9 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8'>
          {/* Image Column */}
          <div className='flex flex-col items-center border-4 border-forest-green rounded-xl p-4 justify-center w-60 h-72 mx-auto bg-white'>
            <img src='/images/drum.png' alt='Product 1' className='w-full h-48 object-cover rounded-lg' />
            <p className='text-center text-green-600 font-bold mb-2 mt-4'>Price: Rs 550/Piece</p>
          </div>
          {/* Description Column */}
          <div className="bg-forest-green/5 rounded-xl p-6 shadow-sm border border-forest-green w-full md:w-[500px]">
            <h2 className="text-2xl font-semibold mb-3 text-forest-green">50L Narrow Mouth HDPE Drum</h2>
            <p className="mb-3 text-base font-medium text-gray-700">
              <span className="font-bold text-forest-green">Minimum Order Quantity:</span> 10 Pieces
            </p>
            <p className="mb-3 text-gray-700 leading-relaxed">
              A 200 Litre HDPE Drum is a large-capacity container made from High-Density Polyethylene (HDPE), prized for its strength, chemical resistance, and reusability. These drums are commonly used in industries such as chemicals, pharmaceuticals, agriculture, food processing, and waste management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts