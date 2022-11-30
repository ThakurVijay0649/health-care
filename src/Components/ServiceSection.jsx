import React from 'react'
import "../Styles/ServiceSection.scss"
import serviceimage1 from "../images/serviceimage1.png"
import serviceimage2 from "../images/serviceimage2.png"
import serviceimage3 from "../images/serviceimage3.png"
import serviceimage4 from "../images/serviceimage4.png"
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
    const services = [
        {
            id: 1,
            title: "24/7 Support",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corrupti maxime assumenda obcaecati, facilis, tenetur omnis, aspernatur repellat minus dolorum volu",
            image: serviceimage1
        },
        {
            id: 2,
            title: "Maximize Revenue",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corrupti maxime assumenda obcaecati, facilis, tenetur omnis, aspernatur repellat minus dolorum volu",
            image: serviceimage2
        },
        {
            id: 3,
            title: "Health Plans",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corrupti maxime assumenda obcaecati, facilis, tenetur omnis, aspernatur repellat minus dolorum volu",
            image: serviceimage3
        },
        {
            id: 4,
            title: "Intuitive Scheduling",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corrupti maxime assumenda obcaecati, facilis, tenetur omnis, aspernatur repellat minus dolorum volu",
            image: serviceimage4
        },

    ]
    return (
        <div className='service-section'>
            <p>What We Do</p>
            <h1>Features Providers And Patients Love</h1>
            <div className="service-row">
                {
                    services.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceSection