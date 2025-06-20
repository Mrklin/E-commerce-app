import React from 'react'
import exclusive_image from '../assets/Images/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[80%] flex-col md:flex-row flex m-auto py-0 px-20 my-[100px] offer_bg '>
        <div className='flex flex-1 flex-col justify-center pt-[40px]'>
            <h1 className='text-[26px] sm:text-[30px] lg:text-[50px] text-[#171717] font-extrabold'>
            Exclusive <br/> Offers For You</h1>
            <p className='text-[16px] sm:text-[18px] font-normal md:font-semibold text-[#171717]' 
            >ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[148px] py-3 rounded-[30px] bg-[#ff4141] 
            border-0 text-white text-[16px] sm:text-[18px] font-medium mt-[30px] cursor-pointer'>
            Check Now</button>
        </div>

        <div className='flex flex-1 justify-center md:justify-end items-center pt-[40px]'>
            <img src={exclusive_image} alt='exclusive_image' className='w-[60%]' />
        </div>
    </div>
  )
}

export default Offers