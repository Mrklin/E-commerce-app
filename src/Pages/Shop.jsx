import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'
import UseSnapShot from '../Components/UseSnapShot'
import arrow_icon from "../assets/Images/arrow.png"

const Shop = () => {

    const takeScreenShot =() =>{
     UseSnapShot('snapShot', 'MyImage', 'image/jpeg')
  }
  return (
    <div className='custom_bg' id='snapShot'>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
        <button className=" flex items-center px-6 py-2 bg-black text-white cursor-pointer"
         onClick={takeScreenShot} >Take Shot <img className='w-[20px] h-[10px] ml-3' src={arrow_icon}/></button>
    </div>
  )
}

export default Shop