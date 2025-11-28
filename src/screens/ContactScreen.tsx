import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const ContactUs = lazy(() => import('@/components/layouts/user/ContactUs'))

const ContactScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <ContactUs />
        </Suspense>
    )
}

export default ContactScreen