import React, { lazy, Suspense } from 'react'

const ProductSuspense = lazy(() => import('@/components/layouts/user/SingleProduct'))
const BuyerSuspense = lazy(() => import('@/components/layouts/user/BuyerInfo'))

const ProductScreen = () => {
    return (
        <>
            <Suspense fallback={<p>loading....</p>}>
                <ProductSuspense />
                <BuyerSuspense />
            </Suspense>
        </>
    )
}

export default ProductScreen