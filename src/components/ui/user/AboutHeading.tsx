import React from 'react'

type props = {
    content: string
}

const AboutHeading = ({ content }: props) => {
    return (
        <h1 className='text-3xl text-[#a20000] font-semibold my-2 md:text-[2rem] underline'>{content}</h1>
    )
}

export default AboutHeading