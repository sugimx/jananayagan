import React from 'react'
import Container from './Container'

const Information = () => {
    return (
        <Container>
            <div className='my-10 md:my-20 md:mx-20'>
                <h1 className='text-center text-[1.5rem] text-[#F5D57A] font-semibold md:text-[3rem]'>INFORMATION</h1>
                <div className='flex flex-col md:flex-row justify-around items-center border-1 border-[#F5D57A] rounded-lg md:rounded-4xl md:py-8'>
                    <div className='my-4 mx-2 md:mx-12 flex-1'>
                        <h1 className='text-[#F5D57A] text-[1.2rem] font-semibold mb-2 text-center md:text-start md:text-[3rem]'>The Legacy Beyond the Curtain</h1>
                        <p className='text-sm md:text-lg'>Forever one hero, one leader though the curtain falls, his influence only rises. In power, memory, and story, he endures, shaping the future where legends are born, live on, and inspire generations long after their final act has ended.</p>
                    </div>
                    <div className="md:flex h-100 hidden">
                        <div className='w-[2px] h-full bg-[#F5D57A]'></div>
                    </div>
                    <div className='flex-1 md:mx-12 w-[80%] my-4 flex gap-4 flex-col'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm md:text-lg'>Name</label>
                            <input className='border-1 border-[#F5D57A] outline-none rounded-lg py-2 px-2' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm md:text-lg'>Email</label>
                            <input className='border-1 border-[#F5D57A] outline-none rounded-lg py-2 px-2'  />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm md:text-lg'>Message</label>
                            <textarea className='border-1 border-[#F5D57A] outline-none rounded-lg py-10 px-2' />
                        </div>
                        <button className='w-full bg-[#F5D57A] text-black rounded-md py-2 font-semibold'>Submit</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Information