import React from 'react'

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import {  Textarea } from "flowbite-react";
import { useState } from 'react';
import {useLoaderData, useParams} from 'react-router-dom'
const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();

  const bookCategories = [
    "Autobiography",
    "Science",
    "Mathematics",
    "Literature",
    "Sociology",
    "History",
    "Children Books",
    "Travel",
    "Business",
    "Self-help",
    "Art and Design"

    
  ]
  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue=(event)=>{
   
    setSelectedBookCategory(event.target.value)
  }
  //handle book submission
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;

    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;
  
   const updateBookObj = {
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
   };
  //  console.log(bookObj);
   //send data to db
   //update book
   fetch(`http://localhost:5002/book/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(updateBookObj)
   }).then(res=>res.json()).then(data=>{alert("Book Updated Successfully!")
    // form.reset();
  })
   

  }
  return (
  
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>
        Update the Book Data</h2>
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          <div className='flex gap-8'>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle}  />
      </div>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
      </div>
      </div>
      <div className='flex gap-8'>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL"  />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
      </div>
      <div className='lg:w-2/5'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />

        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue} >
            {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          
           
}
           
        </Select>
       </div>
      </div>
      <div className='lg:w-4/5'>
        <div className='mb-2 block'>
          <Label htmlFor='bookDescription' value="Book Description" />
          </div>
          <Textarea id="comment" name='bookDescription' placeholder="Write a Book Description.." required rows={6} defaultValue={bookDescription}  />
         
            
      </div>
      
      <div className='lg:w-4/5'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL} />
      </div>
      <div>

      </div>
      <Button type="submit" className="bg-orange-400 hover:bg-orange-900 lg:w-4/5 ">
            Update Book
          </Button>
    </form>
       
    </div>

  )
}

export default EditBooks