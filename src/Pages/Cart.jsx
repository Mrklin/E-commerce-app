import React from 'react'
import CartItem from '../Components/CartItem'
import UseSnapShot from '../Components/UseSnapShot'
import arrow_icon from "../assets/Images/arrow.png"

const Cart = () => {
   const takeScreenShot =() =>{
     UseSnapShot('snapShot', 'MyImage', 'image/jpeg')
  }
  return (
    <div id='snapShot'>

      <CartItem />
    <button className=" flex items-center px-6 py-2 bg-black text-white cursor-pointer"
                     onClick={takeScreenShot} >Take Shot <img className='w-[20px] h-[10px] ml-3' src={arrow_icon}/></button>
    </div>
  )
}

export default Cart