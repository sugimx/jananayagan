import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'
const Banner = lazy(() => import('@/components/layouts/user/Banner'))
import FaQuestions from '@/components/layouts/user/Faquestions'
const Information = lazy(() => import('@/components/layouts/user/Information'))
import LimitedEdition from '@/components/layouts/user/LimitedEdition'
import LuckyDraw from '@/components/layouts/user/LuckyDraw'
import SalesSection from '@/components/layouts/user/SalesSection'
import Section2 from '@/components/layouts/user/Section_2'

const HomeScreen = () => {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <Banner />
                <SalesSection />
                <LuckyDraw />
                <Section2 />
                <LimitedEdition />
                <Information />
                <FaQuestions />
            </Suspense>
        </>
    )
}

export default HomeScreen