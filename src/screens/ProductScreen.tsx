import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

const ProductSuspense = lazy(() => import('@/components/layouts/user/SingleProduct'))

const ProductScreen = () => {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <ProductSuspense />
            </Suspense>
        </>
    )
}

export default ProductScreen