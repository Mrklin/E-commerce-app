import React from 'react'
import hand_icon from "../assets/Images/hand_icon.png"
import arrow_icon from "../assets/Images/arrow.png"
import hero_image from "../assets/Images/hero_image.png"

const Hero = () => {
  return (
    <div className='h-vh custom_bg flex md:flex-row flex-col container w-[100%]'>
        <div className='flex flex-1 flex-col justify-center items-center md:items-start lg:gap-5 pl-[50px] lg:pl-[180px] 
        lg:leading-1.5 relative mt-10'>
            <h2 className='text-[#090909] text-[18px] md:text-2xl font-semibold relative'>
            NEW ARRIVALS ONLY</h2>
            <div className='text-[#171717] text-3xl sm:text-4xl lg:text-7xl font-bold '>
                <div className='flex items-center gap-3 sm:gap-5'>
                    <p>new</p>
                    <img src={hand_icon} alt='hand_icon' className=' w-[60px] sm:[80px] lg:w-[105px]'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-3.5 w-[250px] md:w-[310px] h-[40px] sm:h-[60px] mt-[30px]
             bg-[#ff4141] rounded-full text-white text-[18px] sm:text-[22px] font-medium'>
                <div>Latest Collections</div>
                <img src={arrow_icon} alt='arrow_icon' />
            </div>
        </div>


        <div className='flex flex-1 justify-center items-center'>
            <img src={hero_image} alt='hero_image' className='w-[78%]'/>
        </div>
    </div>
  )
}

export default Hero