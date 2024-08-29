import Image from 'next/image'
import React from 'react'
import { Nav } from './Nav'
import { ContactBtn } from './ContactBtn'

export const Navbar = () => {
  return (
    <section >
        <div className='fixed z-50 w-full'>
        <div className='navbar-container mx-10 p-2 flex justify-between items-center'>
      <div className='logo'>
        <Image 
          src='/assets/luminary.png'
          alt='Luminary Logo' 
          width={100}
          height={1}
          className='w-[130px] md:w-[150px] h-[70px] object-cover'
        />
      </div>
      <div className='md:flex hidden'>
        <Nav/>
      </div>
      <div className='md:flex hidden'>
        <ContactBtn/>
      </div>

    </div>
        </div>

    </section>
    
  )
}