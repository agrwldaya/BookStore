import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import "slick-carousel/slick/slick-theme.css";

 
import Cards from './Cards';
export default function Freebook() {
  const [bookdata,setBookdata] = useState([]);

  useEffect(()=>{
   const getbook =  async()=>{
    try {
       const res = await axios.get("http://localhost:4001/api/v1/book");
       console.log(res.data.book.filter((data)=>data.category === "Free"));
       setBookdata(res.data.book.filter((data)=>data.category === "Free"))
    } catch (error) {
      console.log("error in bookdata",error);
    }
   }
   getbook();
  },[])
     

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    // console.log(freeData);

  return (
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
        <div>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Cources</h1>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, quisquam? Quod, nihil, illum porro aliquid quisquam eaque corrupti sint ea ducimus assumenda a pariatur ullam nisi quae non praesentium aperiam.</p>
      </div>
      <div>
      <Slider {...settings}>
          {bookdata.map((item)=>(
            <Cards item={item} key={item.id} />))}
      </Slider>
      </div>
    </div>
  )
}
