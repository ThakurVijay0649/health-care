import React from 'react'
import "../Styles/HelpPatientSection.scss"
import helpPatientImage from "../images/patients-img.png"
import { BsCheckCircle } from "react-icons/bs"
import { motion } from "framer-motion"

const HelpPatientSection = () => {
    return (
        <div className='help-patient-section'>
            <motion.div className="left-help-patient-section" initial={{
                x: "-100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <p>How We Help Patients</p>
                <h1>We help patients with all the online-based services of Telehealth & Telemedicine.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum vitae inventore adipisci voluptatibus quos?</p>
                <div className="info">
                    <div>
                        <BsCheckCircle />
                        <p>Pay Less</p>
                    </div>
                    <div>
                        <BsCheckCircle />
                        <p>Time Saved</p>
                    </div>
                    <div>
                        <BsCheckCircle />
                        <p>Quality Compared</p>
                    </div>
                    <div>
                        <BsCheckCircle />
                        <p>Telehealth During COVID-19</p>
                    </div>
                    <div>
                        <BsCheckCircle />
                        <p>Share Documents Securely</p>
                    </div>
                    <div>
                        <BsCheckCircle />
                        <p>Primary Care & Urgent Care</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className="right-help-patient-section" initial={{
                x: "100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <img src={helpPatientImage} alt="" />
            </motion.div>
        </div>
    )
}

export default HelpPatientSection