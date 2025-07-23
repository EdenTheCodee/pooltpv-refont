import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '/app/globals.css'
const cards = [
  {
    img: "/images/hdpe-black-drum-scrap.png",
    label: "HDPE Black Drum Scrap"
  },
  {
    img: "/images/hdpe-drum-scrap-2.png",
    label: "HDPE Multicolor Drum Scrap"
  },
  
  {
    img: "/images/hdpe-crate-scrap.png",
    label: "HDPE Cream Crate Scrap"
  },
  {
    img: "/images/hdpe-crate-scrap-2.png",
    label: "HDPE Light Green Crate Scrap"
  },
  
  {
    img: "/images/hdpe-crates-scrap-3.png",
    label: "HDPE Multicolor Crate Scrap "
  },
  {
    img: "/images/hdpe-crate-scrap-4.png",
    label: "HDPE Green Crate Scrap"
  },
  {
    img: "/images/hdpe-create-scrap.png",
    label: "HDPE Bluw Drum Scrap"
  },
  {
    img: "/images/drum.png",
    label: "Drum"
  },
  {
    img: "/images/product.png",
    label: "Product"
  },
  {
    img: "/images/product-2.png",
    label: "Product-2"
  },
  
]
function ProductandServices() {
  return (
    <div id='work' className='w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col justify-center gap-4 relative'>
      <h2 className='text-3xl md:text-4xl font-bold  mb-4 tracking-tight drop-shadow-sm'>Product And Services</h2>

      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-forest-green text-white border border-forest-green rounded-full p-3 shadow-md hover:bg-white hover:text-forest-green hover:cursor-pointer transition"
        
      >
        &#8592;
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-forest-green text-white border border-forest-green rounded-full p-3 shadow-md hover:bg-white hover:text-forest-green transition"
        
      >
        &#8594;
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        spaceBetween={50}
        slidesPerView={3}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1100: { slidesPerView: 3 }
        }}
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
  <div className='w-64 h-80 border-2 border-forest-green rounded-xl p-4 shadow-lg bg-white flex flex-col items-center justify-between mx-auto'>
    <img
      src={card.img}
      alt={card.label}
      className="w-full h-48 object-cover rounded-md"
    />
    <div className='mt-4 text-xl text-black w-full text-center'>
      <a href='#work' className='text-black no-underline border-b-0 hover:border-b-2 hover:border-forest-green transition'>
        {card.label}
      </a>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>

      <div className=' mt-8 flex justify-center'>
        <a href='/allproducts'><button className=' no-underline bg-forest-green text-white  px-8 py-3  rounded-md text-lg font-semibold shadow-md hover:bg-forest-green/90 transition'>
          Explore more
        </button>
        </a>
      </div>
    </div>
  )
}

export default ProductandServices
