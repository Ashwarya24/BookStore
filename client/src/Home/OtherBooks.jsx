import React, { useEffect, useState } from 'react'
import BookCardNew from './BookCardNew'
const OtherBooks = () => {
    const[books,setBooks]=useState([]);
    useEffect( ()=>{
      fetch("http://localhost:5002/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,9)))
    }
    ,[])
    return (
      <div>
        
          <BookCardNew books={books} headline="New Releases" />
          
      </div>
  
    )
  
}

export default OtherBooks