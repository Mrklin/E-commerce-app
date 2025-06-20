import React from 'react'
import data_product from '../assets/Images/data'
import Items from './Items'

const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center gap-2 h-[90svh]'>
        <h1 className='font-semibold text-[#171717] text-[40px]'>Related Products</h1>
        <hr className='w-[200px] h-[4px] rounded-[10px] bg-[#252525]' />
        <div className='mt-10 flex gap-6'>
            {data_product.map((item, index) =>(
                <Items key={index}
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price}
                    old_price={item.old_price} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts