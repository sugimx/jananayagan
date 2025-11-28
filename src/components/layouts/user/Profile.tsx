import React, { lazy, Suspense } from 'react'
import LoadingScreen from '@/screens/LoadingScreen'
const LazyComponent = lazy(() => import('./BuyerDetails'))

const Profile = () => {
    return (
        <div className='max-w-[1800px] mx-auto'>
            <Suspense fallback={<LoadingScreen />}>
                <LazyComponent />
            </Suspense>
        </div>
    )
}

export default Profile