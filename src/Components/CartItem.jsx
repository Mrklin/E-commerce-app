import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/Images/cart_cross_icon.png';

const CartItem = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='my-[50px] mx-[130px]'>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-16
        py-4 px-0 text-[#454545] text-[18px] font-semibold'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[2px] bg-[#e2e2e2] border-0'/>
        {all_product.map((e, i) =>{
            if(cartItems[e.id]>0){
                return <div>
            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-16
        py-4 px-0 text-[#454545] text-[18px] font-normal'>
                <img src={e.image} alt={`${e.name}`} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='w-[54px] py-1 border-1 border-[#ebebeb] bg-white select-none' key={i}>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cursor-pointer w-[15px] my-0 mx-[20px]' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='remove_icon' />
            </div>
            <hr /> 
        </div>
            }
                return null;
        })}
        <div className='flex my-[70px] mx-0'>
            <div className='flex-1 flex flex-col mr-[180px] gap-[20px]'>
                <h1 className='font-medium text-[20px]'>Cart Total</h1>
                <div>
                    <div className='flex justify-between py-[10px] px-0'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[10px] '>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[10px] font-medium '>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='cursor-pointer w-[232px] h-[44px] outline-none
                border-none bg-[#ff5a5a] active:bg-[#973f3f] text-white text-[16px] font-medium'>
                PROCEED TO CHECKOUT
                </button>
            </div>
            <div className='flex-1 text-[16px] font-medium'>
                <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                <div className='flex w-[304px] h-[38px] bg-[#eaeaea] mt-[15px] pl-[20px]'>
                    <input className='border-none outline-none bg-transparent' type='text' placeholder='Enter code' />
                    <button className='cursor-pointer w-[140px] bg-black active:bg-[#3b3b3b] text-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default CartItem