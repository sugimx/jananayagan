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
            className={`bg-gradient-to-tr from-[#ff4e4e] to-[#ffce33] text-black hover:bg-[#7a0202] hover:text-white text-center py-2 w-30 md:w-40 text-xs md:text-md font-semibold rounded-md ${className ?? className}`}
        >{content}</Link>
    )
}

export default LinkComponent