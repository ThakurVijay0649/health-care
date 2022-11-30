import React from 'react'
import "../Styles/Doctors.scss"
import DoctorCard from './DoctorCard'
import doctor1Image from "../images/doctor-1.jpg"
import doctor2Image from "../images/doctor-2.jpg"
import doctor3Image from "../images/doctor-3.jpg"
import doctor4Image from "../images/doctor-4.jpg"

const Doctors = () => {
    return (
        <div className='doctors-section'>
            <p>Our Doctors</p>
            <h1>Meet Our Specialized Doctors</h1>
            <div className="doctor-row">
                <DoctorCard
                    image={doctor1Image}
                    name="Dr. Smith McDonald"
                    speciality="Cardiologist"
                    x={"-100%"}
                />
                <DoctorCard
                    image={doctor2Image}
                    name="Dr. Derek McDonald"
                    speciality="Cardiologist"
                    x={"100%"}
                    delay={0.2}
                />
                <DoctorCard
                    image={doctor3Image}
                    name="Dr. Manuel Tannehill"
                    speciality="Orthopedic"
                    x={"-100%"}
                    delay={0.2}
                />
                <DoctorCard
                    image={doctor4Image}
                    name="Dr. Virginia Erickson"
                    speciality="Gastroenterology"
                    x={"100%"}
                    delay={0.1}
                />
            </div>
        </div>
    )
}

export default Doctors