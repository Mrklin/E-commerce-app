import React from 'react'
import star_icon from '../assets/Images/star_icon.png'
import star_dull_icon from '../assets/Images/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext)
  return (
    <div className='flex my-0 mx-36'> 
        <div className='flex gap-6'>
            <div className='flex flex-col gap-3 '>
                <img className='h-[128px]' src={product.image} loading='lazy' alt={`${product.name} product_image`} />
                <img className='h-[128px]' src={product.image} loading='lazy' alt={`${product.name} product_image`} />
                <img className='h-[128px]' src={product.image} loading='lazy' alt={`${product.name} product_image`} />
                <img className='h-[128px]' src={product.image} loading='lazy' alt={`${product.name} product_image`} />
            </div>
            <div className='w-[586px] h-[550px]'>
                 <img className='h-[100%]' loading='lazy' src={product.image} alt={`${product.name} product_image`} />
            </div>
        </div>

        <div className='flex flex-col my-0 mx-10'>
            <h1 className='text-[#3d3d3d] text-2xl font-bold'>{product.name}</h1>
            <div className='flex items-center mt-3 gap-1 text-[#1c1c1c] text-[16px]'>
                <img src={star_icon} alt='star_icon'/>
                <img src={star_icon} alt='star_icon'/>
                <img src={star_icon} alt='star_icon'/>
                <img src={star_icon} alt='star_icon'/>
                <img src={star_dull_icon} alt='star_dull_icon'/>
                <p>(122)</p>
            </div>
            <div className='flex my-6 mx-0 gap-6 font-bold'>
                <div className='text-[#818181] line-through'>${product.old_price}</div>
                <div className='text-[#ff4141]'>${product.new_price}</div>
            </div>
            <div>
                A lightweight, usually knitted, pullover shirt, close-fitting and with
                a round neckline and short sleeves, worn as an undershirt or outer garment. 
            </div>
            <div>
                <h1 className='mt-9 text-[#656565] text-[20px] font-semibold'>Select Size</h1>
                <div className='flex my-4 mx-0 gap-5 '>
                    <div className='size'>S</div>
                    <div className='size'>M</div>
                    <div className='size'>L</div>
                    <div className='size'>XL</div>
                    <div className='size'>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='py-4 px-7 w-40 text-[16px] font-semibold text-white
             bg-[#ff4141] mb-9 border-none outline-none active:bg-[#ff6363] cursor-pointer'>
                ADD TO CART</button>
            <p className='mt-2'><span className='font-semibold'>Category :</span>Women, T-Shirt, Crop-Top</p>
            <p className='mt-2'><span className='font-semibold'>Tags :</span>Modern, Latest</p>
        </div>

    </div>
  )
}

export default ProductDisplay