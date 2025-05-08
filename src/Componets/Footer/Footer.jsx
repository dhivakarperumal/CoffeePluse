import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FDE9CC] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4'>CoffePluse</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium sit nesciunt accusamus enim eaque assumenda libero officiis natus porro?</p>
        </div>
        <div>
            <h1 className='font-semibold text-xl pb-4 md:mt-0' >Links</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Menu</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">About Us</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Products</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Reviews</a>
            </nav>
        </div>

        <div>
            <h1 className='font-semibold text-xl pb-4 md:mt-0' >Menu</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Espresso</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Americano</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Cappuccino</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Flat White</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Cold Brew</a>
            </nav>
        </div>

        <div>
            <h1 className='font-semibold text-xl pb-4 md:mt-0' >Contact Us</h1>
            <nav className='flex flex-col gap-2'>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">dhivakar@gmail.com</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">+91 6789788078</a>
                <a className='hover:text-[#FDE9CC] transtion-all cursor-pointer ' href="">Social Media</a>
            </nav>
        </div>
       
      </div>
      <div>
            <p className='text-center py-4 '>
                @CopyRight Developed  By <span className='text-[#FDE9CC]'>Champiean Programe</span> All rights reversed
            </p>
        </div>
    </div>
  )
}

export default Footer
