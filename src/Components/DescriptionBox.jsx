import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-18 mx-30'>
        <div className='flex'>
            <div className='flex items-center justify-center text-[16px] 
            font-semibold w-[151px] h-[60px] border-1 border-[#d0d0d0]'>
                Description
            </div>
            <div className=' flex items-center justify-center text-[16px] font-semibold
             w-[151px] h-[60px] border-1 border-[#d0d0d0] text-[#555] bg-[#fbfbfb]'>
                Reviews (122)
            </div>
        </div>
        <div className='flex flex-col gap-5 p-10 pb-14 border-1 border-[#d0d0d0]'>
            <p>
                An e-commerce website is an online platform that facilitates the 
                buying and selling of products and services over the internet and 
                serves as a virtual marketplace where businesses and individuals 
                showcase their products, interact with customers and conduct transactions
                without the need for a physical presence. E-commerce websites have gained
                immense popularity due to their convinient availabilty, and the global 
                reach they offer 
            </p>
            <p>E-commerce websites ususally display products and services along with 
               detailed description, images, prices and any available variations (e.g. 
               sizes, colours). Each poroduct usually has it's own dedicated page with
               relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox