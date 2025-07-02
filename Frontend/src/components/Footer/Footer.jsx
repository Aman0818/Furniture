import React from 'react'
import './Footer.css'
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-part1">
                <div className="fp1-1">
                    <img src='/logo.png' alt="Logo" />
                    <p>Stay Inspired with HomeStyle.</p>
                    <input type="email" name="email"/>
                    <button>Subscribe</button>
                </div>
                <div className="fp1-2">
                    <li>Menu</li>
                    <li>who We Are</li>
                    <li>Our Services</li>
                    <li>Why Choose Us</li>
                    <li>Contact US</li>
                </div>
                <div className="fp1-3">
                    <li>Contact Information</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
            <div className="footer-part2">
                <hr />
                <p><LuCopyright/> HomeStyle. | All rights reserved</p>
            </div>
        </div>
    )
}
