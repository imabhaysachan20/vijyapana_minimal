"use client"
import React, { useState,useEffect } from 'react'
import Hamburger from './hamburger';
import { Input } from "@/components/ui/input"
import { MdAudiotrack } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPrinterFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaGift } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import  Container from "@/components/container";
import Link from 'next/link';
function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      // Get current scroll position
      const currentScrollY = window.scrollY;

      // If scrolling down, hide the nav bar, if scrolling up, show it
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return (
    
    <div className=' py-4 z-30 bg-white shadow-md '  style={{
      transition: 'transform 0.3s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,}}>
          <Container className='flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center'>
      
        <div className='hidden md:block h-full'>
        <ul className="right flex gap-x-4 tracking-wider font-thin">
      <li className='cursor-pointer'><Link href={"/"}>Home</Link></li>
     <li className='relative cursor-pointer group '>Collections
      <div className='grid-cols-5 hidden absolute  group-hover:grid gap-x-2 bg-white -bottom-0.5 translate-y-[100%] z-30 w-[80vw] -translate-x-16 border rounded-md shadow-md p-4'>
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
     </li>
     <li className='cursor-pointer'><Link href={"/about"}> About</Link></li>
      <li className='cursor-pointer'><Link href={"/career"}>Carrer</Link></li>
      </ul>
        </div>
        <header className='flex justify-center items-center md:-translate-x-24'>
        <p className='text-3xl sm:text-3xl font-[600] tracking-widest text-[#353535]'><Link href={"/"}> VIJYAPANA</Link></p>
        </header>
        <div className='hidden md:block'>
        <div className="right flex gap-x-4">
      
      <IoCallSharp className='h-4 w-4'/>
      </div>
        </div>
       
    <nav className='flex justify-between md:hidden'>
      <div className="left">
      <Hamburger/>
      </div>
      <div className="right flex gap-x-4">
      <IoCallSharp className='h-4 w-4'/>
      </div>
    </nav>
    </Container>
    </div>
  )
}

export default Navbar
