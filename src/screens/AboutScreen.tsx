import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const AboutContent = lazy(() => import('@/components/layouts/user/AboutContent'))

const AboutScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <AboutContent />
        </Suspense>
    )
}

export default AboutScreen