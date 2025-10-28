import React, { lazy, Suspense } from 'react'
import Container from './Container'
import LoadingScreen from '@/screens/LoadingScreen'
const LazyComponent = lazy(() => import('./BuyerDetails'))

const Profile = () => {
    return (
        <Container>
            <Suspense fallback={<LoadingScreen />}>
                <LazyComponent />
            </Suspense>
        </Container>
    )
}

export default Profile