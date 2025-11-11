import React from 'react'
import Container from './Container'
import Image from 'next/image'
import UnorderedList from '@/components/ui/user/UnorderedList'

const LuckyDraw = () => {
    return (
        <Container>
            <div className='py-7 my-10 md:my-20 md:mx-20'>
                <h1 className='text-center text-[1.5rem] text-[#F5BB0B] font-semibold md:text-[3rem]'>Lucky Draw</h1>
                <div className='flex flex-col md:flex-row justify-around items-center border-1 border-[#F5BB0B] rounded-lg md:rounded-4xl'>
                    <div className='my-4 mx-2 md:mx-6'>
                        <h1 className='text-[#F5BB0B] text-[1rem] font-semibold mb-2 md:text-xl'>FAN REWARD SCHEME</h1>
                        <UnorderedList content='Every booking automatically enters you into our Reward Scheme.' />
                        <UnorderedList content='Winners will be selected through an online random system.' />
                        <UnorderedList content='Results will be published on our website.' />
                        <UnorderedList content='The company decision will be final and binding.' />
                        <UnorderedList content='Rewards are personal, non-transferable & non-exchangeable.' />
                    </div>
                    <div className=''>
                        <Image 
                            src='/cup_image.png'
                            width={500}
                            height={500}
                            alt="cup image"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LuckyDraw