import React, { useRef, useState } from 'react';
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa6';
import Imgp from '../assets/profile.jpg';


// import required modules
import { Pagination } from 'swiper/modules';
const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className='shadow-lg bg-white rounded-lg overflow-hidden border-t border-b'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='mt-7'>
                        <p className='mb-5 text-left'>
                        "I absolutely love this book site! The books are phenomenal, 
                        spanning every genre you can think of.  
                        The user interface is sleek and easy to navigate.
                        I highly recommend this site to any book lover!"


                        </p>
                        <div className='flex flex-col items-start space-y-2'>
                        <Avatar img={Imgp} alt="avatar of Jese" rounded className='w-10 mb-4 rounded-full'/>
                        <h5 className='text-lg font-medium'>Nicole Schlaf</h5>
                        <p className='text-base text-gray-500'>Student</p>
                        </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='shadow-lg bg-white rounded-lg overflow-hidden border-t border-b'>
                <div className='space-y-6 '>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='mt-7'>
                        <p className='mb-5 text-left'>
                        "I absolutely love this book site! The books are phenomenal, 
                        spanning every genre you can think of.  
                        The user interface is sleek and easy to navigate.
                        I highly recommend this site to any book lover!"


                        </p>
                        <div className='flex flex-col items-start space-y-2'>
                        <Avatar img={Imgp} alt="avatar of Jese" rounded className='w-10 mb-4 rounded-full'/>
                        <h5 className='text-lg font-medium'>Nicole Schlaf</h5>
                        <p className='text-base text-gray-500'>Student</p>
                        </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='shadow-lg bg-white rounded-lg overflow-hidden border-t border-b'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='mt-7'>
                        <p className='mb-5 text-left'>
                        "I absolutely love this book site! The books are phenomenal, 
                        spanning every genre you can think of.  
                        The user interface is sleek and easy to navigate.
                        I highly recommend this site to any book lover!"


                        </p>
                        <div className='flex flex-col items-start space-y-2'>
                        <Avatar img={Imgp} alt="avatar of Jese" rounded className='w-10 mb-4 rounded-full'/>
                        <h5 className='text-lg font-medium'>Nicole Schlaf</h5>
                        <p className='text-base text-gray-500'>Student</p>
                        </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='shadow-lg bg-white rounded-lg overflow-hidden border-t border-b'>
                <div className='space-y-6'>
                    <div className='text-amber-500 flex gap-2'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='mt-7'>
                        <p className='mb-5 text-left'>
                        "I absolutely love this book site! The books are phenomenal, 
                        spanning every genre you can think of.  
                        The user interface is sleek and easy to navigate.
                        I highly recommend this site to any book lover!"


                        </p>
                        <div className='flex flex-col items-start space-y-2'>
                        <Avatar img={Imgp} alt="avatar of Jese" rounded className='w-10 mb-4 rounded-full'/>
                        <h5 className='text-lg font-medium'>Nicole Schlaf</h5>
                        <p className='text-base text-gray-500'>Student</p>
                        </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Reviews