import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { FaTruck } from "react-icons/fa"
import { FaRupeeSign } from "react-icons/fa"

const SingleProduct = () => {
    return (
        <>
            <Container>
                <div className='justify-between pt-10 items-center w-full md:flex'>
                    <div className='h-full flex justify-center md:flex-1 md:items-end'>
                        <Image
                            src="/cup_number_27777777.png"
                            alt="product image"
                            width={500}
                            height={500}

                        />
                    </div>
                    <div className='h-full w-full flex flex-col justify-center items-center gap-2 md:flex-1 md:px-20 md:gap-10 md:justify-center lg:items-start'>
                        <h1 className='text-[2rem] bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,187,11,0.35)] text-center font-bold md:text-[3rem] md:text-start'>Official TVK CUP 2026 Limited Edition</h1>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-[1rem] bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-transparent bg-clip-text font-semibold md:text-[2rem] flex items-center'><FaRupeeSign className='text-white'/> 320</h1>
                            <span className='text-[0.7rem]'>including all taxes</span>
                        </div>
                        <div className='w-full flex justify-center md:justify-start'>
                            <Link 
                                href="/payment"
                                className='bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33] text-black hover:bg-[#7a0202] hover:text-white px-8 py-3 rounded-md font-semibold text-center transition-all duration-200 inline-block'
                            >
                                Buy Now - ₹320
                            </Link>
                        </div>
                        <p className='text-sm leading-relaxed md:text-lg'>Designed to mark {"Vijay's"} transition into public service and political leadership, each cup features a unique serial number — making every piece personal, memorable, and a lasting symbol of this new chapter in {"Tamil Nadu's"} political landscape.</p>
                        <div className='flex justify-center md:justify-start'>
                            <div className='flex justify-between gap-5 md:gap-10'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <Image
                                        src="/Vector.png"
                                        width={50}
                                        height={50}
                                        alt='vector image 1'
                                        className='w-[40px] h-[40px] border-1 border-[#F5D57A] px-3 py-3 rounded-full md:w-[60px] md:h-[60px] md:py-4 md:px-4'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Sustainable</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <Image
                                        src="/vector_2.png"
                                        width={40}
                                        height={40}
                                        alt='vector image 1'
                                        className='w-[40px] h-[40px] border-1 border-[#F5D57A] px-3 py-3 rounded-full md:w-[60px] md:h-[60px] md:py-4 md:px-4'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Customer Support</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <Image
                                        src="/vector_3.png"
                                        width={40}
                                        height={40}
                                        alt='vector image 1'
                                        className='w-[40px] h-[40px] border-1 border-[#F5D57A] px-3 py-3 rounded-full md:w-[60px] md:h-[60px] md:py-4 md:px-4'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Satisfaction Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct