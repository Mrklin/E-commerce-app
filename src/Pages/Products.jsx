import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';
import UseSnapShot from '../Components/UseSnapShot';
import arrow_icon from "../assets/Images/arrow.png"

const Products = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const products = all_product.find((e)=> e.id === Number(productId))

    const takeScreenShot =() =>{
     UseSnapShot('snapShot', 'MyImage', 'image/jpeg')
  }

  return (
    
    <div id='snapShot'>
        <Breadcrumb product={products} />
        <ProductDisplay product={products} />
        <DescriptionBox />
        <RelatedProducts />
        <button className=" flex items-center px-6 py-2 bg-black text-white cursor-pointer"
                         onClick={takeScreenShot} >Take Shot <img className='w-[20px] h-[10px] ml-3' src={arrow_icon}/></button>
    </div>
  )
}

export default Products