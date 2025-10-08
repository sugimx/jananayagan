"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'
import RightsReserved from './RightsReserved'

const Layout = () => {
    const currentPath = usePathname()
    return (
        <>
            {currentPath !== '/login' && currentPath !== '/profile' && (
                <>
                    <Footer />
                    <RightsReserved />
                </>
            )}
        </>
    )
}

export default Layout