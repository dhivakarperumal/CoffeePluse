import React from 'react';
import { BsStarFill,BsStarHalf  } from "react-icons/bs";
import Button from './Button';

const ProductCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <img className='rounded-lg' src={ props.img } alt="" />
      <div className='flex flex-col items-center mt-5 gap-3'>
        <h1 className='font-semibold text-xl'>{ props.title }</h1>
        <div className='flex'>
            <BsStarFill  className='text-[#AB6B2E]' /> 
            <BsStarFill  className='text-[#AB6B2E]' /> 
            <BsStarFill  className='text-[#AB6B2E]' /> 
            <BsStarFill  className='text-[#AB6B2E]' />
            <BsStarHalf  className='text-[#AB6B2E]' />
        </div>
        <h3 className='font-semibold text-lg'>{ props.value }</h3>
        <Button title="ADD TO CART" />
      </div>
    </div>
  )
}

export default ProductCard
