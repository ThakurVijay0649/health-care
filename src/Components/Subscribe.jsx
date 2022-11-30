import React from 'react'
import "../Styles/Subscribe.scss"

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="left-subscribe">
                <h1>Subscribe to the updates!</h1>
                <p>Sign up to our newsletter and be the first to know about the latest news, special offers, events, and discounts.
                </p>
            </div>
            <div className="right-subscribe">
                <form>
                    <input type="text" placeholder='Your email address' />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default Subscribe