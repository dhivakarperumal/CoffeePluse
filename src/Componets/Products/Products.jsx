import React from 'react'
import ProductCard from '../../Layoutsmy/ProductCard';
import imgpro1 from '../../assets/product1.jpg'
import imgpro2 from '../../assets/product2.jpg'
import imgpro3 from '../../assets/product3.jpg'
import imgpro4 from '../../assets/product4.jpg'
import imgpro5 from '../../assets/product5.jpg'
import imgpro6 from '../../assets/product6.jpg'

const Products = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32  px-5 bg-[#FDE9CC]'>
      <h1 className='font-semibold text-4xl lg:mt-30 mt-24 mb-8'>Our Products</h1>
      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <ProductCard title="Cold Brew" img={ imgpro1 } value='$.50.99' />
        <ProductCard title="Cafe au Lait" img={ imgpro2 } value='$.100.99' />
        <ProductCard title="Caramel Latte" img={ imgpro3 } value='$.40.99' />
        <ProductCard title="Caramel Latte" img={ imgpro4 } value='$.20.99' />
        <ProductCard title="Caramel Latte" img={ imgpro5 } value='$.60.99' />
        <ProductCard title="Caramel Latte" img={ imgpro6 } value='$.30.99' />

      </div>
    </div>
  )
}

export default Products
