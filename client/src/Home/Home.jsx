import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <FavBooks/>
      <PromoBanner/>
      
      <OtherBooks/>
      <Reviews/>
        
    </div>
      
  )
}

export default Home