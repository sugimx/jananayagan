import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

const PaymentSuspense = lazy(() => import('@/components/layouts/user/Payment'))

const PaymentScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <PaymentSuspense />
        </Suspense>
    )
}

export default PaymentScreen