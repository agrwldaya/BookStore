import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
  const [authUser, setAuthUser] =  useAuth();

  const handleLogout=()=>{
    try {
      setAuthUser({...authUser,user:null})
      localStorage.removeItem("Users")
      toast.success("Logout successfully!")
      setTimeout(()=>{
        window.location.reload();
      },500)
    
      
    } catch (error) {
      toast.error("Error: "+ error.message)
    }

  }
  console.log(authUser)
  return (
    <div>
       <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}
