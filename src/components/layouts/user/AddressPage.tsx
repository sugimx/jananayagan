"use client"

import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import AddressFormTab from './AddressFormTab'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='border-1 border-[#F5D57A] rounded-xl mb-4 md:mb-1 md:w-[calc(50%-7.5px)] xl:w-[calc(25%-6px)]'>
            <div className='flex justify-center items-center px-2 py-4'>
                {children}
            </div>
        </div>
    )
}

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-2'>
            {children}
        </div>
    )
}

const AddressParagraph = ({ content }: { content: string }) => {
    return (
        <p className='text-sm text-[#F5D57A] mb-2 md:text-[1rem]'>
            {content}
        </p>
    )
}

const CustomerDetails = ({ content }: { content: string }) => {
    return (
        <p className='text-xs text-[#808089] md:text-[0.8rem]'>
            {content}
        </p>
    )
}

const AddressPage = () => {
    const [ toggle, setToggle ] = React.useState(false)
    return (
        <>
            <div className='my-5 relative'>
                <div className='flex justify-end items-center mb-4'>
                    <button 
                        className='
                            text-black bg-[#F5D57A] text-[0.8rem] px-5 md:px-10 py-2 rounded-md md:text-sm cursor-pointer flex items-center gap-1 font-semibold' 
                            onClick={() => setToggle(!toggle)}
                        > 
                            <FaPlus className='font-bold' />
                            <span>New Address</span>
                    </button>
                </div>
                <div className='w-[100%] h-auto md:flex md:gap-[15px] lg:gap-2 md:flex-wrap'>
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <MainContainer key={index}>
                            <Section>
                                <FaLocationDot className='text-xl text-[#F5D57A]' />
                            </Section>
                            <Section>
                                <AddressParagraph content={`${item} Nguyen Dinh Chieu,D.3,HCM 128 Nguyen Dinh Chieu,D.3,HCM`} />
                                <CustomerDetails content="Nick • 0896969696" />
                            </Section>
                            <Section>
                                <FiEdit2 className='text-2xl text-[#808089] cursor-pointer' onClick={() => setToggle(!toggle)}/>
                            </Section>
                        </MainContainer>
                    ))}
                </div>
                {toggle && <AddressFormTab state={toggle} setState={setToggle} />}
            </div>
        </>
    )
}

export default AddressPage