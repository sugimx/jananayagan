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
        <div className='h-[80px] flex justify-between items-center border-b-1 border-[#F5D57A]'>
            <Burger />
            <Image 
              src="/jana-nayagan 3.png" 
              alt="jana nayagan" 
              width={200}
              height={200}
              className='mt-12 ml-6 md:mt-10 md:ml-0 w-[150px] h-[100px]'
            />
            <div className='hidden md:flex'>
                <ul className='list-none flex gap-8 p-4 text-white text-md'>
                  <li className='py-2'>
                      <Link href="/" className={currentPath === '/' ? 'text-yellow-500' : ''}>Home</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/about" className={currentPath === '/about' ? 'text-yellow-500' : ''}>About Us</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/product" className={currentPath === '/product' ? 'text-yellow-500' : ''}>Product</Link>
                  </li>
                  <li className='py-2'>
                      <Link href="/contact" className={currentPath === '/contact' ? 'text-yellow-500' : ''}>Contact</Link>
                  </li>
              </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
              {isAuthenticated ? (
                  <Link href="/profile" className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full relative cursor-pointer'>
                      <AiOutlineUser />
                  </Link>
              ) : (
                <>
                  <Link href="/login" className='text-sm text-[#F5D57A] border-[1px] border-[#F5D57A] p-2 rounded-full relative cursor-pointer'>
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