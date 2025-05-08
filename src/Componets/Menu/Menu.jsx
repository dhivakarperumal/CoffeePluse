import React from 'react'
import Cards from '../../Layoutsmy/Cards';
import img1 from '../../assets/menu1.jpg'
import img2 from '../../assets/menu2.jpg'
import img3 from '../../assets/menu3.jpg'
import img4 from '../../assets/menu4.jpg'
import img5 from '../../assets/menu5.jpg'
import img6 from '../../assets/menu6.jpg'
import img7 from '../../assets/menu7.jpeg'
import img8 from '../../assets/menu8.jpg'
import img9 from '../../assets/menu9.svg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#FDE9CC]'>
      <h1 className='font-semibold text-center text-4xl  mt-24 mb-8'>Our Menus</h1>

      <div className=' flex flex-wrap pb-8 gap-8 justify-center'>
        <Cards img={ img1 } title="Brew Haven" value="$.45"  />
        <Cards img={ img2 } title="Bean & Bloom" value="$.105"  />
        <Cards img={ img3 } title="Espresso" value="$.150"  />
        <Cards img={ img4 } title="Latte" value="$.30"  />
        <Cards img={ img5 } title="Macchiato" value="$.55"  />
        <Cards img={ img6 } title="Cappuccino" value="$.85"  />
        <Cards img={ img7 } title="Macchiato" value="$.55"  />
        <Cards img={ img8 } title="Cappuccino" value="$.85"  />
        <Cards img={ img9 } title="Cappuccino" value="$.85"  />
      </div>
    </div>
  )
}

export default Menu
