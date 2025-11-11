"use client"

import React, { lazy, Suspense } from 'react'
import Container from './Container'
import LoadingScreen from '@/screens/LoadingScreen'
import { useAuth } from '@/hooks/useAuth'
import LinkComponent from '@/components/ui/user/LinkComponent'

const LazyComponent = lazy(() => import('./BuyerSlider'))

const BuyerInfo = () => {
    const { token } = useAuth()

    if(!token) {
        return (
            <div className='flex justify-center items-center flex-col py-20 px-2'>
                <p className='text-[#7a0202] text-sm leading-relaxed my-1 md:text-lg md:my-4'>Oops! Buyer info not found. Login is required to purchase product.</p>
                <LinkComponent link='/login' content='Login' />
            </div>
        )
    }
    return (
        <>
            <div className='max-w-[1800px] mx-auto'>
                <div className='h-[80vh] py-10 relative'>
                    <div>
                        <h1 className='text-[1.5rem] text-[#7a0202] font-semibold my-1 md:text-[3rem] md:my-2'>Buyer Info</h1>
                        <p className='text-sm leading-relaxed my-1 md:text-lg md:my-4'>Fill in your details to receive your unique ID for the Official Jana Nayagan Limited Edition Cup.</p>
                         {/* and secure your entry into the lucky draw. */}
                    </div>
                    <Suspense fallback={<LoadingScreen />}>
                        <LazyComponent />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default BuyerInfo