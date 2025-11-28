import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const Banner = lazy(() => import('@/components/layouts/user/Banner'))
// const FaQuestions = lazy(() => import('@/components/layouts/user/Faquestions'))
const Information = lazy(() => import('@/components/layouts/user/Information'))
// const LimitedEdition = lazy(() => import('@/components/layouts/user/LimitedEdition'))
// const LuckyDraw = lazy(() => import('@/components/layouts/user/LuckyDraw'))
// const SalesSection = lazy(() => import('@/components/layouts/user/SalesSection'))
// const Section2 = lazy(() => import('@/components/layouts/user/Section_2'))
// const SocialResponsibility = lazy(() => import('@/components/layouts/user/SocialResponsiblity'))

const HomeScreen = () => {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <Banner />
                {/* <SalesSection /> */}
                {/* <LuckyDraw /> */}
                {/* <Section2 /> */}
                {/* <LimitedEdition /> */}
                {/* <SocialResponsibility /> */}
                <Information />
                {/* <FaQuestions /> */}
            </Suspense>
        </>
    )
}

export default HomeScreen