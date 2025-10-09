import Link from 'next/link'
import React from 'react'

type Props = {
    toggle: boolean
    currentPath?: string
}

const MobileNavbar = ({ toggle, currentPath }: Props) => {
    return toggle && (
        <>
            <div className={`${toggle ? "mobile--navbar active" : "mobile--navbar"}`}>
                <ul className='list-none flex flex-col gap-4 p-4 text-white text-md'>
                    <li className='py-2'>
                        <Link href="/" className={currentPath === '/' ? 'text-yellow-500' : ''}>Home</Link>
                    </li>
                    <li className='py-2'>
                        <Link href="/about" className={currentPath === '/about' ? 'text-yellow-500' : ''}>About</Link>
                    </li>
                    <li className='py-2'>
                        <Link href="/product" className={currentPath === '/product' ? 'text-yellow-500' : ''}>Product</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileNavbar