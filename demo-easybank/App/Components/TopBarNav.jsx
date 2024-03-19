
import React, { useState } from "react";
import "../styles.css"
import logo from "../images/logo.svg"
import imgIcon from "../images/icon-close.svg"
import imgHb from "../images/icon-hamburger.svg"
export default function TopBarNav()  {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("set to "+ !menuOpen )
      setMenuOpen(!menuOpen);
    };
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Easyband Logo" />
            </div>
        <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          <div className={menuOpen ? "icon-hamburger inactive": "icon-hamburger"} >
          <img src={imgHb} alt="" />
          </div>
          <div className={menuOpen ? "icon-close": "icon-close inactive"} >
            <img src={imgIcon} alt="" />
          </div>
        </div>
        <div className={menuOpen ? "menu": "menu inactive"} id="menu">
          <div className="item"><a href="#">Home</a></div>
          <div className="item"><a href="#">About</a></div>
          <div className="item"><a href="#">Contact</a></div>
          <div className="item"><a href="#">Blog</a></div>
          <div className="item"><a href="#">Careers</a></div>
        </div>
        <div  className="invite-btn-nav">
            <button class="rounded-btn">Request Invite</button>
        </div>
      </div>
      )};  