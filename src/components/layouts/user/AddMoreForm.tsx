import React from 'react'
import { FaUserEdit } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoMdPhonePortrait } from "react-icons/io"
import { FaGift } from "react-icons/fa"
import { FaMapMarked } from "react-icons/fa"
import { IoIosClose } from "react-icons/io"
import { BsPinMapFill } from "react-icons/bs"
import { AiOutlinePicture } from "react-icons/ai"

type props = {
    onHandleToggle: () => void
}

const AddMoreForm = ({ onHandleToggle }: props) => {
    return (
        <>
            <div className='absolute top-20 w-full md:flex justify-center items-center z-10 main-content blurred'>
                <div className='bg-black border-1 border-[#F5D57A] w-full md:w-[50%] lg:w-[30%] md:h-full px-3 md:px-10 py-5 rounded-xl relative'>
                    <div className='w-full h-5 absolute top-0 left-0 flex justify-end px-2 py-3 cursor-pointer' onClick={onHandleToggle}>
                        <IoIosClose className='bg-white text-black font-bold rounded-full'/>
                    </div>
                    <div>
                        <h1 className='text-[#F5D57A] text-[1.5rem] font-semibold'>Buyer Info</h1>
                        <p className='text-sm'>Fill in your details to receive your unique ID for the Official Jana Nayagan {"Collector’s"} Mug and secure your entry into the lucky draw.</p>
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
                            <input type="date" name="dob" className='h-full w-full outline-none' placeholder='DOB' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <FaMapMarked className='text-[2.8rem] px-3' />
                            <input type="text" name="state" className='h-full w-full outline-none' placeholder='State' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <BsPinMapFill className='text-[2.8rem] px-3' />
                            <input type="text" name="district" className='h-full w-full outline-none' placeholder='District' />
                        </div>
                        <div className='bg-white flex text-black items-center h-10'>
                            <AiOutlinePicture className='text-[2.8rem] px-3' />
                            <input type="file" name="name" className='h-full w-full outline-none' placeholder='Name' />
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                            <input type="checkbox" className='agree--checkbox' />
                            <p className='text-sm md:text-md'>Agree for terms & conditions</p>
                        </div>
                    </div>
                    <button className='bg-[#F5D57A] w-full h-8 text-sm md:text-lg rounded-md text-black cursor-pointer'>Enter</button>
                </div>
            </div>
        </>
    )
}

export default AddMoreForm