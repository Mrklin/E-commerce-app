import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='w-[110px] sm:w-[150px] lg:w-[230px] hover:transform-[scale(1.05)] hover:transition-[0.6s] '>
       <Link to={`/products/${props.id}`}> <img onClick={window.scrollTo(0,0)} loading='lazy' src={props.image} alt={`${props.name}`} /> </Link> 
        <p className=' my-1.5 mx-0 text-[12px] sm-[16px] lg:text-[18px]'>{props.name}</p>
        <div className='flex gap-5'>
            <div className=' font-semibold text-[#374151] text-[16px] md:text-[18px]'>${props.new_price}</div>
            <div className='font-medium text-[#8c8c8c] line-through text-[16px] md:text-[18px]'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Items