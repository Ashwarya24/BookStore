import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import CountUp from 'react-countup'
import {Link} from 'react-router-dom'
const FavBooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12' />

        </div>
        <div className='md:w-1/2'>
            <h2  className='text-5xl font-bold my-5 md:w-3/4 leading snug'>Find Your Favourite <span className='text-orange-900'>Book Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
            A key quality of any great book store is its selection, and my favorite store excels in this regard. Shelves are stocked with a vast array of genres, from classic literature and contemporary fiction to specialized sections for science, history, and the arts.
            </p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div >
                <CountUp className='text-3xl font-bold' start={800} end={900} duration={4} />
                <span className='text-3xl font-bold text-orange-400'>
                    +
                </span>
                <p className='text-base text-gray-500'>Books</p>
            

            </div>
            <div >
                <CountUp className='text-3xl font-bold' start={900} end={1000} duration={4} />
                <span className='text-3xl font-bold text-orange-400'>
                    +
                </span>
                <p className='text-base text-gray-500'>PDF Downlaods</p>
            

            </div>
            <div >
                <CountUp className='text-3xl font-bold ' start={500} end={550} duration={4} />
                <span className='text-3xl font-bold text-orange-400'>
                    +
                </span>
                <p className='text-base text-gray-500'>Users</p>
            

            </div>
        </div>
            <Link to="/shop" className='mt-8 block'>
                <button className='bg-orange-900 text-white font-semibold px-5 py-3 rounded hover:bg-black transition-all duration-300'>
                    Explore More
                </button>
            </Link>
        </div>
    </div>
  )
}

export default FavBooks