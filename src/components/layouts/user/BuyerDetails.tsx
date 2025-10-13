"use client"

import React from 'react'
import LogoutButton from '@/components/ui/user/LogoutButton'
import Invoice from './Invoice'

type HeadingProps = {
    content: string
}

const Heading = ({ content }: HeadingProps) => {
    return (
        <h1 className='text-[1rem] font-semibold mb-1 md:text-[1.2rem] md:mb-3'>{content}</h1>
    )
}

type DivTagProps = {
    children: React.ReactNode;
    isActive: boolean;
    onActivate: () => void;
    value: number;
}

const DivTag = ({ children, isActive, onActivate, value }: DivTagProps) => {
    return (
        <div
            onClick={onActivate}
            data-value={value}
            className={`
                border border-[#F5D57A] px-2 py-2 rounded-xl flex-1 md:px-6 md:py-5 cursor-pointer font-light 
                ${isActive ? 'bg-[#F5D57A] shadow-lg ring-2 text-black' : 'bg-transparent hover:bg-gray-800 text-[#F5D57A]'}
                `
            }
        >
            {children}
        </div>
    )
}

const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className='text-[0.7rem] md:text-[1rem]'>{content}</p>
    )
}

const BuyerDetails = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    
    const data = [
        {
            id: 1,
            content: "My Profile",
            paragraph: "View and manage your personal information."
        },
        {
            id: 2,
            content: "My Orders",
            paragraph: "Track and manage all your past and current orders in one place"
        },
        {
            id: 3,
            content: "My Addresses",
            paragraph: "Manage your saved addresses for faster and easier order"
        }
    ]

    return (
        <>
           <div className='mt-4 md:mt-10 '>
                <h1 className='text-xl font-semibold text-[#F5D57A] mb-4 md:text-2xl'>Account</h1>
                <div className='flex justify-between gap-2 w-full md:gap-8'>
                    {data && data.map((item, i) => (
                        <DivTag
                            key={i}
                            value={i}
                            isActive={activeIndex === i}
                            onActivate={() => setActiveIndex(i)}
                        >
                            <Heading content={item.content} />
                            <Paragraph content={item.paragraph} />
                        </DivTag>
                    ))}
                </div>
            </div>
            <div className='h-[40vh]'>
                <div className={`${activeIndex === 0 ? 'visible' : 'hidden'}`}>
                    <h1>My Profile</h1>
                    <LogoutButton />
                </div>
                <div className={`${activeIndex === 1 ? 'visible' : 'hidden'}`}>
                    <h1>My Orders</h1>
                    <Invoice />
                </div>
                <div className={`${activeIndex === 2 ? 'visible' : 'hidden'}`}> 
                    <h1>My Addresses</h1>
                </div>
            </div>
        </>
    )
}

export default BuyerDetails