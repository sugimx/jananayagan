"use client"

import React from 'react'
import Container from './Container'
import Burger from '@/components/ui/user/Burger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { AiOutlineUser } from "react-icons/ai"
import { FaSignInAlt } from "react-icons/fa"
import { useAuthContext } from '@/contexts/AuthContext'

const Navbar = () => {
  const currentPath = usePathname()
  const { isAuthenticated } = useAuthContext()
  
  return (
    <Container>
        <div className='h-[80px] flex justify-between items-center border-b-1 border-[#F5BB0B] bg-[#7a0202] px-2'>
            <Burger />
            <Image 
              src="/TVK_flag.png" 
              alt="jana nayagan" 
              width={200}
              height={200}
              className='w-[200px] h-[50px]'
            />
            <div className='hidden md:flex'>
                <ul className='list-none flex gap-8 p-4 text-white text-md'>
                  <li className='py-2'>
                      <Link href="/" className={currentPath === '/' ? 'text-[#F5BB0B]' : ''}>Home</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/about" className={currentPath === '/about' ? 'text-[#F5BB0B]' : ''}>About Us</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/product" className={currentPath === '/product' ? 'text-[#F5BB0B]' : ''}>Product</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/contact" className={currentPath === '/contact' ? 'text-[#F5BB0B]' : ''}>Contact</Link>
                  </li>
              </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
              {isAuthenticated ? (
                  <Link href="/profile" className='text-sm text-[#F5BB0B] border-[1px] border-[#F5BB0B] p-2 rounded-full relative cursor-pointer'>
                      <AiOutlineUser />
                  </Link>
              ) : (
                <>
                  <Link href="/login" className='text-sm text-[#F5BB0B] border-[1px] border-[#F5BB0B] p-2 rounded-full relative cursor-pointer'>
                    <FaSignInAlt />
                  </Link>
                </>
              )}
            </div>
        </div>
    </Container>
  )
}

export default Navbar