import React from "react";
import keyboard from '../images/keyboard.png'
import guestIcon from '../images/guest-icon.jpeg'

const Navbar = ()=>{
    return (
        <div className="navbar-container">
            <div className="keyboard-container">
                   <p>TypeCat</p>
                   <img src={keyboard} alt="keyboard"/>
            </div>
            <div>
                <div>
                    <img src={guestIcon} alt="user-account-icon"/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;