import React from 'react'
import Container from './Container'
import Image from 'next/image'

const LimitedEdition = () => {
    return (
        <Container>
            <div className=''>
                <div className='flex justify-around md:mx-20 items-center'>
                    <div className='hidden md:flex flex-1'>
                        <Image 
                            src='/cup_image.png'
                            width={500}
                            height={500}
                            alt="cup image"
                            className=''
                        />
                    </div> 
                    <div className='flex-1 flex flex-col items-center gap-4 md:items-start'>
                        <h1 className='text-[#F5D57A] text-[1.5rem] font-semibold text-center md:text-xl md:text-start md:text-[3rem]'>Limited Edition</h1>
                        <p className='text-sm md:text-lg'>Step in and be a part of it. This exclusive Jana Nayagan Mug, with a unique serial number, is a keepsake every true fan will own proudly.</p>
                        <button className='border-1 border-[#F5D57A] px-5 py-2 text-[#F5D57A] md:px-12 rounded-md md:mt-10 text-sm md:text-lg'>Buy now</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LimitedEdition