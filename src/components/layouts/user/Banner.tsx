import React from 'react'
import Image from 'next/image'
import LinkComponent from '@/components/ui/user/LinkComponent'
import { FaRupeeSign } from "react-icons/fa"

const Banner = () => {
    return (
        <>
            <div className='bg-[#DCDCDC] min-h-[50vh] md:h-[70vh] py-10 md:py-2'>
                <div className='flex md:mx-20'>
                    <div className='flex-1 hidden md:flex flex-col items-center'>
                        <Image 
                            src="/cup_image.png"
                            alt="product image"
                            width={700}
                            height={700}
                        />
                        <h1 className='text-[1rem] text-[#a20000] font-semibold md:text-[2rem] mr-20 flex items-center'><FaRupeeSign /> 320</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-1 my-10'>
                        <Image 
                            src="/jana-nayagan 32.png"
                            alt='product image'
                            width={500}
                            height={500}
                            className='w-[300px] h-[150px] md:w-[400px] md:h-[200px]'
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