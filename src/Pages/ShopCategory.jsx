import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/Images/dropdown_icon.png'
import Items from '../Components/Items'
import UseSnapShot from '../Components/UseSnapShot'
import arrow_icon from "../assets/Images/arrow.png"

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)

    const takeScreenShot =() =>{
     UseSnapShot('snapShot', 'MyImage', 'image/jpeg')
  }
  return (
    <div id='snapShot'>
        <img src={props.banner} alt='banner_image' className='block mx-auto my-7 w-[82%]' />
        <div className='flex justify-between items-center my-0 mx-[170px] '>
            <p>
                <span className='font-semibold '>Showing 1-12</span> out of 36 products
            </p>
            <div className='py-[10px] px-[20px] rounded-[40px] border-1 border-[#888]
            flex gap-2 items-center cursor-pointer select-none'>
                Sort by <img src={dropdown_icon} alt='dropdown_icon' className='h-[10%]' />
            </div>
        </div>
        <div className='grid grid-cols-4 gap-6 my-[20px] mx-[170px]'>
            {all_product.map((item, index) =>{
                if(props.category === item.category){
             return <Items key={index} 
                        id={item.id} 
                         name={item.name} 
                         image={item.image} 
                         new_price={item.new_price} 
                         old_price={item.old_price} 
                />}
                else{
                    return null;
                }
            })}
        </div>
        <div className='flex items-center justify-center my-[130px] mx-auto w-[220px] select-none
        h-[59px] rounded-[75px] hover:bg-[#d6d3d3] active:bg-[#ededed] bg-[#ededed]
         text-[#787878] font-medium text-[18px] cursor-pointer' >
            Explore More
        </div>
        <button className=" flex items-center px-6 py-2 bg-black text-white cursor-pointer"
                 onClick={takeScreenShot} >Take Shot <img className='w-[20px] h-[10px] ml-3' src={arrow_icon}/></button>
    </div>
  )
}

export default ShopCategory