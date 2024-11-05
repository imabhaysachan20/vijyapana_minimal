import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import Container from '../container';
function Index() {
  return (<Container>
    <footer className='flex flex-col md:flex-row mt-24 pt-12 border-t-2 cursor-pointer'>
        <div className='w-full md:w-1/2 text-2xl'>
        <p className='text-center mb-4 '>Social Links</p>
        <div className='flex justify-center gap-x-16'>
    <FaInstagram className='hover:opacity-45 transition-opacity duration-500'/> <FaFacebookSquare className='hover:opacity-45 transition-opacity duration-500'/> <FaLinkedin className='hover:opacity-45 transition-opacity duration-500'/>
    </div>
    </div>
    <div className='flex justify-center items-center mt-8 text-center md:w-1/2  md:mt-0 text-xl'>
        <h1>Write to us at: vijyapana@gmail.com</h1>
    </div>
    </footer>
    <footer className='border-t-2 mt-14 py-10 pb-6'>
      
      <p className='mt-2 leading-1 tracking-tighter text-justify high text-gray-400 text-xs'>© 2024 Vijyapana. All Rights Reserved. This website and its content, including text, images, graphics, and designs, are the property of Vijyapana and are protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of this material is strictly prohibited and may result in legal action. For permissions and inquiries, please contact vijyapana@gmail.com.
      </p>
    </footer>
    </Container>
  )
}

export default Index
