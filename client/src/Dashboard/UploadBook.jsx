import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import {  Textarea } from "flowbite-react";

const UploadBook = () => {
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
  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;

    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;
  
   const bookObj = {
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
   };
   console.log(bookObj);
   //send data to db
   fetch("http://localhost:5002/upload-book",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",

    },
    body: JSON.stringify(bookObj)

   }).then(res=>res.json()).then(data=>{
    alert("Book Uploaded Successfully")
    form.reset();
   })


  }
  return (
  
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>
        Upload A Book</h2>
        <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          <div className='flex gap-8'>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required  />
      </div>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required  />
      </div>
      </div>
      <div className='flex gap-8'>
      <div className='lg:w-2/5'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required  />
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
          <Textarea id="comment" name='bookDescription' placeholder="Write a Book Description.." required rows={5} />
         
            
      </div>
      
      <div className='lg:w-4/5'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required />
      </div>
      <div>

      </div>
      <Button type="submit" className="bg-orange-400 hover:bg-orange-900 lg:w-4/5 ">
            Upload Book
          </Button>
    </form>
       
    </div>

  )
}

export default UploadBook