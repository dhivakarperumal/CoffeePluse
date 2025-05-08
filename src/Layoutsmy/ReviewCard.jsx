import React from 'react';
import { BsStarFill,BsStarHalf  } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = (props) => {
    return (
        <div className=' flex flex-col w-fill lg:w-2/6 bg-white rounded-lg gap-5 p-3 '>
            <div className='flex flex-row items-center lg:justify-start justify-center '>
                <div className='w-1/4'>
                    <img className='rounded-full' src={props.img} alt="" />
                </div>
                <div className='mx-3'>
                    <h2 className='font-semibold text-xl'>{props.title}</h2>
                    <div className='flex'>
                        <BsStarFill className='text-[#AB6B2E]' />
                        <BsStarFill className='text-[#AB6B2E]' />
                        <BsStarFill className='text-[#AB6B2E]' />
                        <BsStarFill className='text-[#AB6B2E]' />
                        <BsStarHalf className='text-[#AB6B2E]' />
                    </div>
                </div>
                <span className='ml-16'>
                    <FaQuoteRight className='text-[#FDE9CC]' size={42}/>
                </span>
            </div>
            <p>{ props.review }</p>
        </div>
    )
}

export default ReviewCard
