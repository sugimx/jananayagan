import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

const AddressSuspense = lazy(() => import('@/components/layouts/user/AddressForm'))

const AddressScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <AddressSuspense />
        </Suspense>
    )
}

export default AddressScreen