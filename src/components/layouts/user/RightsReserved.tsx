import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import Container from './Container'

const RightsReserved = () => {
  return (
    <Container>
      <div className='w-full flex justify-between items-center h-[5vh] text-gray-500 text-xs md:text-lg'>
        <p>2026. All Rights Reserved</p>
        <Link href="">Terms & Conditions Privacy</Link>
        <div className='flex items-center gap-4 text-white'>
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
    </Container>
  )
}

export default RightsReserved