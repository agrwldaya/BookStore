import React from 'react'

export default function Cards({item}) {
     
  return (
    <div>
      <div className=" dark:bg-white dark:text-black card w-92 bg-base-100 shadow-xl my-10  px-3 hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-700 duration-300">Buy Now</div> 
    </div>
  </div>
</div>
    </div>
  )
}