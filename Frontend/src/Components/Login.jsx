import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function Login() {

  // here used react hook form to submit data 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const loginSubmit = async (data) => {
    const userInfo ={
     email:data.email,
     password:data.password
    }
    
    // console.log(userInfo);
    await axios.post("http://localhost:4001/api/v1/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        document.getElementById("my_modal_3").close();
        toast.success('Login Successfully!')
        setTimeout(()=>{
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
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-white dark:text-black shadow-slate-600 shadow-md ">
          <form method="dialog" onSubmit={handleSubmit(loginSubmit)}>
            <span
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              onClick={() => document.getElementById('my_modal_3').close()}
            >✕</span>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
            <div className='mt-4 space-y-2 '>
              <span>Email</span>
              <br />
              <input type="email"
               placeholder='Enter your email here' 
               className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
               {...register("email", { required: true })}
                />
                <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password"
               placeholder='Enter your password here' 
               className='outline-none border rounded-md w-80 px-3 py-1 dark:bg-white dark:text-black'
               {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-6'>
              <button className='bg-pink-500 px-3 py-1  rounded-md hover:bg-pink-700 duration-200'>Login</button>
              <div>Not registered?<Link to="/signup"  
              className='underline text-blue-500 cursor-pointer'>
                Signup</Link></div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}
