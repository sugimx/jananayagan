import Banner from '@/components/layouts/user/Banner'
import FaQuestions from '@/components/layouts/user/Faquestions'
import Information from '@/components/layouts/user/Information'
import LimitedEdition from '@/components/layouts/user/LimitedEdition'
import LuckyDraw from '@/components/layouts/user/LuckyDraw'
import SalesSection from '@/components/layouts/user/SalesSection'
import Section2 from '@/components/layouts/user/Section_2'
import React from 'react'

const HomeScreen = () => {
    return (
        <>
            <Banner />
            <SalesSection />
            <Section2 />
            <LuckyDraw />
            <LimitedEdition />
            <Information />
            <FaQuestions />
        </>
    )
}

export default HomeScreen