import React from "react";
import Instagram from "../images/instagram-icon.png"
import LinkedIn from "../images/linkedin-icon.png"
import Github from "../images/github-icon.png"
import Email from "../images/email-icon.png"

const Footer = ()=>{
    return (
        <div className="footer-container">
              <div className="social-media-container">
                     <a href="https://github.com/SravaniPutturu"><img src={Github} alt="github"/></a>
                     <a href="https://www.linkedin.com/in/sravani-putturu-36956a252/"><img src={LinkedIn} alt="linkedin"/></a>
                     <a href="mailto:putturusravani.123@gmail.com"><img src={Instagram} alt="instagram"/></a>
                     <a href="https://www.instagram.com/sravaniputturu/"><img src={Email} alt="email"/></a>
              </div>
              <div className="background-color-container">
                      <select onChange={()=>document.getElementsByTagName('body')[0].style.backgroundColor=document.getElementsByTagName('select')[0].value}>
                          <option value="black">Darken-black</option>
                          <option value="Grey">Coloured-Grey</option>
                          <option value="Pink">Coloured-Pink</option>
                          <option value="Green">Coloured-Green</option>
                          <option value="Blue">Coloured-Blue</option>
                          <option value="white">Lighten-white</option>
                          <option value="purple">Coloured-LightPurple</option>
                      </select>
              </div>
        </div>
    )
}
export default Footer;