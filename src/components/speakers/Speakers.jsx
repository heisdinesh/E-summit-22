import React from 'react'
import './speakers.css';
import Shashank from '../../assets/Shashank Udupa.png'
import Roshaan from '../../assets/Roshaan Ray.png'

import Mukesh from '../../assets/Mukesh Kumar.png'
import Abhinav from '../../assets/Abhinav Arora.png'
// src\assets\Shashank Udupa.png
const Speakers = () => {
  
  return (
    <section id="speakers">
      <div className="speakers">
        <p className="speakers-tittle">SPEAKERS</p>
        <div className="speaker-align">

          //shashank_udupa
          <div className="speaker">
            <div className="speaker-image">
                <img  src={Shashank} alt="shashank_udupa "className="shashank"></img> 
               <div className="speaker-content">
                <h2 className="speaker-name">Shashank Udupa</h2>
                <p className="speaker-job" >Founder-Avalon Scenes</p>
                </div>
            </div>
          </div>
          
          //Roshaan Ray
          <div className="speaker">
            <div className="speaker-image">
                <img  src={Roshaan} alt="shashank_udupa "className="shashank"></img> 
               <div className="speaker-content">
                <h2 className="speaker-name">Roshaan Ray</h2>
                <p className="speaker-job" >Founder-Seed Paper India</p>
                </div>
            </div>
          </div>

          //Mukesh Kumar
          <div className="speaker">
            <div className="speaker-image">
                <img  src={Mukesh} alt="shashank_udupa "className="shashank"></img> 
               <div className="speaker-content">
                <h2 className="speaker-name">Mukesh Kumar</h2>
                <p className="speaker-job" >Product head-Brigde labs</p>
                </div>
            </div>
          </div>

          //ahbinav aroharo
          <div className="speaker">
            <div className="speaker-image">
                <img  src={Abhinav} alt="shashank_udupa "className="shashank"></img> 
               <div className="speaker-content">
                <h2 className="speaker-name">Abhinav Arora</h2>
                <p className="speaker-job" >CMO-Scenes</p>
                </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Speakers;