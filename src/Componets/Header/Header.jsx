import React, { useState } from 'react';
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineClose,AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-scroll';
import Button from '../../Layoutsmy/Button';

const Header = () => {
    const [menu, setMenu]=useState(false);

    const handelChange=()=>{
        setMenu(!menu)
    }

    const closeMenu=()=>{
        setMenu(false)
    }

    return (
        <div className='fixed w-full z-10'>
            <div>
                <div className='flex flex-row justify-between p-5 lg:px-32 bg-gradient-to-r bg-[#FDE9CC] to-[#AB6B2E] shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                        <span><SiCoffeescript size={25}/></span>
                        <h1 className='text-xl font-semibold'>CoffePluse</h1>
                    </div>

                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to="home" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer">Home 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="menu" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer">Menu 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="about" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer">About Us 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="products" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer">Products 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="reviews" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer">Reviews 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                    </nav>

                    <div className='hidden lg:flex'>
                        <Button title="Login" />
                    </div>

                    <div className=' md:hidden flex items-center'>
                        { menu ? (<AiOutlineClose size={25} onClick={handelChange} />)
                         :
                        ( <AiOutlineMenuFold size={25} onClick={handelChange}  />) }
                    </div>
                </div>
                <div className={`${ menu ? "translate-x-0" : "-translate-x-full" } md:hidden text-white flex flex-col absolute bg-black left-0 top-16 font-bold text-small text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300` }>
                <Link to="home" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer "  onClick={closeMenu} >Home 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="menu" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer " onClick={closeMenu} >Menu 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="about" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer " onClick={closeMenu} >About Us 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="products" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer " onClick={closeMenu} >Products 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>
                        <Link to="reviews" spy={ true } smooth={ true } duration={1000} className="relative inline-block group hover:text-[#AB6B2E] cursor-pointer " onClick={closeMenu} >Reviews 
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" ></span>
                        </Link>

                        <Button title="Login" />
                </div>

            </div>
        </div>
    )
}

export default Header
