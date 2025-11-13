"use client"

import React from 'react'
import LogoutButton from '@/components/ui/user/LogoutButton'
import dynamic from 'next/dynamic'

const Invoice = dynamic(() => import('./Invoice'))
const AddressPage = dynamic(() => import('./AddressPage'))
const MyProfile = dynamic(() => import('@/screens/MyProfile'))

type HeadingProps = {
    content: string
}

const Heading = ({ content }: HeadingProps) => {
    return (
        <h1 className='text-[0.8rem] text-center font-semibold mb-1 md:text-start md:text-[1.2rem] md:mb-3'>{content}</h1>
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
                border border-[#F5BB0B] px-2 py-2 rounded-xl flex-1 md:px-6 md:py-5 cursor-pointer font-light 
                ${isActive ? 'bg-[#7a0202] shadow-lg ring-2 text-[#F5D57A]' : 'bg-transparent hover:bg-gray-800 hover:text-white text-[#F5BB0B]'}
                `
            }
        >
            {children}
        </div>
    )
}

const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className='hidden md:flex md:text-[1rem]'>{content}</p>
    )
}

const BuyerDetails = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    
    const data = [
        {
            id: 1,
            content: "My Orders",
            paragraph: "Track and manage all your past and current orders in one place"
        },
        {
            id: 2,
            content: "My Profile",
            paragraph: "View and manage your personal information."
        },
        {
            id: 3,
            content: "My Addresses",
            paragraph: "Manage your saved addresses for faster and easier order"
        }
    ]

    return (
        <>
           <div className='mt-4 md:mt-10 mx-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold text-[#F5BB0B] mb-4 md:text-2xl'>Account</h1>
                    <LogoutButton />
                </div>
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
            <div className='min-h-[40vh]'>
                {activeIndex === 0 && <Invoice />}
                {activeIndex === 1 && <MyProfile />}
                {activeIndex === 2 && <AddressPage />}
            </div>
        </>
    )
}

export default BuyerDetails