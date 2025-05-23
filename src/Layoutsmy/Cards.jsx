import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Cards = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <div>
        <img className='rounded-xl' src={ props.img } alt="" />
      </div>

      <div className='p-2 mt-5'>
        <div className='flex flex-row justify-between'>
            <h3 className='font-semibold text-xl'>{ props.title }</h3>
            <h3 className='font-semibold text-xl'>{ props.value }</h3>
        </div>

        <div className='flex felx-row justify-between mt-3'>
        <div className='flex gap-2'>
            <button className='px-3 text-sm border-2 border-[#AB6B2E] bg-[#FDE9CC] hover:text-[#AB6B2E] transtion-all rounded-lg '>Hot</button>
            <button className='px-3 text-sm border-2 border-[#AB6B2E] bg-[#FDE9CC] hover:text-[#AB6B2E] transtion-all rounded-lg '>Cold</button>
        </div>
        <span className='flex items-center bg-[#FDE9CC] px-3 py-2 rounded-full cursor-pointer'>
            <FaShoppingCart size={20} />
        </span>
        </div>
      </div>
    </div>
  )
}

export default Cards
