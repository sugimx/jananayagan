import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const Winner = lazy(() => import('@/components/layouts/user/Winner'))

const WinnerScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Winner />
        </Suspense>
    )
}

export default WinnerScreen
