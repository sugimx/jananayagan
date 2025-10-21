import React, { lazy, Suspense } from 'react'

const AddressSuspense = lazy(() => import('@/components/layouts/user/AddressForm'))

const AddressScreen = () => {
    return (
        <Suspense fallback={<p>loading....</p>}>
            <AddressSuspense />
        </Suspense>
    )
}

export default AddressScreen