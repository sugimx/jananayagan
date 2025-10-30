import Image from 'next/image'
import React from 'react'
import Container from './Container'

const Section2 = () => {
  return (
    <Container>
        <div className='text-center flex flex-col items-center gap-8 md:flex-row md:text-start md:justify-around'>
            <div className='flex flex-col gap-2 md:w-[40%] md:justify-start md:gap-10'>
                <h1 className='text-[1.5rem] font-semibold text-[#F5D57A] md:text-[3rem]'>One Last Roar - A Story of Strength and Farewell</h1>
                <p className='text-sm md:text-lg lg:text-xl'>This {"isn't"} just about a Limited Edition Cup — {"it's"} about dreams coming true. One lucky buyer wins ₹27,70,000, and ten more fans shine with ₹2,77,000 each.</p>
                {/* <p className='text-sm md:text-lg lg:text-xl'>This {"isn't"} Stylish, durable cups perfect for hot or cold drinks. Eco-friendly, reusable, and designed for everyday comfort and convenience.</p> */}
            </div>
            <Image 
                src="/home_section_yellow_bg_cup.png"
                width={300}
                height={300}
                alt='cup'
                className='rounded-xl md:w-[350px]'
            />
        </div>
    </Container>
  )
}

export default Section2