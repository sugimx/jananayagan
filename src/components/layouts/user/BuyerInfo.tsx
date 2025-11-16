"use client"

import React, { lazy, Suspense } from 'react'
import LoadingScreen from '@/screens/LoadingScreen'
import { useAuth } from '@/hooks/useAuth'
import LinkComponent from '@/components/ui/user/LinkComponent'
import Container from './Container'

const LazyComponent = lazy(() => import('./BuyerSlider'))

const BuyerInfo = () => {
    const { token } = useAuth()

    if(!token) {
        return (
            <div className='flex justify-center items-center flex-col py-20 px-2'>
                <p className='bg-gradient-to-r from-[#F5BB0B] via-[#FFED9F] to-[#FF6B00] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,187,11,0.35)] text-sm leading-relaxed my-1 md:text-lg md:my-4'>Oops! Buyer info not found. Login is required to purchase product.</p>
                <LinkComponent link='/login' content='Login' />
            </div>
        )
    }
    return (
        <>
        <Container>
            <div className='max-w-[1800px] mx-auto'>
                <div className='h-auto py-10 relative'>
                    <div>
                        <h1 className='text-[1.5rem] text-[#F5BB0B] font-semibold my-1 md:text-[3rem] md:my-2'>Buyer Info</h1>
                        <p className='text-sm leading-relaxed my-1 md:text-lg md:my-4 text-white'>Fill in your details to receive your unique ID for the Official Jana Nayagan Limited Edition Cup.</p>
                         {/* and secure your entry into the lucky draw. */}
                    </div>
                    <Suspense fallback={<LoadingScreen />}>
                        <LazyComponent />
                    </Suspense>
                </div>
            </div>
        </Container>
        </>
    )
}

export default BuyerInfo