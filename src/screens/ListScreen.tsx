import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const CupList = lazy(() => import('@/components/layouts/user/CupList'))

const ListScreen = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <CupList />
        </Suspense>
    )
}

export default ListScreen