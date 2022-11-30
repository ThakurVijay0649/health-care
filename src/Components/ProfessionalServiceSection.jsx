import React from 'react'
import "../Styles/ProfessionalServiceSection.scss"
import ProfessionalServiceCard from './ProfessionalServiceCard'

const ProfessionalServiceSection = () => {
    return (
        <div className='professional-services'>
            <p>Our Services</p>
            <h1>Telemedicine Professional Services</h1>
            <div className="professional-services-row">
                {
                    [1, 2, 3, 4].map((item, index) => (
                        <ProfessionalServiceCard />
                    ))
                }
            </div>

        </div>
    )
}

export default ProfessionalServiceSection