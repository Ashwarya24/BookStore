import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';
// import BookCardNew from './BookCardNew'

const FavouriteBooks = () => {
  const[books,setBooks]=useState([]);
  useEffect( ()=>{
    fetch("http://localhost:5002/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(1,8)))
  }
  ,[])
  return (
    <div>
        {/* <BookCards books={books} headline="Best Seller Books" /> */}
        <BookCards books={books} headline="Best Rated Books" />
        
    </div>

  )
}

export default FavouriteBooks