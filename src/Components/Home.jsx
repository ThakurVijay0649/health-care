import React from 'react'
import Appointment from './Appointment'
import Doctors from './Doctors'
import HelpPatientSection from './HelpPatientSection'
import HomeSection from './HomeSection'
import ImageSwiper from './ImageSwiper'
import ProfessionalServiceSection from './ProfessionalServiceSection'
import ServiceSection from './ServiceSection'
import Subscribe from './Subscribe'
import WhatWeProvide from './WhatWeProvide'

const Home = () => {
    return (
        <>
            <HomeSection />
            <ImageSwiper />
            <ServiceSection />
            <WhatWeProvide />
            <ProfessionalServiceSection />
            <HelpPatientSection />
            <Appointment />
            <Doctors />
            <Subscribe />
        </>
    )
}

export default Home
