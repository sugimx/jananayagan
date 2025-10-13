import React, { lazy, Suspense } from 'react'
import Container from './Container'
const LazyComponent = lazy(() => import('./BuyerDetails'))

const Profile = () => {
    return (
        <Container>
            <Suspense fallback={<p>Loading...</p>}>
                <LazyComponent />
            </Suspense>
        </Container>
    )
}

export default Profile