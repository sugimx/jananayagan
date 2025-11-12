import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#640101] via-[#000] to-[#000] text-white px-4 pt-12 border-t-2 border-b-2 border-[#F5BB0B]">
      <Container>
        <div className="mx-auto my-5 flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
          <div className="md:w-2/5 w-full flex flex-col items-center md:items-start md:mb-0">
            <Image src="/jana-nayagan 32.png" alt="Logo" className="h-20 w-40 mt-6 md:h-20 md:w-50 xl:w-80 xl:h-40" width={300} height={300}/>
          </div>
          <div className="md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 my-auto text-center md:text-start">
            <div>
              <h3 className="font-semibold mb-3 text-[1rem] md:text-lg xl:text-xl text-[#F5BB0B] underline">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">About</Link></li>
                <li><Link href="/product" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Product</Link></li> 
                <li><Link href="/contact" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[1rem] text-[#F5BB0B] md:text-lg xl:text-xl underline">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms-conditions" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Terms and Conditions</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Privacy Policy</Link></li>
                  <li><Link href="/shipping-policy" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Shipping & Delivery</Link></li>
                  <li><Link href="/return-policy" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-lg">Return & Cancellation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[1rem] text-[#F5BB0B] md:text-lg xl:text-xl underline">Support</h3>
              <ul className="space-y-2 text-sm ">
                  <li className=''> 
                      <a href="mailto:support@sugimx.com" className="hover:text-[#F5BB0B] text-sm md:text-md xl:text-xl">support@sugimx.com</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer