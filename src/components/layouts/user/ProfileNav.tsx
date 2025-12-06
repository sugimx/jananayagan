'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type props = {
    href: string
    content: string
    children: React.ReactNode
}

const ProfileNav = ({ href, content, children }: props) => {
    const currentPath = usePathname()
    return (
        <>
            <div className={`flex items-center text-black font-light gap-2 py-2 px-2 rounded-full ${currentPath === href ? 'bg-[#F5BB0B]' : 'text-white'}`}>
                <span className='md:text-2xl'>
                    {children}
                </span>
                <Link href={href} className='text-sm font-semibold md:text-lg'>
                    {content}
                </Link>
            </div>
        </>
    )
}

export default ProfileNav