import React from 'react'

const Heading = ({ content }: { content: string }) => {
    return (
        <h1 className='font-semibold text-[#F5D57A] text-sm md:text-md lg:text-lg'>{content}</h1>
    )
}

export default Heading