"use client"

import Link from 'next/link'
import React from 'react'

const Heading = ({ content }: { content: string }) => {
    return (
        <h1 className='font-bold text-xs md:text-[1.2rem] lg:text-[1.5rem]'>{content}</h1>
    )
}

const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className='text-xs md:mt-1 md:text-[1.0rem] lg:text-[1.2rem]'>{content}</p>
    )
}

const DivTag = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className='flex justify-between flex-col gap-2 md:flex-row md:items-center'>
            {children}
        </div>
    )
}

const SalesSection = () => {
    const [ index, setIndex ] = React.useState(0)
    const salesData = [
        {
            id: 1,
            state: 'TN',
            sales: '54,00,000'
        },
        {
            id: 2,
            state: 'KL',
            sales:  '72,50,000', 
        }
    ]

    React.useEffect(() => {
        const intervel = setInterval(() => {
            setIndex((prev) => (prev + 1) % salesData.length)
        }, 3000)

        return () => clearInterval(intervel)
    }, [salesData])
    return (
        <>
            <div className='text-[#F5D57A] flex border-1 border-[#F5D57A] max-w-[1450px] mx-2 mb-30 h-[80px] rounded-xl justify-between items-center px-5 md:mx-auto md:h-[120px]'>
                <DivTag>
                    <Heading content={`Total Units Sold In ${salesData[index].state}`} />
                    <Paragraph content={`${salesData[index].sales}`} />
                </DivTag>
                <DivTag>
                    <Heading content="Sales Ends In" />
                    <Paragraph content='5d 24h 34min 00s' />
                </DivTag>
                <Link href="/product" className='bg-[#F5D57A] text-black px-4 py-1 text-sm rounded-md md:text-md md:px-12 md:py-2 cursor-pointer'>Shop Now</Link>
            </div>
        </>
    )
}

export default SalesSection