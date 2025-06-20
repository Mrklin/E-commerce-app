import React from 'react'
import new_collections from '../assets/Images/new_collections'
import Items from './Items'

const NewCollections = () => {
  return (
    <section className='flex flex-col items-center gap-2.5 mb-20'>
        <h1 className='text-[#171717] text-[26px] sm:text-[30px] lg:text-[50px]'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {new_collections.map((item, index) =>(
                    <Items key={index}
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price}
                    old_price={item.old_price} />
            ))}
        </div>
    </section>
  )
}

export default NewCollections