import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' w-[65%] flex flex-col m-auto justify-center mb-[150px]
    items-center gap-7 py-0 px-[50px] md:px-[90px] lg:px-[120px] offer_bg'>
        <h1 className='text-[26px] md:text-[40px] font-semibold'>
        Get Exclusive Offers On Your Email</h1>
        <p className='text-[20px]'>Subscribe to our newsletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-[300px]
            lg:w-[630px] md:w-[440px] h-[50px] lg:h-[70px] border-1 border-[#e3e3e3] rounded-[80px]'>
            <input type='email' placeholder='Your email id'
            className='w-[290px] sm:w-[350px] lg:w-[500px] ml-5 border-none outline-none text-[#616161]' />
            <button className=' w-[100px] md:w-[150px] lg:w-[210px] h-[50px] lg:h-[70px] rounded-[80px] bg-black
             text-white text-[12px] md:text-[16px] cursor-pointer'>Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter