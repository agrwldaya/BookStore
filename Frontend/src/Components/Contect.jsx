import React, { useRef } from 'react';
import contactus from "../../public/contectus.png";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Contact() {
  const nameref = useRef();
  const mailRef = useRef();
  const bodyRef = useRef();

  const sendMail = async (e) => {
    e.preventDefault();
    const formData = {
      email: mailRef.current.value,
      title: nameref.current.value,
      body: bodyRef.current.value,
    };

    try {
      const response = await axios.post("http://localhost:4001/api/v1/sendmail", formData);
      if (response.data) {
        toast.success(response.data.message);
        mailRef.current.value="",
        nameref.current.value="",
        bodyRef.current.value=""
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='w-full md:w-1/2 mt-10 order-2 md:order-none px-3'>
        <h1 className='text-6xl mt-10 text-center font-sans hidden md:block'>Contact Us</h1>

        <form onSubmit={sendMail} className='text-center mt-12 flex flex-col space-y-5 order-2 md:order-none py-10'>
          <label htmlFor="name" className='sr-only'>Name</label>
          <input
            ref={nameref}
            id="name"
            className='w-full px-3 bg-slate-500 dark:bg-slate-200 outline-none py-2 rounded-md'
            type="text"
            placeholder='Name'
            required
          />
          
          <label htmlFor="email" className='sr-only'>Email</label>
          <input
            ref={mailRef}
            id="email"
            className='w-full px-3 bg-slate-500 dark:bg-slate-200 outline-none py-2 rounded-md'
            type="email"
            placeholder='Email'
            required
          />
          
          <label htmlFor="message" className='sr-only'>Message</label>
          <textarea
            ref={bodyRef}
            id="message"
            className='w-full px-3 bg-slate-500 dark:bg-slate-200 outline-none py-2 rounded-md'
            placeholder='Message'
            rows="5"
            required
          />
          
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
      
      <div className="order-1 w-full mt-20 md:w-1/2">
        <h1 className='text-6xl mb-10 text-center font-sans block md:hidden'>Contact Us</h1>
        <img
          src={contactus}
          className="md:w-[550px] md:h-[460px] md:ml-12"
          alt="Contact Us"
        />
      </div>
    </div>
  );
}
