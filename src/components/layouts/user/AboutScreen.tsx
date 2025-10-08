import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'

const AboutScreen = () => {
    return (
        <Container>
            <div className='w-[80%] mx-auto my-10 lg:flex lg:items-center'>
                <div className='leading-relaxed text-center lg:flex-1 lg:text-start'>
                    <h1 className='text-3xl text-[#F5D57A] font-semibold my-2 md:text-[2rem]'>About Us</h1>
                    <p className='text-justify text-sm md:text-[1rem]'>
                        Be a part of cinematic history with this official Jana Nayagan {"Collector’s"} Mug. Crafted for true fans, each mug carries a unique serial number, making every piece personal, cherished, and a timeless tribute to the {"film’s"} legacy. 
                        Be a part of cinematic history with this official Jana Nayagan {"Collector’s"} Mug. Crafted for true fans, each mug carries a unique serial number, making every piece personal, cherished, and a timeless tribute to the {"film’s"} legacy.
                        Be a part of cinematic history with this official Jana Nayagan {"Collector’s"} Mug. Crafted for true fans, each mug carries a unique serial number, making every piece personal, cherished, and a timeless tribute to the {"film’s"} legacy.
                    </p> 
                    <Link href='/product' className='border-1 border-[#F5D57A] py-1 inline-block my-3 px-10 text-sm md:text-lg'>Explore</Link>
                </div>
                <div className='lg:flex-1 flex justify-center items-center mt-6 lg:mt-0'>
                    <Image 
                        src="/cup_image.png"
                        width={1000}
                        height={1000}
                        alt='cup image'
                        className='w-full md:h-[400px] md:w-[450px]'
                    />
                </div>
            </div>
        </Container>
    )
}

export default AboutScreen