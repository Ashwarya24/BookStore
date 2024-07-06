import React from 'react'
import {Link} from 'react-router-dom'
import BookPic from '../assets/awardbooks.png'
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-orange-100 px-4 lg:px-24'>
       <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <h2 className='text-4xl font-bold mb-6 leading-snug '>2024 National Book Awards for Science</h2>
                <Link to="/shop" className=' block'>
                    <button className='bg-orange-900 text-white font-semibold px-5 py-3 rounded hover:bg-black transition-all duration-300'>
                      Promo Code
                    </button>
                </Link>
            </div>
            <div>
                <img src={BookPic} alt="" className='w-96' />
            </div>
        </div> 
    </div>
  )
}

export default PromoBanner