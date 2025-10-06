import React from 'react'
import { FaUserEdit } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoMdPhonePortrait } from "react-icons/io"
import { FaGift } from "react-icons/fa"

const AddMoreForm = () => {
    return (
        <>
            <div className='absolute top-20 w-full md:flex justify-center items-center'>
                <div className='bg-black border-1 border-[#F5D57A] w-full md:w-[50%] lg:w-[30%] md:h-full px-3 md:px-10 py-5 rounded-xl'>
                    <div>
                        <h1 className='text-[#F5D57A] text-[1.5rem] font-semibold'>Buyer Info</h1>
                        <p className='text-sm'>Fill in your details to receive your unique ID for the Official Jana Nayagan Collector’s Mug and secure your entry into the lucky draw.</p>
                    </div>
                    <div className='flex flex-col gap-5 my-2'>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='John Doe' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <MdEmail className='text-[2.8rem] px-3' />
                            <input type="email" name="email" className='h-full w-full outline-none' placeholder='example@gmail.com' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <IoMdPhonePortrait className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='8888888888' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaGift className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='Name' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='Name' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='Name' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaUserEdit className='text-[2.8rem] px-3' />
                            <input type="text" name="name" className='h-full w-full outline-none' placeholder='Name' />
                        </div>
                        <div>
                            <input type="text" name="name" />
                            <p>Agree for terms & conditions</p>
                        </div>
                    </div>
                    <button>Enter</button>
                </div>
            </div>
        </>
    )
}

export default AddMoreForm