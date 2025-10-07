import Container from '@/components/layouts/user/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc"

const LoginForm = () => {
    return (
      <Container>
        <div>
            <div className='my-5 mx-2 lg:w-[70%] md:flex md:mx-auto md:h-[80vh] gap-8 justify-center items-center'>
              <div className='text-center my-4 flex-2'> 
                <h1 className='text-[1.2rem] text-[#F5D57A] font-semibold my-2 md:text-[2rem]'>Welcome, Hero of the Future</h1>
                <p className='text-sm leading-relaxed md:text-lg'>From final frame to future throne your legacy continues. One hero, one leader, rising beyond the screen into something greater.</p>
              <div className='hidden md:flex justify-center items-center'>
                  <Image 
                    src="/cup_image.png"
                    width={400}
                    height={300}
                    alt='jana nayagan logo'
                    className='w-[150px] h-[150px] md:w-[300px] md:h-[300px]'
                  />
              </div>
              <div className='hidden md:flex flex-col'>
                <p className='text-lg'>Your exclusive {"Collector's"} Item with a unique number awaits you.</p>
                <h1 className='text-[2rem] text-[#F5D57A] font-semibold'>LEGACY LIVES</h1>
              </div>
            </div>
            <div className='flex-1'>
              <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-[#F5D57A] md:text-lg'>Email</label>
                    <input className='border-1 border-[#F5D57A] outline-none rounded-md py-1 px-2 md:py-2' type='email' name="email" placeholder='johndoe@gmail.com' />
                  </div>
                   <div className='flex flex-col gap-2'>
                    <label className='text-sm text-[#F5D57A] md:text-lg'>Password</label>
                    <input className='border-1 border-[#F5D57A] outline-none rounded-md py-1 px-2 md:py-2' name="password" type='password' placeholder='*********'/>
                  </div>
                  <p className='text-sm md:text-md'>{"Don't"} you have a account? <Link href="/register" className="underline text-[#F5D57A]">create account</Link></p>
                  <button className='bg-[#F5D57A] text-black py-1 rounded-md cursor-pointer my-2 md:text-lg'>Login</button>
              </div>
              <div className='flex justify-center items-center gap-2 my-2'>
                <span className='w-[100%] h-[2px] bg-gray-700'></span>
                <span className='text-gray-700'>OR</span>
                <span className='w-[100%] h-[2px] bg-gray-700'></span>
              </div>
              <div>
                <button className='bg-white py-2 rounded-md w-full cursor-pointer'>
                  <FcGoogle className='text-center w-full' />
                </button>
              </div>
              <div className='my-4 text-center md:hidden'>
                <p className='text-sm leading-relaxed'>Your exclusive {"Collector's"} Item with a unique number awaits you.</p>
                <h1 className='text-[1.2rem] text-[#F5D57A] font-semibold'>LEGACY LIVES</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
}

export default LoginForm