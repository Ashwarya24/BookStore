import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BookCardNew.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const BookCardNew = ({headline,books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
       <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>


       <div>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full h-full"
      >
        {
          books.map(books => <SwiperSlide key={books._id}>
            <Link to={`/book/${books._id}`}>
              <div>
                <img src={books.imageURL} alt="" />
              </div>
            </Link>
          </SwiperSlide>)
        }
      </Swiper>
       </div>
    </div>
  )
}

export default BookCardNew