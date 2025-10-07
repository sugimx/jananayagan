import React from 'react'
import Image from 'next/image'
import Container from './Container'
import LinkComponent from '@/components/ui/user/LinkComponent'

const Banner = () => {
    return (
        <>
            <Container>
                <div className='bg-black h-[50vh] md:h-[70vh] my-10 md:my-2'>
                    <div className='flex md:mx-20'>
                        <div className='flex-1 hidden md:flex'>
                            <Image 
                                src="/cup_image.png"
                                alt="product image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center flex-1 my-10'>
                            <Image 
                                src="/jana-nayagan 32.png"
                                alt='product image'
                                width={500}
                                height={500}
                                className='w-[300px] h-[150px] md:w-[400px] md:h-[200px]'
                            />
                            <p className='z-10 text-white text-center my-4 text-sm md:text-lg'>
                                One last frame, one lasting reign, the hero who ruled stories and hearts, now etched forever in victory and leadership. A timeless symbol of courage, passion, and purpose of his journey ends, but his legend echoes through generations
                            </p>
                            <LinkComponent link='/product' content="Buy Now" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner