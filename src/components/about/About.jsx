import React from 'react'
import './about.css';
import aboutImg from "../../assets/about.svg"
const About = () => {
  return (
    <section id="about">
    <div className="About">
      <div className="About-Content">
        <div className="About-Content-Tittle">
          <p>E-SUMMIT</p>
        </div>
        <div className="About-Content-Paragraph">
        <p>Spreading awareness about entrepreneurship, here comes the biggest Entrepreneurial event of DSCE, E-SUMMIT’22. Breaking the myths and truths about entrepreneurship, uniting people of the same DNA who are eager to make a difference and set their mark! Featuring India's finest entrepreneurs who made it big, sharing their journey and experiences and paving a path for the aspiring to follow.</p>

        </div>
      </div>
      <div className="About-Img">
        <img src={aboutImg} alt="abt-img" className="About-Img-Svg"/>
      </div>
    </div>
    </section>
  )
}

export default About;