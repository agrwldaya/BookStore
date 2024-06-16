import React from 'react'
import Nevbar from '../Components/nevbar'
import Banner from '../Components/Banner'
import Freebook from '../Components/Freebook'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <div className='dark:bg-white dark:text-black'> 
     <Banner/>
     <Freebook/>
     </div>
    </>
  )
}
