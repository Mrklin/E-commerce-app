import React from 'react'
import arrow_icon from '../assets/Images/breadcrum_arrow.png';

const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='flex items-center gap-1.5 text-[#5e5e5e] 
    text-[16px] font-semibold my-6 mx-36 capitalize'>

      HOME <img src={arrow_icon} alt='arrow_icon' />
      SHOP <img src={arrow_icon} alt='arrow_icon' />
      {product.category} <img src={arrow_icon} alt='arrow_icon' />
      {product.name}  

    </div>
  )
}

export default Breadcrumb