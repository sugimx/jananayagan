import React from 'react'
import Image from 'next/image'
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 mt-12 border-t-2 border-b-2 border-gray-800">
      <div className="mx-auto my-5 flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
        <div className="md:w-2/5 w-full flex flex-col items-center md:items-start md:mb-0">
          <Image src="/jana-nayagan 32.png" alt="Logo" className="h-20 w-40 mt-6 md:h-40 md:w-80" width={300} height={300}/>
        </div>
        <div className="md:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 my-auto text-center md:text-start">
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] md:text-lg text-[#F5D57A] underline">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F5D57A] text-sm md:text-lg">Home</a></li>
              <li><a href="/about" className="hover:text-[#F5D57A] text-sm md:text-lg">About</a></li>
              <li><a href="/contact" className="hover:text-[#F5D57A] text-sm md:text-lg">Contact</a></li>
              <li><a href="/contact" className="hover:text-[#F5D57A] text-sm md:text-lg">Terms and Conditions</a></li>
              <li><a href="/contact" className="hover:text-[#F5D57A] text-sm md:text-lg">Privacy Polics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] text-[#F5D57A] md:text-lg underline">Address</h3>
            <address className="not-italic text-gray-300 text-sm md:text-lg">
              123, Main Street<br />
              Chennai, Tamil Nadu<br />
              India - 600001
            </address>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[1rem] text-[#F5D57A] md:text-lg underline">Support</h3>
            <ul className="space-y-2 text-sm ">
                <li className=''> 
                    <a href="mailto:support@jananayagan.com" className="hover:text-[#F5D57A] text-sm md:text-lg">support@jananayagan.com</a>
                </li>
                <li className=''>
                    <a href="tel:+911234567890" className="hover:text-[#F5D57A] text-sm md:text-lg">+91 12345 67890</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer