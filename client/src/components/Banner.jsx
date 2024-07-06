import React from 'react'
import BannerCard from '../Home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg-px-24 bg-orange-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-orange-900'>For the Best Prices</span> </h2>
                <p className='md:w-4/5'>
                An online marketplace 
                where you can explore an extensive collection of books,
               If you're looking to buy a new book to dive into or hoping to declutter 
                 your bookshelf by selling your gently used books.
                

                 </p>
            

            <div>
                <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                <button className='bg-orange-900 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                    Search

                </button>
                </div>
            </div>
        <div><BannerCard></BannerCard>
        </div>
        </div>
        </div>
    
  )
}

export default Banner