
import React, { useState } from "react";
import logo from "../images/logo.svg"
import iconFb from "../images/icon-facebook.svg"
import iconYt from "../images/icon-youtube.svg"
import iconX from "../images/icon-twitter.svg"
import iconPin from "../images/icon-pinterest.svg"
import iconInst from "../images/icon-instagram.svg"


export default function FooterCard() {
    return (

        <div className="footer-card ">
            <div className="footer-icon">
                <div className="">
                    <img src={logo} alt="Easyband Logo" />
                </div>
                <div className="icon-holder">
                    <img src={iconFb} alt="" />
                    <img src={iconYt} alt="" />
                    <img src={iconX} alt="" />
                    <img src={iconPin} alt="" />
                    <img src={iconInst} alt="" />
                </div>
            </div>
            <div className="footer-menu">
                <div className="part">
                    <a>About US</a>
                    <a>Contact</a>
                    <a>Blog</a>
                </div>
                <div className="part">
                    <a>Careers</a>
                    <a>Support</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
            <div className="footer-icon">
                <button className=" rounded-btn inactive">Request Invite</button>
                <div className="cp"> EasyBank All Right Resered </div>
            </div>
        </div>

    )
};  