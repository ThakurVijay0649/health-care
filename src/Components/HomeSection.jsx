import React from 'react'
import "../Styles/HomeSection.scss"
import bannerImage from "../images/banner-img-1.png"
import { ImPlay3 } from 'react-icons/im'
import { AiOutlineMinus, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { motion } from "framer-motion"

const HomeSection = () => {
    return (
        <div className='home-section'>
            <motion.div className="left-home" initial={{
                x: "-100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <p className='start-journey'>Start Your Journey</p>
                <h1>We Provide <br />Health Care Services</h1>
                <p className='home-para'>Resolves the disease by making face-to-face contact with patients on this platform.</p>
                <div className="btns">
                    <button className='get-started-btn'>Get Started</button>
                    <button className='watch-video-btn'><ImPlay3 /><p>Watch Video</p></button>
                </div>
                <p className="contact-link">Have question? <a href="/">Please contact us</a></p>
                <div className="social-links">
                    <p>Social <AiOutlineMinus /></p>
                    <div className="social-icons">
                        <BsFacebook />
                        <AiFillTwitterCircle />
                        <AiFillLinkedin />
                        <AiFillInstagram />
                    </div>
                </div>
            </motion.div>
            <motion.div className="right-home" initial={{
                x: "100%",
                opacity: 0
            }} whileInView={{
                x: 0,
                opacity: 1
            }} transition={{
                duration: 1,
            }}>
                <img src={bannerImage} alt="" />
            </motion.div>
        </div>
    )
}

export default HomeSection
