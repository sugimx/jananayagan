"use client"

import React from 'react'
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
    <div className='relative mx-auto border-b border-white/10 bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] text-white shadow-[0_20px_45px_rgba(5,1,19,0.55)]'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(245,187,11,0.12),_transparent_60%)] opacity-60 pointer-events-none' />
        <div className='absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_bottom,_rgba(255,107,0,0.15),_transparent_55%)] opacity-60 pointer-events-none' />
        <div className='relative h-[80px] flex justify-between items-center border-b border-[#F5BB0B]/40 px-2 md:px-6'>
            <Burger />
            <Image
              src="/tvk_logo.png"
              alt="jana nayagan"
              width={100}
              height={60}
              // className='w-[100px] h-[50px]'
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
                      <Link href="/contact" className={currentPath === '/contact' ? 'text-[#F5BB0B]' : ''}>Contact Us</Link>
                  </li>
              </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
              {isAuthenticated ? (
                  <Link href="/profile" className='text-sm text-[#F5BB0B] border-[1px] border-[#F5BB0B] p-2 rounded-full relative cursor-pointer'>
                      <AiOutlineUser />
                  </Link>
              ) : (
                  <Link href="/login" className='text-sm text-[#F5BB0B] border-[1px] border-[#F5BB0B] p-2 rounded-full relative cursor-pointer'>
                    <FaSignInAlt />
                  </Link>
              )}
            </div>
        </div>
    </div>
  )
}

export default Navbar