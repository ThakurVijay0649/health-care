import React from 'react'
import "../Styles/Appointment.scss"
import appointmentImage from "../images/appointment-img.png"
import { RiUserLine } from "react-icons/ri"
import { AiOutlineMail } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"

const Appointment = () => {
    return (
        <div className='appointment-section'>
            <div className="left-appointment">
                <img src={appointmentImage} alt="" />
            </div>
            <div className="right-appointment">
                <p>What We Provides</p>
                <h1>Resolves the disease by making face-to-face contact with patients on the telehealth platform.</h1>
                <form className="appointment-form">
                    <div className="input-label">
                        <label htmlFor="">Full Name</label>
                        <div className="input-icon">
                            <input type="text" />
                            <RiUserLine />
                        </div>
                    </div>
                    <div className="input-label">
                        <label htmlFor="">Email Address</label>
                        <div className="input-icon">
                            <input type="text" />
                            <AiOutlineMail />
                        </div>
                    </div>
                    <div className="input-label">
                        <label htmlFor="">Phone Number</label>
                        <div className="input-icon">
                            <input type="text" />
                            <FiPhone />
                        </div>
                    </div>
                    <div className="input-label">
                        <label htmlFor="">Booking Date</label>
                        <div className="input-icon">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="input-label">
                        <label htmlFor="">Department</label>
                        <select name="" id="">
                            <option value="">Select Department</option>
                            <option value="">Digestive Health</option>
                            <option value="">COVID-19 Consulting</option>
                            <option value="">Special Follow Up</option>
                        </select>
                    </div>
                    <div className="input-label">
                        <label htmlFor="">Doctor</label>
                        <select name="" id="">
                            <option value="">Select Doctor</option>
                            <option value="">Dr. Anne Mari</option>
                            <option value="">Dr. Juhon</option>
                            <option value="">Dr. Adam Smith</option>
                        </select>
                    </div>

                </form>
                <div className="submit-btn-check">
                    <button type="submit">Confirm Appointment</button>
                    <div className="radio">
                        <input type="radio" name="" id="" />
                        <span>Male</span>
                    </div>
                    <div className="radio">
                        <input type="radio" name="" id="" />
                        <span>Female</span>
                    </div>
                    <div className="radio">
                        <input type="radio" name="" id="" />
                        <span>Do not wish to disclose</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Appointment