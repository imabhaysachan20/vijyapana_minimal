'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterval } from 'react-use'

// Sample image data (replace with your own images)
const images1 = [
  'hero/2.jpg',
  'hero/3.jpg',
  'hero/2.jpg',
]

const images2 = [
  'hero/2.jpg',
  'hero/3.jpg',
  'hero/2.jpg',
]

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0)

  useInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, 5000)

  return (
    <div className="relative mt-12 w-full h-[87vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slideshow image ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-top object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  )
}

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-w-3 aspect-h-2">
          <Slideshow images={images1} />
          <div className='flex items-center flex-col'>
          <h1 className='font-semibold text-md mt-4 tracking-tighter'>Lorem, ipsum.</h1>
          <p className='text-gray-500 text-xs mt-0'>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <Slideshow images={images2} />
          <div className='flex items-center flex-col'>
          <h1 className='font-semibold text-md mt-4 tracking-tighter'>Lorem, ipsum.</h1>
          <p className='text-gray-500 text-xs mt-0'>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
