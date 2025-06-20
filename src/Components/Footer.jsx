import React from 'react'
import footer_logo from '../assets/Images/logo_big.png'
import instagram_icon from '../assets/Images/instagram_icon.png'
import pintester_icon from '../assets/Images/pintester_icon.png'
import whatsapp_icon from '../assets/Images/whatsapp_icon.png'


const Footer = () => {


  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div className='flex items-center gap-5'>
         <img src={footer_logo} className='w-[40px] md:w-[60px]' loading='lazy' alt='footer_logo' />
         <p className='text-[#383838] text-[28px] md:text-[46px] font-bold'>SHOPPER</p>
        </div>
        <ul className='list-none  flex-1 md:flex grid grid-cols-2 gap-7 md:gap-12 text-[#252525] text-[20px]'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-5'>
            <div className='footer_icon'>
                <img src={instagram_icon} alt='instagram_icon' />
            </div>
            <div className='footer_icon'>
                <img src={pintester_icon} alt='pintester_icon' />
            </div>
            <div className='footer_icon'>
                <img src={whatsapp_icon} alt='whatsapp_icon' />
            </div>
        </div>
        <div className='flex flex-col items-center gap-7 w-[100%] mb-7
         text-[#1a1a1a] text-[20px]'>
            <hr className='w-[80%] border-none rounded-xl h-1 bg-[#c7c7c7c7]' />
            <p>Copywrite @ 2025 All- Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer