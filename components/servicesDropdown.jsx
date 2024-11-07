"use client"
import React from 'react'

function servicesDropdown({services}) {
  return (
    <div style={{gridTemplateColumns: `repeat(${services.length}, minmax(0, 1fr))`}} className='hidden absolute  group-hover:grid gap-x-2 bg-white -bottom-0.5 translate-y-[100%] z-30 w-[80vw] -translate-x-16 border rounded-md shadow-md p-4'>
    <div>
      <h1 className='font-medium text-gray-700 flex items-center gap-x-1'><FaVideo/>Product Shoot</h1>
      <div className='ml-2'>
      <p className='text-sm mt-1'>Video Shoot</p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      </div>
    </div>
    <div>
    <h1 className='font-medium text-gray-700 flex items-center gap-x-1'><MdAudiotrack/>Audio Book</h1>
      <div className='ml-2'>
      <p className='text-sm mt-1'>Video Shoot</p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      </div>
    </div>
    <div>
    <div>
    <h1 className='font-medium text-gray-700 flex items-center gap-x-1'><BsPrinterFill />Print Media</h1>
      <div className='ml-2'>
      <p className='text-sm mt-1'>Video Shoot</p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      </div>
    </div>
    </div>
    <div>
    <div>
    <h1 className='font-medium text-gray-700 flex items-center gap-x-1'><BsPrinterFill />Social Media Creative</h1>
      <div className='ml-2'>
      <p className='text-sm mt-1'>Video Shoot</p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      </div>
    </div>
    </div>
    <div>
    <div>
    <h1 className='font-medium text-gray-700 flex items-center gap-x-1'><FaGift />Corporate Gifts</h1>
      <div className='ml-2'>
      <p className='text-sm mt-1'>Video Shoot</p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      <p className='text-sm mt-0.25'>Lorem ipsum </p>
      </div>
    </div>
    </div>
    <div>
    </div>

  </div>
  )
}

export default servicesDropdown
