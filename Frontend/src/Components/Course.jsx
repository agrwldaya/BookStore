import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
export default function Course() {
    const [bookdata,setBookdata] = useState([]);
    const [authUser,setAuthUser] = useAuth();
    console.log(authUser);
    useEffect(()=>{
     const getbook =  async()=>{
      try {
         const res = await axios.get("http://localhost:4001/api/v1/book");
        //  console.log(res.data.book);
         setBookdata(res.data.book);
      } catch (error) {
        console.log("error in bookdata",error);
      }
     }
     getbook();
    },[])

    
  return (
    authUser?<div className=' max-w-screen-2xl  container mx-auto md:px-20 px-4'>
      <div className='mt-28 justify-center items-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
        <span className='text-pink-500'>Here!</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam voluptas quam nulla recusandae modi sunt ad quia quo? Sapiente tempora ipsa nesciunt laboriosam fugit perferendis inventore velit delectus quasi quisquam.
        </p>
        

        <Link to = "/"> <button className="btn mt-4 px-7 btn-secondary">Back </button> </Link>
        
      </div>
      <div className='mt-14 space-x-2 grid grid-cols-1 md:grid-cols-4'>
      {bookdata.map((item)=>(<Cards item={item} key={item.id} />))} 
      </div>
      
     </div>:

      <Navigate to="/signup"></Navigate>
  )
}
