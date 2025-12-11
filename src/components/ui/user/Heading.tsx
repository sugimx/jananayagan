import React from 'react'

const Heading = ({ content }: { content: string }) => {
    return (
        <h1 className='font-semibold text-[#F5BB0B] text-sm md:text-md lg:text-lg'>{content}</h1>
    )
}

export default Heading