import Image from 'next/image'
import React from 'react'
import Container from './Container'

const Section2 = () => {
  return (
    <Container>
        <div className='text-center flex flex-col items-center gap-8 md:flex-row md:text-start md:justify-around py-7'>
            <div className='flex flex-col gap-2 md:w-[40%] md:justify-start md:gap-10'>
                <h1 className='text-[1.5rem] font-semibold text-[#F5BB0B] md:text-[3rem]'>TVK Cup - A Tribute Beyond a Symbol.</h1>
                <p className='text-sm md:text-lg lg:text-xl'>The Voice of a Movement, Now in Your Hands. This {"isn't"} just a cup — {"it's"} a mark of identity, pride, and emotion.</p>
            </div>
            <Image 
                src="/tvk_cup.png"
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