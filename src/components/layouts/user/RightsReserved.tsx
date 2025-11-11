import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import Container from './Container'

const RightsReserved = () => {
  return (
    <Container>
      <div className='w-full flex justify-between items-center h-[5vh] text-[#F5BB0B] text-sm md:text-md'>
        <p>2026. All Rights Reserved</p>
        <Link href="">Terms & Conditions Privacy</Link>
        <div className='flex items-center gap-4 text-[#F5BB0B]'>
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
    </Container>
  )
}

export default RightsReserved