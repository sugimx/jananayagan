import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import Container from './Container'

const RightsReserved = () => {
  return (
    <div className='relative mx-auto border-b border-white/10 bg-gradient-to-br from-[#0B0118] via-[#160327] to-[#32073B] text-white shadow-[0_20px_45px_rgba(5,1,19,0.55)]'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(245,187,11,0.12),_transparent_60%)] opacity-60 pointer-events-none' />
        <div className='absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_bottom,_rgba(255,107,0,0.15),_transparent_55%)] opacity-60 pointer-events-none' />
        <Container>
          <div className='w-full flex justify-between items-center h-[5vh] text-[#F5BB0B] text-sm md:text-md'>
            <p>2026. All Rights Reserved</p>
            <div className='flex items-center gap-4 text-[#F5BB0B]'>
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default RightsReserved