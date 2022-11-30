import React, { useState } from 'react'
import "../Styles/Header.scss"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
import { FiSearch, FiPhone } from 'react-icons/fi'

const Header = () => {
    const [cls, setCls] = useState("")

    const showNav = () => {
        if (cls === "") {
            setCls("showNav")
        }
        else {
            setCls("")
        }
    }
    return (
        <header>
            <div className="left-nav">
                <Link to="/" className="logo"><img src={logo} width="200px" alt="" /></Link>
                <ul className={cls}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <span onClick={showNav} className='menu-icon'>&#9776;</span>
            </div>
            <div className="right-nav">
                <form className="search-form">
                    <input type="text" placeholder='Search' />
                    <FiSearch />
                </form>
                <div className="call-btn">
                    <FiPhone />
                    <a href="tel:+1(135) 1984 2020">+1(135) 1984 2020</a>
                </div>
            </div>
        </header>
    )
}

export default Header
