import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LimitedEdition = () => {
    return (
        <>
            <div className=''>
                <div className='flex justify-around md:mx-20 items-center'>
                    <div className='hidden md:flex flex-1'>
                        <Image 
                            src='/tvk_cup.png'
                            width={500}
                            height={500}
                            alt="cup image"
                            className=''
                        />
                    </div> 
                    <div className='flex-1 flex flex-col items-center gap-4 md:items-start'>
                        <h1 className='text-[#F5BB0B] text-[1.5rem] font-semibold text-center md:text-xl md:text-start md:text-[3rem]'>Limited Edition</h1>
                        <p className='text-sm text-white md:text-lg lg:text-xl'>The TVK Fan Tribute Limited Edition Cup is designed to celebrate the unstoppable spirit of our  people — unity, leadership, and love for a purpose that connects millions.</p>
                        <p className='text-sm text-white md:text-lg lg:text-xl'>Each cup carries a unique serial number, linking directly to your name on our official website — making you a part of a legacy that never fades.</p>
                        <Link href='/product' className='border-1 border-[#F5BB0B] px-5 py-2 text-[#F5BB0B] md:px-12 rounded-md md:mt-10 text-sm md:text-lg'>Buy now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LimitedEdition