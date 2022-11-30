import React from 'react'
import "../Styles/Footer.scss"
import logo from "../images/logo.png"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillApple } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer-col">
                    <img src={logo} alt="" width={150} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia ullam maiores.</p>
                    <div className="social-icons">
                        <a href="/"><BsFacebook /></a>
                        <a href="/"><AiFillTwitterCircle /></a>
                        <a href="/"><AiFillLinkedin /></a>
                        <a href="/"><AiFillInstagram /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h2>Contacts Info</h2>
                    <p><span>Address:</span>312 Clinton Circle Atlantic City, M2 080522</p>
                    <p><span>Phone:</span>+1(135) 1984 2020</p>
                    <p><span>Email:</span>information@tefri.com</p>
                    <p><span>Time:</span>Every day 24 hours</p>
                </div>
                <div className="footer-col">
                    <h2>Quick Link</h2>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Solutions</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>Apps Download</h2>
                    <div className="download">
                        <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"></path></svg>Play Store</button>
                        <button><AiFillApple />App Store</button>
                    </div>
                </div>
            </footer>
            <div className="para">
                <p>Copyright &copy; 2022 healthline.com All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer