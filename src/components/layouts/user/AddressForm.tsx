"use client"

import React from 'react'
import AddressFormContainer from '@/components/ui/user/AddressFormContainer'
import AddressIcons from '@/components/ui/user/AddressIcons'
import { FaUser } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaMobileScreen } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { FaHome } from "react-icons/fa"
import { useRouter } from 'next/navigation'

const AddressForm = () => {
    const router = useRouter()
    const handleFormSubmit = () => {
        router.push('/payment')
    }
    return (
        <>
            <div className='w-[90%] h-auto mx-auto my-10 lg:w-[30%]'>
                <h1 className='text-[1.5rem] font-light mb-2 text-[#F5D57A] md:text-[2rem]'>Address</h1>
                <div className='md:flex gap-2 justify-center'>
                    <div className='my-5 text-white flex-1'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label className='text-sm md:text-lg'>Name</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaUser} />
                                    <input type="text" name='name' placeholder='Enter your name here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <div>
                                <label className='text-sm md:text-lg'>Email</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={IoIosMail} />
                                    <input type="text" name='name' placeholder='Enter your city here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <div>
                                <label className='text-sm md:text-lg'>Mobile</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaMobileScreen} />
                                    <input type="text" name='name' placeholder='Enter your city here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <div>
                                <label className='text-sm md:text-lg'>Home Address</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaHome} />
                                    <input type="text" name='name' placeholder='Enter your address here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <div>
                                <label className='text-sm md:text-lg'>Post Code</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaMapLocationDot} />
                                    <input type="text" name='name' placeholder='Enter your post code here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <div>
                                <label className='text-sm md:text-lg'>City</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaLocationDot} />
                                    <input type="text" name='name' placeholder='Enter your city here....' className='w-full h-full outline-none border-none text-black' />
                                </AddressFormContainer>
                            </div>
                            <button className='bg-[#F5D57A] w-full py-2 my-3 text-sm uppercase font-medium cursor-pointer text-black' onClick={handleFormSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressForm