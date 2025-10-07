import React from 'react'
import AddressFormContainer from '@/components/ui/user/AddressFormContainer'
import AddressIcons from '@/components/ui/user/AddressIcons'
import { FaUser } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaMobileScreen } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { FaIndianRupeeSign } from "react-icons/fa6"

const AddressForm = () => {
    return (
        <>
            <div className='w-[90%] h-auto mx-auto my-10 lg:w-[60%]'>
                <h1 className='text-[1.5rem] font-light mb-2 text-white'>Address</h1>
                <div className='md:flex gap-2 justify-center'>
                    <div className='my-5 text-white flex-1'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label className='text-sm md:text-lg'>Name</label>
                                <AddressFormContainer>
                                    <AddressIcons Icon={FaUser} />
                                    <input type="text" name='name' placeholder='John Doe' className='w-full h-full outline-none border-none text-black' />
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
                                <AddressFormContainer className="h-20">
                                    <textarea name='address' placeholder='Enter your address here....' className='w-full h-full outline-none border-none text-black' />
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
                        </div>
                    </div>
                    <div className='flex-1 mt-14'>
                        <div className='bg-[#F5D57A] w-full px-4 py-4 text-lg font-light'>
                            <h1>Order summery</h1>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light'>Subtotal</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span>900</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light'>Delivery</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span>900</span>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-500 my-2'></div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-semibold'>Total</span>
                                <div className='flex items-center font-semibold'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span>900</span>
                                </div>
                            </div>
                            <p className='text-sm my-2'>Estimated shipping time: 2 days</p>
                        </div>
                        <button className='bg-[#F5D57A] w-full py-2 my-3 text-sm uppercase font-medium cursor-pointer'>Go to Payment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressForm