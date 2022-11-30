import React from 'react'
import "../Styles/ServiceSection.scss"

const ServiceCard = ({
    title,
    description,
    image
}) => {
    return (
        <div className='service-card'>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard