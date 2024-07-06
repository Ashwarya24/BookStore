import React, { useState } from 'react';
import './ManageBooks.css';
import { useEffect } from 'react';
import {Link }from 'react-router-dom';
const ManageBooks = () => {
  const [allBooks,setAllBooks]=useState([]);
  useEffect( ()=>{
    fetch("http://localhost:5002/all-books").then(res=>res.json()).then(data=>setAllBooks(data)); 
  },[])
  //delete item
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5002/book/${id}`,{
      method:"DELETE",


    }).then(res=>res.json()).then(data=>{alert("Book is Deleted Successfully!")
      //  setAllBooks(data);
    })
  }
  return (
    <div className='px-4 my-12 App'>
      <h2 className='mb-8 text-3xl font-bold'>
        Manage Your Books
      </h2>
      
      <table className='lg:w-[1180px] table hoverable'>
        <thead className='table-head'>
          <tr>
            <th className='table-head-cell'>No.</th>
            <th className='table-head-cell'>Book Name</th>
            <th className='table-head-cell'>Author Name</th>
            <th className='table-head-cell'>Category</th>
            <th className='table-head-cell'>Price</th>
            <th className='table-head-cell'>
              <span>Edit or Manage</span>
            </th>
          </tr>
        </thead>
        {
          allBooks.map((book,index) =>  <tbody className='table-body divide-y' key={book.id_}>
            <tr className='table-row bg-white dark:border-gray-700 dark:bg-gray-800'>
            <td className='table-cell'>{index+1}</td>
            <td className='table-cell whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {book.bookTitle};
            </td>
            <td className='table-cell'>{book.authorName}</td>
            <td className='table-cell'>{book.category}</td>
            <td className='table-cell'>INR 10</td>
            <td className='table-cell'>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
              to={`/admin/dashboard/edit-books/${book._id}`
              }>
                Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </td>
          </tr>
            </tbody>)
        }
        
      </table>
    </div>
  );
};

export default ManageBooks;
