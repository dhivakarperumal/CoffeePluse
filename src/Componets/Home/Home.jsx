import React from 'react'
import Button from '../../Layoutsmy/Button';
import home_banner from '../../assets/home.png'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 pb-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className='font-semibold text-5xl text-center  lg:text-start leading-tight mt-10 '>Start your day  with  of freshly roasted coffee</h1>
        <p>Start your day right with the rich aroma of freshly roasted coffee beans and the cozy atmosphere of your favorite neighborhood coffee spot.</p>
     
     <div className='flex flex-row gap-6'>  
        <Button title="ADD TO CART"></Button>
        <Button title="MORE MENU"></Button>
     </div>
     
      </div>
      <div className='relative'>
        <img src={ home_banner } alt="" />

        <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full  shadow-[0_20px_50px_rgba(8,_122,_184,_0.7)]'>
            <h2 className='font-semibold'>14K</h2>
        </div>

        <div className='absolute bg-white px-8 py-2 bottom-0 rounded-full -left-10'>
            <h2 className='font-semibold'>Cuppisino</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
