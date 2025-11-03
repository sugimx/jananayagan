import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { FaTruck } from "react-icons/fa"

const SingleProduct = () => {
    return (
        <>
            <Container>
                <div className='justify-between mt-10 items-center w-full md:flex md:h-[80vh] lg:h-[60vh]'>
                    <div className='h-full flex justify-center md:flex-1 md:items-end'>
                        <Image
                            src="/cup_image.png"
                            alt="product image"
                            width={500}
                            height={500}
                            className='w-[200px] h-[200px] md:w-[500px] md:h-[500px]'
                        />
                    </div>
                    <div className='h-full w-full flex flex-col gap-2 md:flex-1 md:px-20 md:gap-10 md:justify-center'>
                        <h1 className='text-[2rem] text-[#F5D57A] text-center font-bold md:text-[3rem] md:text-start'>Official Jana Nayagan Limited Edition Cup</h1>
                        {/* <p className='text-sm leading-relaxed md:text-lg'>Be a part of cinematic history with this official Jana Nayagan {"Collector's Cup"}. Crafted for true fans, each cup carries a unique serial number, making every piece personal, cherished, and a timeless tribute to the {"film's"} legacy.</p> */}
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
                                    <FaTruck className='border-1 border-[#F5D57A] px-3 py-3 text-[40px] md:text-[60px] rounded-full  text-[#F5D57A]'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Free Shipping</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <Image
                                        src="/Vector (2).png"
                                        width={40}
                                        height={40}
                                        alt='vector image 1'
                                        className='w-[40px] h-[40px] border-1 border-[#F5D57A] px-3 py-3 rounded-full md:w-[60px] md:h-[60px] md:py-4 md:px-4'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Customer Support</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <Image
                                        src="/Vector (3).png"
                                        width={40}
                                        height={40}
                                        alt='vector image 1'
                                        className='w-[40px] h-[40px] border-1 border-[#F5D57A] px-3 py-3 rounded-full md:w-[60px] md:h-[60px] md:py-4 md:px-4'
                                    />
                                    <p className='text-[0.6rem] text-[#F5D57A] md:text-[0.8rem]'>Satisfaction Guaranteed</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-[1rem] text-[#F5D57A] text-center font-semibold md:text-[2rem] md:text-start'>INR 300</h1>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct