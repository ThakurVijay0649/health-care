import React from 'react'
import "../Styles/Doctors.scss"
import { motion } from "framer-motion"

const DoctorCard = ({
    name,
    image,
    speciality,
    delay,
    x
}) => {
    return (
        <motion.div className='doctor-card' initial={{
            x: x,
            opacity: 0
        }} whileInView={{
            x: 0,
            opacity: 1
        }} transition={{
            duration: 1,
            delay: delay
        }}>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{speciality}</p>
        </motion.div>
    )
}

export default DoctorCard