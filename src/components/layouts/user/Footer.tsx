import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 mt-12 border-t-2 border-b-2 border-gray-800">
      <div className="mx-auto my-5 flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
        <div className="md:w-2/5 w-full flex flex-col items-center md:items-start md:mb-0">
          <Image src="/jana-nayagan 32.png" alt="Logo" className="h-20 w-40 mt-6 md:h-40 md:w-80" width={300} height={300} />
        </div>
        <div className="md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 my-auto text-center md:text-start">
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] md:text-lg text-[#F5D57A] underline">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#F5D57A] text-sm md:text-lg">Home</Link></li>
              <li><Link href="/Linkbout" className="hover:text-[#F5D57A] text-sm md:text-lg">About</Link></li>
              <li><Link href="/product" className="hover:text-[#F5D57A] text-sm md:text-lg">Product</Link></li>
            </ul>
          </div>s
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] text-[#F5D57A] md:text-lg underline">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms-conditions" className="hover:text-[#F5D57A] text-sm md:text-lg">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#F5D57A] text-sm md:text-lg">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#F5D57A] text-sm md:text-lg">Shipping & Delivery</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#F5D57A] text-sm md:text-lg">Return & Cancellation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] text-[#F5D57A] md:text-lg underline">Support</h3>
            <ul className="space-y-2 text-sm ">
              <li className=''>
                <a href="mailto:support@jananayagan.com" className="hover:text-[#F5D57A] text-sm md:text-lg">support@jananayagan.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer