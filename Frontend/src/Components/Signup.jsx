import React from 'react'
import { Link, json, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Login from './Login'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Signup() {
  const location = useLocation();
  const from = location.state?.form?.pathname || "/"
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const signupSubmit = async (data) => {
    const userInfo ={
     fullname:data.Name,
     email:data.email,
     password:data.password
    }
    console.log(userInfo);
    await axios.post("http://localhost:4001/api/v1/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){

        document.getElementById("my_modal_3").close();
        toast.success('Signup Successfully!');
        setTimeout(()=>{
          nevigate(from,{replace:true});
          window.location.reload();
        },1000)
      
      
      
      }

      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=> {
      console.log(err)
      toast.error("error: "+err.response.data.message);
    })
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <div id="my_modal_3">
     <div className="modal-box dark:bg-white dark:text-black w-[600px]">
    <form method="dialog" onSubmit={handleSubmit(signupSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

      {/* name */}

      <div className='mt-4 space-y-2 '>
        <span>Name</span>
        <br />
        <input type="text"
         placeholder='Enter your email here'
       className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black' 
          {...register("Name", { required: true })}
          />
          <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
      </div>


      {/* email */}

      <div className='mt-4 space-y-2 '>
        <span>Email</span>
        <br />
        <input type="email" 
        placeholder='Enter your name here'
         className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
         {...register("email", { required: true })}
         />
         <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
      </div>
       {/* passsword */}
      <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="text" 
        placeholder='Enter your password here'
         className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
         {...register("password", { required: true })} />
         <br />
           {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
      </div>

      <div className='flex justify-around mt-5'>
        <button className='bg-pink-500 px-3 py-1  rounded-md hover:bg-pink-700 duration-200'>
          signup</button>
        <div>Already have account? <Link to="/" className='underline text-blue-500 cursor-pointer'
          onClick={()=>document.getElementById("my_modal_3").showModal()}
        >Login</Link>
        <Login/>
        </div>
      </div>
      </form>
    </div>
    </div>
    </div>
  )
}
