import React from 'react';
import aboutimg from '../../assets/about.jpg'
import Button from '../../Layoutsmy/Button';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#FDE9CC]'>
      <h1 className='font-semibold text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>

      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src={ aboutimg } alt="" />
        </div>

        <div className='w-ful lg:w-2/4 p-4 space-y-3'>
            <h2 className='font-semibold text-3xl'>Welcome to Bean Bliss Café</h2>
            <p>At Bean Bliss, we’re more than just coffee lovers — we’re a community hub, a cozy escape, and your go-to spot for handcrafted beverages made with heart.</p>
            <p>Founded with a passion for premium brews and warm hospitality, we source only the finest beans and freshest ingredients. Whether you’re stopping by for your morning pick-me-up or spending a lazy afternoon reading, our space is designed to make you feel at home.</p>
            <Button title='Learn More'/>
        </div>
      </div>
    </div>
  )
}

export default About
