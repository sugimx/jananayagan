import Link from 'next/link'
import React from 'react'

type props = {
    content?: string
    link?: string
    className?: string
}

const LinkComponent = ({ link = "", content, className }: props) => {
    return (
        <Link 
            href={link} 
            className={`bg-[#F5D57A] text-black text-center py-2 w-40 text-sm md:text-md font-semibold rounded-md ${className ?? className}`}
        >{content}</Link>
    )
}

export default LinkComponent