import React, { lazy, Suspense } from 'react'

const PaymentSuspense = lazy(() => import('@/components/layouts/user/Payment'))

const PaymentScreen = () => {
    return (
        <Suspense fallback={<p>loading....</p>}>
            <PaymentSuspense />
        </Suspense>
    )
}

export default PaymentScreen