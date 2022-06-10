import React from 'react'
import './contact.css';
import insta from "../../assets/insta_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";
import twitter from "../../assets/twitter_icon.svg";
import mail from "../../assets/mail_icon.svg";
import copyRight from "../../assets/copyright_icon.svg";
import heart from "../../assets/heart_icon.svg";

const Contact = () => {
  return (<section id="contact">
     <div className="Contact">
        <div className="Contact-Tittle">
          <p>CONTACT US</p>
        </div>
        <div className="Contact-Icons">
         <a href="https://www.instagram.com/iedc_dsce/" target="_blank"> <img src={insta} className="Contact-Icons-Insta" /></a>
          <a href="https://www.linkedin.com/company/iedc-dsce" target="_blank"><img src={linkedin} className="Contact-Icons-Linkedin" /></a>
          <a href="https://twitter.com/iedc_dsce" target="_blank"
          ><img src={twitter} className="Contact-Icons-Twitter" /></a>
         <a href="mailto:sainandan.ecell@dsce.edu.in"> <img src={mail} className="Contact-Icons-Mail" /></a>
        </div>
        <div className="Contact-Phone">
          <p>7978179793  |  8296215531</p>
        </div>
        <div className="Contact-CopyRight">
          <p>Copyright  </p>
          <img src={copyRight} className="Contact-CopyRight-CopyRight"/>
          <p>2022 All rights reserved | Made by IEDC team with </p>
          <img src={heart} className="Contact-CopyRight-Heart"/>
        </div>
     </div>
  </section>
   
  )
}

export default Contact;