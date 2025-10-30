"use client"

import MobileNavbar from '@/components/layouts/user/MobileNavbar'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Burger = () => {
    const [ toggle, setToggle ] = React.useState(false)
    const currentPath = usePathname()

    useEffect(() => {
        if (currentPath && toggle) {
            setToggle((prev) => !prev);
        }
    }, [currentPath, toggle])

    return (
        <>
            <div 
                className={`
                    ${toggle && 
                        'active'
                    } flex flex-col gap-[6px] cursor-pointer burger--menu md:hidden`} 
                onClick={() => setToggle((prev) => !prev)}
            >
                <span className='w-[25px] h-[1px] bg-amber-400'></span>
                <span className='w-[25px] h-[1px] bg-amber-400'></span>
                <span className='w-[25px] h-[1px] bg-amber-400'></span>
            </div>
            <MobileNavbar toggle={toggle} currentPath={currentPath} />
        </>
    )
}

export default Burger