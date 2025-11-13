import React from 'react'
import Container from './Container'
import Image from 'next/image'
import UnorderedList from '@/components/ui/user/UnorderedList'

const LuckyDraw = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_center,_#640101,_#000000_70%,_#000000_100%)] text-white'>
            <div className='py-7 my-10 md:my-20 md:mx-20'>
                <h1 className='text-center text-[1.5rem] text-[#F5BB0B] font-semibold md:text-[3rem]'>Lucky Draw</h1>
                <div className='flex flex-col md:flex-row justify-around items-center border-1 border-[#F5BB0B] rounded-lg md:rounded-4xl'>
                    <div className='my-4 mx-2 md:mx-6'>
                        <h1 className='text-[#F5BB0B] text-[1rem] font-semibold mb-2 md:text-xl'>Every cup buyer automatically enters our Mega Lucky Draw</h1>
                        <UnorderedList content='1st Prize - ₹27,70,000' />
                        <UnorderedList content='2nd Prize - ₹27,70,000' />
                        <UnorderedList content='3rd Prize - ₹27,70,000' />
                        <UnorderedList content='4th to 13th Prize - ₹2,77,000 each' />
                    </div>
                    <div className=''>
                        <Image 
                            src='/tvk_cup.png'
                            width={500}
                            height={500}
                            alt="cup image"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// bg-[conic-gradient(from_180deg_at_50%_50%,_#640101,_#000000_25%,_#640101_50%,_#000000_75%,_#640101_100%)]

export default LuckyDraw