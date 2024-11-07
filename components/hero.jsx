'use client';
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import img1 from "@/public/images/front_logo A.png"

  import img2 from "@/public/hero/1.jpg"
  import img3 from "@/public/hero/1.jpg"
  
import Image from 'next/image'
import TalkToUsBTN from './TalkToUsBTN';
function hero() {
  return (
    <Carousel 
    opts={{
      loop: true
    }} 
    plugins={[
      Autoplay({
        delay: 3000,
      }),
    ]} 
    className="h-screen mt-[106px] md:mt-[64px]"
  >
    <CarouselContent>
      <CarouselItem>
        <div className='relative min-h-screen'>
          <Image 
            src={img1} 
            className='w-full h-full object-cover md:object-top'  
            alt="hero"
            
            sizes="(max-width: 640px) 100vw, 
                  (max-width: 768px) 50vw, 
                  (max-width: 1024px) 33vw, 
                  25vw"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='relative min-h-screen'>
          <Image 
            src={img1} 
            className='w-full h-full object-cover md:object-top'  
            alt="hero"
           
            sizes="(max-width: 640px) 100vw, 
                  (max-width: 768px) 50vw, 
                  (max-width: 1024px) 33vw, 
                  25vw"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='relative min-h-screen'>
          <Image 
            src={img1} 
            className='w-full h-full object-cover md:object-top'  
            alt="hero"
           
            sizes="(max-width: 640px) 100vw, 
                  (max-width: 768px) 50vw, 
                  (max-width: 1024px) 33vw, 
                  25vw"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  
    
    <CarouselPrevious />
    <CarouselNext />
  

    <TalkToUsBTN className={"absolute right-4 md:right-6 bottom-6 md:bottom-6"} />
  </Carousel>
  
  )
}

export default hero
