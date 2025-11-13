import React from 'react'
import Image from 'next/image'
import LinkComponent from '@/components/ui/user/LinkComponent'
import { FaRupeeSign } from "react-icons/fa"

const Banner = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#640101] via-[#242323] to-[#000] py-10 md:py-2 md:h-[60vh] lg:h-[70vh]'>
                <div className='flex flex-row items-center md:mx-20 lg:flex-row'>
                    <div className='flex-1 flex flex-col items-center'>
                        <Image 
                            src="/tvk_cup.png"
                            alt="product image"
                            width={600}
                            height={600}
                            className='w-40 md:w-[400px] lg:w-[500px]'
                        />
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 my-10'>
                        <Image 
                            src="/jana-nayagan 32.png"
                            alt='product image'
                            width={500}
                            height={500}
                            className='w-[200px] h-[100px] md:w-[400px] md:h-[200px]'
                        />
                        {/* <p className='z-10 text-white text-center my-4 text-sm md:text-lg'>
                            One last frame, one lasting reign, the hero who ruled stories and hearts, now etched forever in victory and leadership. A timeless symbol of courage, passion, and purpose of his journey ends, but his legend echoes through generations
                        </p> */}
                        <LinkComponent link='/product' content="Buy Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner