"use client"
import React, { useState } from 'react'
import SectionTitle from "@/components/SectionTitle";
import ProductContainer from './ProductContainer';
import Container from '../container';
import ProductDetails from "@/components/products/ProductDetails";
const Index = () => {
  const [visible,setVisible] = useState(false);
  return (<>
    <Container>
    <SectionTitle text={"Classy Hampers"}/>
    <ProductContainer setVisible={setVisible}/>
    </Container>
      <ProductDetails visible={visible} setVisible={setVisible}/>
      </> 
  )
}

export default Index
