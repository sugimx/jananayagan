import React from 'react'
import AddressIcons from '@/components/ui/user/AddressIcons'
import { FaUser } from "react-icons/fa"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaIndianRupeeSign } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"
import { HiDevicePhoneMobile } from "react-icons/hi2"
import { IconType } from 'react-icons'
import { IoMdHome } from "react-icons/io"

const DetailsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center gap-3'>
            {children}
        </div>
    )
}

const Icon = ({ Icon }: { Icon: IconType }) => {
    return (
        <span className='text-[#F5D57A] text-md md:text-lg'>
            <Icon />
        </span>
    )
}

const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className='text-md font-light md:text-lg'>{content}</p>
    )
}

const AddressForm = () => {
    return (
        <>
            <div className='w-[90%] min-h-[50vh] mx-auto my-10 lg:w-[70%]'>
                <div className='md:flex gap-6 justify-center'>
                    <div className='text-white flex-1'>
                        <div className='mb-3'>
                            <div className='mb-5'>
                                <h1 className='text-[#F5D57A] text-2xl font-semibold mb-1 md:text-4xl'>Address</h1>
                                <p className='text-sm font-light md:text-lg'>Please confirm the {"buyer's"} address, your Jana Nayagan Cup finds its way here.</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <DetailsContainer>
                                    <Icon Icon={FaUser} />
                                    <Paragraph content="Melto" />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={MdOutlineEmail} />
                                    <Paragraph content='example@teamwebflow.com' />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={IoMdHome} />
                                    <Paragraph content='4074 Ebert Summit Suite 375 Lake Leonardchester'/>
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={HiDevicePhoneMobile} />
                                    <Paragraph content='+91 983 654 7890'/>
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={FaLocationDot} />
                                    <Paragraph content='Kanyakumari' />
                                </DetailsContainer>
                                <DetailsContainer>
                                    <Icon Icon={FaMapLocationDot} />
                                    <Paragraph content='Tamil Nadu' />
                                </DetailsContainer>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-[#F5D57A] w-full px-4 py-4 text-lg font-light'>
                            <h1 className='text-2xl font-semibold mb-1 md:text-4xl'>Order summery</h1>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Subtotal</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>900</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Delivery</span>
                                <div className='flex items-center font-light'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>900</span>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-500 my-2'></div>
                            <div className='flex items-center justify-between text-sm'>
                                <span className='font-light text-md md:text-lg'>Total</span>
                                <div className='flex items-center font-semibold'>
                                    <span><AddressIcons Icon={FaIndianRupeeSign} /></span>
                                    <span className='font-light text-md md:text-lg'>900</span>
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