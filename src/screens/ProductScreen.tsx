import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

const ProductSuspense = lazy(() => import('@/components/layouts/user/SingleProduct'))
// const BuyerSuspense = lazy(() => import('@/components/layouts/user/BuyerInfo'))

const ProductScreen = () => {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <ProductSuspense />
                {/* <BuyerSuspense /> */}
            </Suspense>
        </>
    )
}

export default ProductScreen