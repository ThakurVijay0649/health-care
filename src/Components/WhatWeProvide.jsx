import React from 'react'
import "../Styles/WhatWeProvide.scss"
import provideImage from "../images/what-we-provide-img.png"
import { motion } from "framer-motion"

const WhatWeProvide = () => {
    return (
        <div className='provide-section'>
            <motion.div className="left-provide" initial={{
                x: "-100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <img src={provideImage} alt="" />
            </motion.div>
            <motion.div className="right-provide" initial={{
                x: "100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <p>What We Provides</p>
                <h1>Resolves the disease by making face-to-face contact with patients on the telehealth platform.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum vitae inventore adipisci voluptatibus quos?</p>
                <div>
                    <h1>80%</h1>
                    <p>Of patients are interested in using telemedicine</p>
                </div>
                <div>
                    <h1>90%</h1>
                    <p>Of patients are satisfied with the telehealth experience</p>
                </div>
                <div>
                    <h1>40%</h1>
                    <p>Of patients use telemedicine due to short travel time</p>
                </div>
            </motion.div>
        </div>
    )
}

export default WhatWeProvide