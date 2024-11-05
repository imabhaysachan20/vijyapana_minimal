import React from 'react'
import ProductCard from './ProductCard'


function ProductContainer({setVisible}) {

  
  return (
    <section className='grid grid-cols-2 gap-3 gap-y-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        <ProductCard setVisible={setVisible}/>
        <ProductCard setVisible={setVisible}/>
        <ProductCard setVisible={setVisible}/>
        <ProductCard setVisible={setVisible}/>
    </section>
  )
}

export default ProductContainer
