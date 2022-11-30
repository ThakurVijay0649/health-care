import React from 'react'
import "../Styles/ProfessionalServiceSection.scss"
import ps1 from "../images/ps1.png"
import { motion } from "framer-motion"

const ProfessionalServiceCard = () => {
    return (
        <motion.div className='professional-service-card' initial={{
            y: "50%",
            opacity: 0
        }} whileInView={{
            y: 0,
            opacity: 1
        }} transition={{
            duration: 1,
        }}>
            <img src={ps1} alt="" />
            <h1>Digestive Health</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aperiam, minus cupiditate error est reiciendis.</p>
            <a href="/">Read More</a>
        </motion.div>
    )
}

export default ProfessionalServiceCard