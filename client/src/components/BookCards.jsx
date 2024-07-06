// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {Link} from 'react-router-dom';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import './BookCards.css'

// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {FaCartShopping} from 'react-icons/fa6';

// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({headline,books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
       <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>


       <div className='mt-12'>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{
        books.map(books=><SwiperSlide key={books._id}>
            <Link to={`/book/${books._id}`}>
                <div className='relative'>
                    <img src={books.imageURL} alt="" />
                    <div className='absolute top-3 right-3 bg-orange-400 hover:bg-orange-900 p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white' />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>{books.bookTitle}</h3>
                        <p>{books.authorName}</p>
                    </div>
                    <div>
                        <p>INR 50</p>
                    </div>
                   
                </div>
            </Link>
        </SwiperSlide>)
      }
       
        
      </Swiper>

       </div>
    </div>
  )
}

export default BookCards