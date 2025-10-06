"use client"

import React from 'react'
import Container from './Container'
import Burger from '@/components/ui/user/Burger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AiOutlineUser } from "react-icons/ai"

const Navbar = () => {
  const currentPath = usePathname()
  const [toggle, setToggle] = React.useState(false)
  return (
    <Container>
        <div className='h-[80px] flex justify-between items-center border-b-1 border-[#F5D57A]'>
            <Burger />
            <Image 
              src="/jana-nayagan 3.png" 
              alt="jana nayagan" 
              width={200}
              height={200}
              className='mt-7 ml-15 md:mt-10 md:ml-0 w-[150px] h-[100px]'
            />
            <div className='hidden md:flex'>
                <ul className='list-none flex gap-8 p-4 text-white text-md'>
                  <li className='py-2'>
                      <Link href="/" className={currentPath === '/' ? 'text-yellow-500' : ''}>Home</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/about" className={currentPath === '/about' ? 'text-yellow-500' : ''}>About</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/contact" className={currentPath === '/contact' ? 'text-yellow-500' : ''}>Contact Us</Link>
                  </li>
              </ul>
            </div>
            <div className='flex justify-center items-center gap-1'>
                {/* <span className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full'><FaSearch /></span> */}
                <span className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full relative cursor-pointer' onClick={() => setToggle((prev) => !prev)}>
                  <AiOutlineUser />
                  <div className={
                      `absolute flex-col gap-2 bg-gray-800 border-1 border-[#F5D57A] py-4 px-8 right-0 top-10 text-white rounded-md 
                      ${toggle ? 'flex' : 'hidden'}`}>
                    <span>
                      <Link href="/login" className={currentPath === '/login' ? 'text-[#F5D57A]' : 'text-white'}>Login</Link>
                    </span>
                    <span>
                      <Link href="/profile" className={currentPath === '/profile' ? 'text-[#F5D57A]' : 'text-white'}>Profile</Link>
                    </span>
                  </div>
                </span>
            </div>
        </div>
    </Container>
  )
}

export default Navbar