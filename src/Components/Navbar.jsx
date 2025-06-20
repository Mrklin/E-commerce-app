import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import cart_icon from "../assets/Images/cart_icon.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import hamburger from '../assets/Images/hamburger.png';
import remove_icon from '../assets/Images/cart_cross_icon.png';

const Navbar = () => {

    const [menu, setMenu]= useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const [toggle, setToggle] = useState(false);


  return (
    <div className='flex flex-row justify-around p-[.8rem] shadow'>
        <div className='flex items-center gap-2.5'>
            <img className='w-[40px] md:w-[70%]' src={logo} alt='logo' />
            <p className='text-xl md:text-3xl font-semibold text-[#171717]'>Shopee</p>
        </div>
     
    
            <ul className='hidden sm:flex items-center list-none text-[18px] lg:text-xl gap-6 lg:gap-12 text-[#626262] font-semibold'>
                <li className='cursor-pointer ' onClick={()=> setMenu('shop')}> <Link to='/'>Shop</Link>  {menu==='shop' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('men')}> <Link to='/men'>Men</Link>  {menu==='men' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('women')}> <Link to='/women'>Women</Link> {menu==='women' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('kids')}> <Link to='/kids'>Kids</Link> {menu==='kids' ? <hr className='hr'/>: <></>}</li>
            </ul>

       
          <div className='flex items-center gap-6 md:gap-11'>
              <Link to='/login'> <button className=' w-[80px] lg:w-[148px] h-[38px] outline-none md:rounded-[75px] border-b-2 md:border-2
                font-medium bg-white text-[#515151] cursor-pointer text-[20px] md:text-xl
                border-black active:bg-[#f3f3f3]' onClick={()=> setMenu('login')}>{menu==='login' ? <hr className='hidden'/> : <></>}Login</button> </Link> 

                <div className='flex flex-row '>
                        <Link to='/cart'>
                        <img  onClick={()=> setMenu('cart')} className={`${menu === 'cart' ? <hr className='hidden'/> : <></>} w-[32px] md:w-[40px] cursor-pointer`} src={cart_icon} alt='cart_icon'/>
                        </Link>
                        <div className=' w-4 h-4 flex justify-center items-center rounded-2xl bg-red-600
                        text-white text-[12px]'>{getTotalCartItems()}</div>
                    
                </div>
                
          </div>

            <div className='flex flex-col sm:hidden mt-4.5 items-center'>
              {toggle ? <img src={remove_icon} className='w-[20px] h-[20px]' onClick={()=> setToggle(false)}/> : <img src={hamburger} className='w-[20px] h-[20px]' onClick={()=> setToggle(true)}/>}
              {toggle &&(
                <div className='flex flex-col mt-10 items-start absolute 
                  p-4 w-28 rounded-[15%] bg-white shadow z-10'>
              <ul className='flex flex-col  items-start list-none text-[18px] gap-4 text-[#626262] font-semibold'>
                <li className='cursor-pointer ' onClick={()=> setMenu('shop')}> <Link to='/'>Shop</Link>  {menu==='shop' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('men')}> <Link to='/men'>Men</Link>  {menu==='men' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('women')}> <Link to='/women'>Women</Link> {menu==='women' ? <hr className='hr'/>: <></>}</li>
                <li className='cursor-pointer ' onClick={()=> setMenu('kids')}> <Link to='/kids'>Kids</Link> {menu==='kids' ? <hr className='hr'/>: <></>}</li>
            </ul>
                </div>
              )}

            </div>
        
    </div>


  )
}

export default Navbar